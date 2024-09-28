import { NextAuthOptions } from "next-auth";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchRedis } from "@/helpers/redis";

function getCredentials(provider: String) {
  const clientId = process.env[`${provider}_CLIENT_ID`];
  const clientSecret = process.env[`${provider}_CLIENT_SECRET`];

  if (!clientId || clientId.length === 0) {
    throw new Error(`Missing ${provider}_CLIENT_ID`);
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error(`Missing ${provider}_CLIENT_SECRET`);
  }

  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider(getCredentials("GOOGLE")),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
        id: { label: "ID", type: "text" },
        name: { label: "Name", type: "text" },
        image: { label: "Image", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { email, password, id, name, image } = credentials;

        return {
          id: id,
          email: email,
          password: password,
          name: name,
          image: image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUserResult = (await fetchRedis("get", `user:${token.id}`)) as
        | string
        | null;

      if (!dbUserResult) {
        if (user) {
          token.id = user.id; // Store the user ID in the JWT
          token.email = user.email; // Store the user email in the JWT
          token.name = user.name; // Store the user name in the JWT
          token.picture = user.image;
        }
        return token;
      }

      const dbUser = JSON.parse(dbUserResult);

      return {
        ...token,
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Attach user ID to session
        session.user.email = token.email; // Attach user email to session
        session.user.name = token.name; // Attach user name to session
        session.user.image = token.picture;
      }
      return session;
    },
    redirect() {
      return "/";
    },
  },
};

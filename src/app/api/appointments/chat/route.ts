import { AddFriendSchema } from "@/lib/validation/add-friend";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { fetchRedis } from "@/helpers/redis";
import { db } from "@/lib/db";
import { z } from "zod";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { doctor_id, user_id } = body;
    if (!doctor_id || !user_id) {
      return new Response("Invalid request payload", { status: 422 });
    }
    console.log(doctor_id, user_id);
    db.sadd(`user:${user_id}:friends`, doctor_id);
    db.sadd(`user:${doctor_id}:friends`, user_id);

    return new Response("ok");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request payload", { status: 422 });
    }
    console.log(error);
    return new Response("Something went wrong", { status: 400 });
  }
}

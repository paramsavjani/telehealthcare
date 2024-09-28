"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";

const NavBar = () => {
  const { data: session, status } = useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-white text-3xl font-extrabold tracking-wide hover:text-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 rounded"
        >
          Med<span className="text-blue-400">Connect</span>
        </a>

        {status === "authenticated" ? (
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 bg-gray-50 rounded-full overflow-hidden">
              <Image
                fill
                referrerPolicy="no-referrer"
                className="object-cover rounded-full"
                src={session?.user?.image || "/default-avatar.png"} // Fallback image for users without a profile picture
                alt="Your profile picture"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">
                {session.user.name}
              </span>
              <button
                onClick={async () => {
                  setIsSigningOut(true);
                  try {
                    await signOut();
                  } catch (error) {
                    toast.error("There was a problem signing out");
                  } finally {
                    setIsSigningOut(false);
                  }
                }}
                className="text-blue-400 text-xs hover:underline focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <ul className="flex space-x-6 text-base font-medium">
            <li>
              <a
                href="/login"
                className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus-visible:ring focus-visible:ring-blue-400"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full shadow-md hover:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus-visible:ring focus-visible:ring-gray-300"
              >
                Login
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

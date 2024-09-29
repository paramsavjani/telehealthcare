"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PopUp from "./PopUp";

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
          We<span className="text-blue-400">Med</span>
        </a>
        <ul className="flex space-x-8 text-base font-medium">
          
          <li>
            <a
              href="/appointment"
              className="text-gray-300 hover:text-white relative group"
            >
              Video Consult
              <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href={status === "authenticated"?'/dashboard':'/'}
              className="text-gray-300 hover:text-white relative group"
            >
              Chat with Doctor
              <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
        {status === "authenticated" ? (
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 bg-gray-50 rounded-full overflow-hidden">
              <Image
                fill
                referrerPolicy="no-referrer"
                className="object-cover rounded-full"
                src={session?.user?.image || "/default-avatar.png"}
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
                Login as Doctor
              </a>
            </li>
            <li>
              <Dialog>
                <DialogTrigger>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full shadow-md hover:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus-visible:ring focus-visible:ring-gray-300"
                  >
                    Login as Patient
                  </a>
                </DialogTrigger>
                <DialogContent className="p-0 w-auto bg-transparent border-none">
                  <PopUp />
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

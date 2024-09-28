"use client";
import { useSession } from "next-auth/react";
import React from "react";

const NavBar = () => {


  return (
    <nav className="bg-gray-900 p-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-white text-3xl font-bold tracking-wide hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Med<span className="text-blue-400">Connect</span>
        </a>

 
          <ul className="flex space-x-6 text-base font-medium">
            <li>
              <a
                href="/login"
                className="px-4 py-2 bg-blue-400 text-gray-900 rounded-full shadow-md hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Login
              </a>
            </li>
          </ul>
        
      </div>
    </nav>
  );
};

export default NavBar;

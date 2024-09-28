"use client"; // This makes the component a Client Component

import React, { useState } from "react";
import Image from "next/image";

const BgHome = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-[60vh] flex items-center justify-end pr-12 overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        src="https://savethestorks.com/wp-content/uploads/2024/06/time-management-for-moms-3-1200x675.jpg"
        alt="Background"
        layout="fill"
        quality={80}
      />

      {/* Text Overlay */}
      <div
        className={`relative z-10 text-right text-3xl md:text-8xl lg:text-5xl font-bold text-gray-800 
          transition-transform duration-500 ease-in-out transform ${
            isHovered ? "translate-x-2 scale-105" : "translate-x-0"
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          fontFamily: "'Roboto Slab', serif", // Custom font family
          lineHeight: "1.2", // Tighter line spacing for a more elegant look
        }}
      >
        Your Doctor is Just <br /> a Click Away
      </div>

      {/* Optional Overlay for Dim Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default BgHome;

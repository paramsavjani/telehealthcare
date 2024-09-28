"use client"; // This makes the component a Client Component

import React, { useState } from "react";

const BgHome = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="page" style={{ position: "relative", textAlign: "center" }}>
      <img
        style={{
          width: "100%",
          height: "60vh",
          objectFit: "cover",
          opacity: 1, // Image opacity
        }}
        src="https://savethestorks.com/wp-content/uploads/2024/06/time-management-for-moms-3-1200x675.jpg"
        alt="oops"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "75%", // Centered horizontally
          transform: "translate(-50%, -50%)", // Centered vertically
          background: "linear-gradient(45deg, rgb(226 229 230), rgb(0 0 0)) text", // Sky blue gradient
          WebkitBackgroundClip: "text", // Clips the background to the text
          backgroundClip: "text",
          color: "transparent", // Makes the text color transparent to show the gradient
          fontSize: "3em", // Increased font size for more impact
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif", // Font family
          letterSpacing: "2px", // Letter spacing
          textAlign: "center", // Center text
          padding: "10px", // Padding around text
          borderRadius: "5px", // Rounded corners for a softer look
          transition: "text-shadow 0.3s ease", // Smooth transition for hover effect
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Take Online Doctor Consultation
      </div>
    </div>
  );
};

export default BgHome;

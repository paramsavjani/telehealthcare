"use client"; // Add this line for Client Component

import React from "react";

const CardsList = () => {
  // Sample card data with all images
  const cardsData = [
    {
      id: 1,
      title: "General Physician",
      price: 399,
      imageUrl: "/top-speciality-gp.svg",
      description:
        "Consult a general physician for routine health check-ups and guidance on general health concerns.",
    },
    {
      id: 2,
      title: "Mental Wellness",
      price: 599,
      imageUrl: "/12-mental-wellness.webp",
      description:
        "Specialist consultation for mental health and wellness, including symptoms like anxiety, depression, and stress.",
    },
    {
      id: 3,
      title: "Coughing Specialist",
      price: 450,
      imageUrl: "/coughing.webp",
      description:
        "Get help with persistent coughing, wheezing, and shortness of breath from a qualified specialist.",
    },
    {
      id: 4,
      title: "Irregular Periods",
      price: 499,
      imageUrl: "/irregular-painful+period.webp",
      description:
        "Consult for irregular and painful periods, including symptoms such as heavy bleeding or missed cycles.",
    },
    {
      id: 5,
      title: "Kidney Specialist",
      price: 650,
      imageUrl: "/top-speciality-kidney.svg",
      description:
        "Expert consultations for kidney health, symptoms include back pain, blood in urine, or swelling in extremities.",
    },
    {
      id: 6,
      title: "Pediatric Specialist",
      price: 650,
      imageUrl: "/top-speciality-pediatric.svg",
      description:
        "Expert consultations for children's health, covering issues like developmental delays, allergies, and infections.",
    },
    {
      id: 7,
      title: "Sexology Specialist",
      price: 700,
      imageUrl: "/top-speciality-sexology.svg",
      description:
        "Consultations for sexual health and education, including symptoms of erectile dysfunction and relationship issues.",
    },
    {
      id: 8,
      title: "Stomach Specialist",
      price: 550,
      imageUrl: "/top-speciality-stomach.svg",
      description:
        "Get expert advice for stomach-related issues such as acid reflux, bloating, and chronic pain.",
    },
    {
      id: 9,
      title: "Gynaecology Specialist",
      price: 550,
      imageUrl: "/gynac.svg",
      description:
        "Get expert advice for gynecological issues, including irregular menstruation, pelvic pain, and hormonal imbalances.",
    },
    {
      id: 10,
      title: "Dermatologic Specialist",
      price: 550,
      imageUrl: "/Acne.webp",
      description:
        "Get expert advice for acne-related issues and skin care, including symptoms of severe breakouts and scarring.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center p-4 bg-gray-100">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="max-w-xs m-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-24 h-24 object-cover rounded-t-lg" // Smaller image size
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            {card.title}
          </h3>
          <p className="text-lg text-gray-600">₹{card.price}</p>
          <p className="text-sm text-gray-500 mt-2">{card.description}</p>
          <a
            href="#"
            className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Consult now &nbsp; &gt;
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardsList;

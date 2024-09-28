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

  // Inline styles
  const cardStyle = {
    width: "250px",
    padding: "20px",
    background: "linear-gradient(145deg, rgb(245 245 245), rgb(255 255 255))",
    borderRadius: "15px",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    margin: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardImageStyle = {
    width: "80px",
    height: "80px",
    marginBottom: "15px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ddd",
  };

  const cardTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  };

  const cardPriceStyle = {
    fontSize: "16px",
    color: "#888",
    marginBottom: "15px",
  };

  const cardDescriptionStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
    padding: "0 10px",
  };

  const cardLinkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 15px",
    backgroundColor: "#007bff",
    borderRadius: "20px",
    color: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {cardsData.map((card) => (
        <div
          key={card.id}
          style={cardStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={card.imageUrl} alt={card.title} style={cardImageStyle} />
          <h3 style={cardTitleStyle}>{card.title}</h3>
          <p style={cardPriceStyle}>₹{card.price}</p>
          <p style={cardDescriptionStyle}>{card.description}</p>
          <a
            href="#"
            style={cardLinkStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Consult now
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardsList;

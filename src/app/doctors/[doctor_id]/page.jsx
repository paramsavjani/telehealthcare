"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FNavbar } from "../../../components/main/final_navbar";

export default function Page({ params }) {
  const [doctors, setDoctors] = useState([]);
  const { doctor_id } = params;
  const doctor_id_new = doctor_id.split("-").join(" "); // Modify the doctor_id as needed

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await axios.post("/api/doctors/", {
          doctor_id: doctor_id_new,
        });
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    }

    fetchDoctors();
  }, [doctor_id_new]);

  // Function to handle booking appointment
  const handleBookAppointment = (doctorName) => {
    alert(`Appointment booked with Dr. ${doctorName}!`);
  };

  return (
    <>
    <FNavbar/>
    <div className="container">
      <h1 className="title">{doctor_id}</h1>
      <div className="doctor-profiles">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="doctor-profile">
            <img src={doctor.image_url} alt={doctor.name} className="doctor-image" />
            <div className="doctor-details">
              <h2 className="doctor-name">{doctor.name}</h2>
              <p><strong>Specialty:</strong> {doctor.specialty}</p>
              <p><strong>Degree:</strong> {doctor.degree}</p>
              <p><strong>Rating:</strong> {doctor.rating} / 5</p>
              <p><strong>Consulting Fee:</strong> ₹{doctor.consulting_fee}</p>
              <p><strong>Description:</strong> {doctor.description}</p>
              <p><strong>Email:</strong> {doctor.email_id}</p>
              <p><strong>Password:</strong> {doctor.password}</p>
              <p><strong>Experience:</strong> {doctor.experience} years</p>
              <div className="button-container">
                <button 
                  className="book-appointment" 
                  onClick={() => handleBookAppointment(doctor.name)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
          background-color: #eef2f3; /* Light background color */
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .title {
          text-align: center;
          background: linear-gradient(90deg, #007bff, #00c6ff); /* Gradient color */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; /* Makes the text transparent to show gradient */
          margin-bottom: 30px;
          font-size: 2.5rem;
          font-weight: bold;
          padding: 10px; /* Padding for the heading */
        }
        .doctor-profiles {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .doctor-profile {
          display: flex;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
          background-color: #ffffff; /* White background for profiles */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          align-items: center;
          transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition */
        }
        .doctor-profile:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
        }
        .doctor-image {
          width: 120px;
          height: 120px;
          border-radius: 8px; /* Rounded corners */
          object-fit: cover;
          margin-right: 30px; /* Increased space between image and details */
          border: 2px solid #007bff; /* Border color */
        }
        .doctor-details {
          flex: 1;
        }
        .doctor-name {
          font-size: 1.8rem;
          color: #007bff; /* Bright blue color for names */
          margin-bottom: 10px;
        }
        .button-container {
          text-align: center; /* Center button */
          margin-top: 10px; /* Space above button */
        }
        .book-appointment {
          padding: 10px 20px;
          background: linear-gradient(90deg, #007bff, #00c6ff); /* Gradient color */
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s; /* Smooth transitions */
          font-weight: bold;
          font-size: 1.1rem;
        }
        .book-appointment:hover {
          transform: scale(1.05); /* Slight scaling effect on hover */
        }
      `}</style>
    </div>
    </>
  );
}

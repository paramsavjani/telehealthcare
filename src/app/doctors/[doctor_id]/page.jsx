"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FNavbar } from "../../../components/main/final_navbar";
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
  const [doctors, setDoctors] = useState([]);
  const { doctor_id } = params;
  const doctor_id_new = doctor_id.split("-").join(" "); // Modify the doctor_id as needed
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const router=useRouter();
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
    setSelectedDoctor(doctorName);
    setShowOptions(true); // Toggle options after booking
  };

  // Functions to handle Chat and Video Call
  const handleChat = () => {
    alert(`Chat initiated with Dr. ${selectedDoctor}!`);
    setShowOptions(false); // Hide options after selecting
  };

  const handleVideoCall = (doctor_id) => {
    router.push(`/videocall/${doctor_id}`)
    setShowOptions(false); // Hide options after selecting
  };

  return (
    <>
      <FNavbar />
      <div className="max-w-7xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-10">
          {doctor_id}
        </h1>
        <div className="space-y-8">
          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="flex flex-col sm:flex-row items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={doctor.image_url}
                alt={doctor.name}
                className="w-32 h-32 rounded-lg object-cover border-4 border-blue-500 mr-8"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">{doctor.name}</h2>
                <div className="text-gray-700 space-y-1">
                  <p><strong>Specialty:</strong> {doctor.specialty}</p>
                  <p><strong>Degree:</strong> {doctor.degree}</p>
                  <p><strong>Rating:</strong> {doctor.rating} / 5</p>
                  <p><strong>Consulting Fee:</strong> ₹{doctor.consulting_fee}</p>
                  <p><strong>Description:</strong> {doctor.description}</p>
                  <p><strong>Email:</strong> {doctor.email_id}</p>
                  <p><strong>Experience:</strong> {doctor.experience} years</p>
                </div>
                <div className="mt-6">
                  <button
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:scale-105 transition-transform"
                    onClick={() => handleBookAppointment(doctor.name)}
                  >
                    Book Appointment
                  </button>
                </div>
                {showOptions && selectedDoctor === doctor.name && (
                  <div className="mt-6 flex space-x-4">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      onClick={handleChat}
                    >
                      Chat
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      onClick={()=>{handleVideoCall(doctor._id)}}
                    >
                      Video Call
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

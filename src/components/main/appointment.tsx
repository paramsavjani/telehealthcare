"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  time: string;  // The appointment time
  videoURL: string;  // Unique URL for the video meet
}

interface AppointmentProps {
  userId: string;  // Current user ID
  isDoctor: boolean;  // True if doctor, false if patient
}

export default function Appointment({ userId, isDoctor }: AppointmentProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Fetch appointments for the logged-in user (doctor or patient)
  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await axios.get(`/api/appointments/${userId}`, {
          params: { isDoctor },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    }

    fetchAppointments();
  }, [userId, isDoctor]);

  // Render the list of appointments with their times and video meet URLs
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">
        {isDoctor ? "Your Appointments" : "My Appointments"}
      </h1>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        <ul className="space-y-6">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="p-4 bg-gray-50 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-blue-600">
                    {isDoctor ? `Patient: ${appointment.patientName}` : `Doctor: ${appointment.doctorName}`}
                  </h2>
                  <p className="text-gray-700">
                    <strong>Time:</strong> {new Date(appointment.time).toLocaleString()}
                  </p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={appointment.videoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Join Video Meet
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

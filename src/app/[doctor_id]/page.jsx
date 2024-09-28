// /src/app/[doctor_id]/page.tsx

"use client";

import axios from "axios";
import { useEffect, useState } from "react";

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
        console.log("Doctors:", response.data);
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    }

    fetchDoctors();
  }, [doctor_id_new]); // Add doctor_id_new as a dependency

  return (
    <div>
      <h1>Doctors in Specialty: {doctor_id}</h1>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
}

// /src/app/api/doctor/signin/route.ts

import { fetchRedis } from "@/helpers/redis";
import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// MongoDB connection string and database name
const url =
  "mongodb+srv://nidhidodiya174:GbfdBH53CQc2cSu8@cluster0.sbofj.mongodb.net/";
const dbName = "Nidhi_Mahek_db";

export async function POST(req: NextRequest) {
  const client = new MongoClient(url);

  // Parse the incoming JSON request body
  const body = await req.json();

  // Extract data from the request body
  const { name, email, password, degree, experience, specialization } = body;

  // Validation: Ensure all required fields are present
  if (
    !name ||
    !email ||
    !password ||
    !degree ||
    experience == null ||
    !specialization
  ) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    // Connect to the MongoDB database
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("doctors_table");

    // Check if the doctor already exists by email
    const existingDoctor = await collection.findOne({ email });

    if (existingDoctor) {
      return NextResponse.json(
        { message: "Email already in use. Please login." },
        { status: 409 }
      ); // Conflict
    }

    // Create a new doctor document
    const newDoctor = {
      name,
      email,
      password: password, // Store the hashed password
      degree,
      experience,
      specialization,
    };
    console.log(newDoctor);
    // Insert the new doctor document into the database
    await collection.insertOne(newDoctor);

    const doctor = await collection.findOne({ email });

    if (doctor) {
      // await fetchRedis(
      //   "set",
      //   `user:${doctor._id}`,
      //   JSON.stringify({
      //     id: doctor._id,
      //     email: doctor.email,
      //     emailVerified: true,
      //     name: doctor.name,
      //     image:
      //       "https://static.vecteezy.com/system/resources/previews/004/201/722/original/online-doctor-physician-professional-with-stethoscope-consultant-medical-protection-covid-19-flat-style-icon-free-vector.jpg",
      //   })
      // );

      // await fetchRedis(
      //   "set",
      //   `user:email:${doctor.email}`,
      //   JSON.stringify(doctor._id)
      // );
    } else {
      return NextResponse.json(
        { message: "Doctor not found after insertion." },
        { status: 500 }
      );
    }

    // Return a success response
    return NextResponse.json({ message: newDoctor }, { status: 201 });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      { message: "Error connecting to MongoDB" },
      { status: 500 }
    );
  } finally {
    // Ensure the MongoDB client is closed after the operation
    await client.close();
  }
}

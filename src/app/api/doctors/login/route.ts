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

  // Extract email and password from the request body
  const { email, password } = body;

  // Validation: Ensure both email and password are provided
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("doctors_table");

    // Find the doctor by email
    const doctor = await collection.findOne({ email });

    if (!doctor) {
      return NextResponse.json(
        { message: "Doctor not found. Please sign up." },
        { status: 408 }
      );
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = doctor.password === password;

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 401 }
      );
    }

    // If email and password are correct, return success
    return NextResponse.json({ message: doctor }, { status: 200 });
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
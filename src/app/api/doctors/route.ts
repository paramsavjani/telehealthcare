// /src/app/api/doctors/route.ts

import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const url ="mongodb+srv://nidhidodiya174:GbfdBH53CQc2cSu8@cluster0.sbofj.mongodb.net/";
const dbName = "Nidhi_Mahek_db";

export async function POST(req: NextRequest) {
  const client = new MongoClient(url);

  const body = await req.json();

  const { doctor_id } = body;

  let new_doctor_id = doctor_id
    ? doctor_id.toString().split("-").join(" ")
    : "";

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("doctors_table");

    const doctors = await collection
      .find({ specialty: new_doctor_id })
      .sort({ rating: -1 })
      .toArray();

    return NextResponse.json(doctors, { status: 200 });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      { message: "Error connecting to MongoDB" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

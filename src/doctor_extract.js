const { MongoClient } = require("mongodb");



// Connection URL
const url =
  "mongodb+srv://nidhidodiya174:GbfdBH53CQc2cSu8@cluster0.sbofj.mongodb.net/"; // Replace with your MongoDB connection string
const dbName = "Nidhi_Mahek_db"; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url);


async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to database");

    // Access the database
    const db = client.db(dbName);

    // Access the collection
    const collection = db.collection("doctors_table"); // Make sure 'doctors' is the correct collection name

    // Query all documents
    const allResults = await collection.find({
      consulting_fee
      :399}).toArray();

    // Output all results
    console.log("All documents in the collection:", allResults);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

// Run the function
run().catch(console.dir);
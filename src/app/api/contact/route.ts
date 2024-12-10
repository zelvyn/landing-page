import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

// Helper function to open the SQLite database and initialize tables
async function openDb() {
  // Define the database path depending on the environment
  const dbPath =
    process.env.NODE_ENV === "production"
      ? path.join("/tmp", "database.sqlite") // Use Vercel's writable temporary directory
      : path.join(process.cwd(), "src", "db", "database.sqlite"); // Use local directory for development

  // Open the SQLite database
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Ensure the `responses` table exists
  await db.run(`
    CREATE TABLE IF NOT EXISTS responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      contactNumber TEXT,
      message TEXT,
      createdAt TEXT
    )
  `);

  return db;
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, contactNumber, message } = body;

    // Validate the required fields
    if (!name || !email || !contactNumber || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Open the database
    const db = await openDb();

    // Insert the data into the `responses` table
    await db.run(
      "INSERT INTO responses (name, email, contactNumber, message, createdAt) VALUES (?, ?, ?, ?, ?)",
      [name, email, contactNumber, message, new Date().toISOString()]
    );

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to process the request" },
      { status: 500 }
    );
  }
}

// Handle GET requests
export async function GET() {
  try {
    // Open the database
    const db = await openDb();

    // Fetch all responses from the `responses` table
    const responses = await db.all(
      "SELECT * FROM responses ORDER BY createdAt DESC"
    );

    return NextResponse.json(responses);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch responses" },
      { status: 500 }
    );
  }
}

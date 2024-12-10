import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

// Helper function to open the SQLite database
async function openDb() {
  // Use a temporary directory in production
  const dbPath =
    process.env.NODE_ENV === "production"
      ? path.join("/tmp", "database.sqlite") // Vercel's writable directory
      : path.join(process.cwd(), "src", "db", "database.sqlite"); // Local directory

  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, contactNumber, message } = body;

    // Validate required fields
    if (!name || !email || !contactNumber || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const db = await openDb();

    // Ensure the table exists
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

    // Insert data into the database
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
    const db = await openDb();

    // Fetch all responses
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

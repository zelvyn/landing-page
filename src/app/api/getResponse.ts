import openDb from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
  message: string;
  createdAt: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const db = await openDb();
      const responses: ResponseData[] = await db.all("SELECT * FROM responses ORDER BY createdAt DESC");

      res.status(200).json(responses);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Failed to fetch responses" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

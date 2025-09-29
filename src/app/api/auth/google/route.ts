import { NextRequest, NextResponse } from "next/server";
import { API_ENDPOINTS } from "@/utils/constants";

export async function POST(request: NextRequest) {
  try {
    const { token, userType } = await request.json();

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    // Call your backend service
    const backendResponse = await fetch(
      `${process.env.BACKEND_PROD_URL}${API_ENDPOINTS.AUTH.GOOGLE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, userType }),
      },
    );

    const result = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(
        { error: result.error || "Authentication failed" },
        { status: backendResponse.status },
      );
    }

    return NextResponse.json(result, { status: backendResponse.status });
  } catch (error) {
    console.error("Google auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

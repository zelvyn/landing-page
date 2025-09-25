import { API_ENDPOINTS } from "./constants";

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

if (typeof window !== "undefined" && !GOOGLE_CLIENT_ID) {
  console.error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set");
}

export interface GoogleUser {
  id: string;
  email: string;
  name: string;
  picture: string;
  userType: "ARTIST" | "USER";
  isVerified: boolean;
}

export interface AuthResponse {
  success: boolean;
  user?: GoogleUser;
  error?: string;
}

export const handleGoogleAuth = async (
  credential: string,
  userType: "ARTIST" | "USER"
): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${BACKEND_URL}${API_ENDPOINTS.AUTH.GOOGLE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: credential, userType }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Authentication failed",
      };
    }

    return {
      success: true,
      user: result.data,
    };
  } catch (error) {
    return {
      success: false,
      error: "Network error occurred",
    };
  }
};

export const handleEmailAuth = async (
  email: string,
  password: string,
  type: "login" | "signup",
  additionalData?: { name?: string; userType?: string }
): Promise<AuthResponse> => {
  try {
    const endpoint =
      type === "login" ? API_ENDPOINTS.AUTH.LOGIN : API_ENDPOINTS.AUTH.SIGNUP;
    const body =
      type === "login"
        ? { email, password }
        : { email, password, ...additionalData };

    const fullUrl = `${BACKEND_URL}${endpoint}`;

    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || `${type} failed`,
      };
    }

    return {
      success: true,
      user: result.data,
    };
  } catch (error) {
    return {
      success: false,
      error: "Network error occurred",
    };
  }
};

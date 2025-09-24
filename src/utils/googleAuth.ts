export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;

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
    const response = await fetch("/api/auth/google", {
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
      user: result.user,
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
    const endpoint = type === "login" ? "/api/auth/login" : "/api/auth/signup";
    const body =
      type === "login"
        ? { email, password }
        : { email, password, ...additionalData };

    const response = await fetch(endpoint, {
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
      user: result.user,
    };
  } catch (error) {
    return {
      success: false,
      error: "Network error occurred",
    };
  }
};

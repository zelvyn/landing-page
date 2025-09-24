export const COLORS = {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  secondary: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    SIGNUP: "/api/auth/signup",
    GOOGLE: "/api/auth/google",
    FORGOT_PASSWORD: "/api/auth/forgot-password",
  },
  ARTIST: {
    PROFILE: "/api/artist/profile",
    ARTWORKS: "/api/artist/artworks",
  },
} as const;

export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  FORGOT_PASSWORD: "/auth/forgot-password",
  DASHBOARD: "/dashboard",
  ARTIST_PROFILE: (username: string) => `/artist/${username}`,
} as const;

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  scaleIn: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;
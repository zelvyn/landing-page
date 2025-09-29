export type UserRole = "ARTIST" | "USER" | "GUEST";

export interface RoutePermission {
  path: string;
  allowedRoles: UserRole[];
  requireAuth: boolean;
}

export const ROUTE_PERMISSIONS: RoutePermission[] = [
  // Public routes (accessible to all including guests)
  { path: "/", allowedRoles: ["ARTIST", "USER", "GUEST"], requireAuth: false },
  {
    path: "/explore",
    allowedRoles: ["ARTIST", "USER", "GUEST"],
    requireAuth: false,
  },
  {
    path: "/artists",
    allowedRoles: ["ARTIST", "USER", "GUEST"],
    requireAuth: false,
  },
  {
    path: "/about",
    allowedRoles: ["ARTIST", "USER", "GUEST"],
    requireAuth: false,
  },
  {
    path: "/terms",
    allowedRoles: ["ARTIST", "USER", "GUEST"],
    requireAuth: false,
  },
  {
    path: "/privacy",
    allowedRoles: ["ARTIST", "USER", "GUEST"],
    requireAuth: false,
  },

  // Auth routes (only for non-authenticated users)
  { path: "/auth/login", allowedRoles: ["GUEST"], requireAuth: false },
  { path: "/auth/signup", allowedRoles: ["GUEST"], requireAuth: false },
  {
    path: "/auth/forgot-password",
    allowedRoles: ["GUEST"],
    requireAuth: false,
  },

  // Artist-only routes
  { path: "/dashboard", allowedRoles: ["ARTIST"], requireAuth: true },
  { path: "/dashboard/*", allowedRoles: ["ARTIST"], requireAuth: true },
  { path: "/upload", allowedRoles: ["ARTIST"], requireAuth: true },
  { path: "/analytics", allowedRoles: ["ARTIST"], requireAuth: true },

  // User-only routes
  { path: "/favorites", allowedRoles: ["USER"], requireAuth: true },
  { path: "/collections", allowedRoles: ["USER"], requireAuth: true },

  // Authenticated user routes (both artist and user)
  { path: "/profile", allowedRoles: ["ARTIST", "USER"], requireAuth: true },
  { path: "/settings", allowedRoles: ["ARTIST", "USER"], requireAuth: true },
  { path: "/messages", allowedRoles: ["ARTIST", "USER"], requireAuth: true },
  {
    path: "/notifications",
    allowedRoles: ["ARTIST", "USER"],
    requireAuth: true,
  },
];

export const checkRoutePermission = (
  path: string,
  userRole: UserRole,
  isAuthenticated: boolean,
): boolean => {
  const permission = ROUTE_PERMISSIONS.find(
    (p) =>
      p.path === path ||
      (p.path.endsWith("/*") && path.startsWith(p.path.slice(0, -2))),
  );

  if (!permission) {
    // Default: require authentication for unknown routes
    return isAuthenticated;
  }

  if (permission.requireAuth && !isAuthenticated) {
    return false;
  }

  return permission.allowedRoles.includes(userRole);
};

export const getRedirectPath = (
  userRole: UserRole,
  isAuthenticated: boolean,
): string => {
  if (!isAuthenticated) return "/";

  switch (userRole) {
    case "ARTIST":
      return "/dashboard";
    case "USER":
      return "/explore";
    default:
      return "/";
  }
};

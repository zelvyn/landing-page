"use client";

import { useUserStore } from "@/store/useUserStore";

interface GuestRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const GuestRoute = ({ children, fallback }: GuestRouteProps) => {
  const { isAuthenticated } = useUserStore();

  if (isAuthenticated && fallback) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

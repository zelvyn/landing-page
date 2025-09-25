"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import { ROUTES } from "@/utils/constants";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ("ARTIST" | "USER")[];
  requireAuth?: boolean;
}

export const ProtectedRoute = ({ 
  children, 
  allowedRoles = ["ARTIST", "USER"], 
  requireAuth = true 
}: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      router.push(ROUTES.LOGIN);
      return;
    }

    if (isAuthenticated && user && !allowedRoles.includes(user.userType)) {
      router.push("/unauthorized");
      return;
    }
  }, [isAuthenticated, user, allowedRoles, requireAuth, router]);

  if (requireAuth && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated && user && !allowedRoles.includes(user.userType)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-neutral-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
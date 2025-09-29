"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/Button";
import { useUserStore } from "@/store/useUserStore";
import { getRedirectPath } from "@/utils/rbac";
import { BsShield } from "react-icons/bs";

export default function UnauthorizedPage() {
  const { user, isAuthenticated } = useUserStore();
  const redirectPath = getRedirectPath(
    user?.userType || "GUEST",
    isAuthenticated,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <BsShield className="w-10 h-10 text-red-600" />
        </div>

        <h1 className="text-3xl font-bold text-neutral-900 mb-4">
          Access Denied
        </h1>
        <p className="text-neutral-600 mb-8">
          You don't have permission to access this page. This area is restricted
          to specific user roles.
        </p>

        <div className="space-y-4">
          <Link href={redirectPath}>
            <Button className="w-full">
              Go to {user?.userType === "ARTIST" ? "Dashboard" : "Home"}
            </Button>
          </Link>

          <Link href="/">
            <Button variant="ghost" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

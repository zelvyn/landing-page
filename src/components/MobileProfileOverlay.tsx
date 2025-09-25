"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { PROFILE_MENU_ITEMS } from "@/utils/constants";
import { BsPerson, BsGear, BsBoxArrowRight } from "react-icons/bs";
import Image from "next/image";

interface MobileProfileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const MobileProfileOverlay = ({
  isOpen,
  onClose,
  onLogout,
}: MobileProfileOverlayProps) => {
  const { user } = useUserStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Mobile Profile Menu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-20 right-4 w-72 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 z-[101] overflow-hidden"
          >
            {/* User Info Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border-b border-white/30">
              <div className="flex items-center space-x-4">
                {user?.profileImage ? (
                  <div className="relative">
                    <Image
                      src={user.profileImage}
                      alt={user?.name}
                      className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                ) : (
                  <div className="relative w-12 h-12 rounded-full border-3 border-white bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center shadow-lg">
                    <BsPerson className="w-6 h-6 text-purple-600" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-neutral-800 truncate">
                    {user?.name}
                  </p>
                  <p className="text-sm text-neutral-600 truncate">
                    {user?.username ? `@${user.username}` : user?.email}
                  </p>
                  <div className="flex items-center mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        user?.emailVerified
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {user?.emailVerified ? "Verified" : "Unverified"}
                    </span>
                    <span className="text-xs text-neutral-500 ml-2 capitalize">
                      {user?.userType?.toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-3">
              {PROFILE_MENU_ITEMS.map((item, index) => {
                if ("action" in item && item.action === "logout") {
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onLogout();
                        onClose();
                      }}
                      className="flex items-center w-full px-5 py-3 text-sm font-medium text-red-600 hover:bg-red-50/80 hover:text-red-700 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                        <BsBoxArrowRight className="w-4 h-4" />
                      </div>
                      {item.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center px-5 py-3 text-sm font-medium text-neutral-700 hover:bg-white/60 hover:text-neutral-900 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mr-3 group-hover:from-purple-200 group-hover:to-blue-200 transition-all">
                      {item.icon === "BsPerson" && (
                        <BsPerson className="w-4 h-4 text-purple-600" />
                      )}
                      {item.icon === "BsGear" && (
                        <BsGear className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

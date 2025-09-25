"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useUserStore } from "@/store/useUserStore";
import { PROFILE_MENU_ITEMS } from "@/utils/constants";
import { BsPerson, BsGear, BsBoxArrowRight } from "react-icons/bs";

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const iconMap = {
  BsPerson,
  BsGear,
  BsBoxArrowRight,
};

export const ProfileMenu = ({ isOpen, onClose, onLogout }: ProfileMenuProps) => {
  const { user } = useUserStore();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: typeof PROFILE_MENU_ITEMS[number]) => {
    if ('action' in item && item.action === "logout") {
      onLogout();
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 z-50"
        >
          {/* User Info Header */}
          <div className="px-4 py-2 border-b border-neutral-100">
            <p className="text-sm font-medium text-neutral-900">{user?.name}</p>
            <p className="text-xs text-neutral-500">{user?.email}</p>
          </div>

          {/* Menu Items */}
          {PROFILE_MENU_ITEMS.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            if ('action' in item && item.action === "logout") {
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center w-full px-4 py-2 text-sm ${
                    ('className' in item ? item.className : null) || "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-3" />
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleItemClick(item)}
                className={`flex items-center px-4 py-2 text-sm ${
                  ('className' in item ? item.className : null) || "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
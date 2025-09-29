"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { BsBell, BsX } from "react-icons/bs";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "success" | "warning" | "error";
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DUMMY_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "New artwork uploaded",
    message: "Your artwork 'Sunset Dreams' has been successfully uploaded",
    time: "2 minutes ago",
    read: false,
    type: "success",
  },
  {
    id: "2",
    title: "Profile view",
    message: "Someone viewed your profile",
    time: "1 hour ago",
    read: false,
    type: "info",
  },
  {
    id: "3",
    title: "Payment received",
    message: "You received $150 for 'Ocean Waves'",
    time: "3 hours ago",
    read: true,
    type: "success",
  },
  {
    id: "4",
    title: "System maintenance",
    message: "Scheduled maintenance tonight from 2-4 AM",
    time: "1 day ago",
    read: true,
    type: "warning",
  },
  {
    id: "5",
    title: "New follower",
    message: "John Doe started following you",
    time: "2 days ago",
    read: true,
    type: "info",
  },
];

export const NotificationModal = ({
  isOpen,
  onClose,
}: NotificationModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "error":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 right-4 lg:right-80 w-80 max-h-96 bg-white rounded-xl shadow-xl border border-neutral-200 z-[101] overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BsBell className="w-5 h-5 text-neutral-600" />
                <h3 className="font-semibold text-neutral-900">
                  Notifications
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <BsX className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {DUMMY_NOTIFICATIONS.map((notification) => (
                <div
                  key={notification.id}
                  className={`px-4 py-3 border-b border-neutral-100 hover:bg-neutral-50 transition-colors ${
                    !notification.read ? "bg-blue-50/50" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-sm font-medium text-neutral-900 truncate">
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-500">
                          {notification.time}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getTypeColor(notification.type)}`}
                        >
                          {notification.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-neutral-200 bg-neutral-50">
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Mark all as read
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

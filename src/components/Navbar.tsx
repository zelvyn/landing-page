"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { useUserStore } from "@/store/useUserStore";
import { ROUTES, PROFILE_MENU_ITEMS } from "@/utils/constants";
import { cn } from "@/utils/helpers";
import { Logo } from "./Logo";
import { LogoutModal } from "./LogoutModal";
import { ProfileMenu } from "./ProfileMenu";
import { MobileProfileOverlay } from "./MobileProfileOverlay";
import { NotificationModal } from "./NotificationModal";
import { BsBell, BsPerson, BsGear, BsBoxArrowRight } from "react-icons/bs";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { user, isAuthenticated } = useUserStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Explore", href: "/explore" },
    { label: "Artists", href: "/artists" },
    { label: "About", href: "/about" },
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2",
        isScrolled
          ? "bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 backdrop-blur-md border-b border-neutral-200 shadow-lg"
          : "bg-gradient-to-r from-purple-100/80 via-blue-100/80 to-pink-100/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={ROUTES.HOME}>
            <Logo size={"medium"} title />
          </Link>

          {/* Desktop Navigation - Only show when authenticated */}
          {isAuthenticated && (
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {user?.userType === "ARTIST" && (
                  <Link href={ROUTES.DASHBOARD}>
                    <Button variant="ghost" size="sm">
                      Dashboard
                    </Button>
                  </Link>
                )}

                {/* Notification Bell */}
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <BsBell className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Profile Menu */}
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2 p-1 rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user?.name}
                        className="w-10 h-10 rounded-full border-2 border-primary-200"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full border-2 border-primary-200 bg-neutral-100 flex items-center justify-center">
                        <BsPerson className="w-5 h-5 text-neutral-600" />
                      </div>
                    )}
                  </button>

                  <ProfileMenu
                    isOpen={showProfileMenu}
                    onClose={() => setShowProfileMenu(false)}
                    onLogout={handleLogout}
                  />
                </div>
              </div>
            ) : (
              <>
                <Link href={ROUTES.LOGIN}>
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href={ROUTES.SIGNUP}>
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Tablet Auth Section */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            {isAuthenticated ? (
              <>
                {/* Tablet Notification Bell */}
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <BsBell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Tablet Profile Menu */}
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center p-1 rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user?.name}
                        className="w-9 h-9 rounded-full border-2 border-primary-200"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full border-2 border-primary-200 bg-neutral-100 flex items-center justify-center">
                        <BsPerson className="w-4 h-4 text-neutral-600" />
                      </div>
                    )}
                  </button>

                  <ProfileMenu
                    isOpen={showProfileMenu}
                    onClose={() => setShowProfileMenu(false)}
                    onLogout={handleLogout}
                  />
                </div>
              </>
            ) : (
              <>
                <Link href={ROUTES.LOGIN}>
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href={ROUTES.SIGNUP}>
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}

            {/* Tablet Menu Button */}
            <button
              className="p-2 ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-0.5 bg-neutral-900 block transition-all duration-300"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-neutral-900 block mt-1 transition-all duration-300"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-0.5 bg-neutral-900 block mt-1 transition-all duration-300"
                />
              </div>
            </button>
          </div>

          {/* Mobile Auth Section */}
          <div className="md:hidden flex items-center space-x-2">
            {isAuthenticated && (
              <>
                {/* Mobile Notification Bell */}
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-neutral-600"
                >
                  <BsBell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Mobile Profile Image */}
                <button
                  onClick={() => setShowMobileProfile(!showMobileProfile)}
                  className="relative"
                >
                  {user?.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user?.name}
                      className="w-8 h-8 rounded-full border-2 border-primary-200"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full border-2 border-primary-200 bg-neutral-100 flex items-center justify-center">
                      <BsPerson className="w-4 h-4 text-neutral-600" />
                    </div>
                  )}
                </button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-0.5 bg-neutral-900 block transition-all duration-300"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-neutral-900 block mt-1 transition-all duration-300"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-0.5 bg-neutral-900 block mt-1 transition-all duration-300"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 border-t border-neutral-200"
          >
            <div className="px-4 py-4 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {/* Navigation Links - Only show when authenticated */}
              {isAuthenticated && (
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-white/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* User Actions Section */}
              <div
                className={cn(
                  "space-y-3",
                  isAuthenticated && "pt-4 border-t border-neutral-200"
                )}
              >
                {isAuthenticated ? (
                  <>
                    {/* User Info Card */}
                    <div className="bg-white/60 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-3">
                        {user?.profileImage ? (
                          <img
                            src={user.profileImage}
                            alt={user?.name}
                            className="w-10 h-10 rounded-full border-2 border-primary-200"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full border-2 border-primary-200 bg-neutral-100 flex items-center justify-center">
                            <BsPerson className="w-5 h-5 text-neutral-600" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-neutral-900 truncate">
                            {user?.name}
                          </p>
                          <p className="text-xs text-neutral-500 truncate">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Button for Artists */}
                    {user?.userType === "ARTIST" && (
                      <Link href={ROUTES.DASHBOARD}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Dashboard
                        </Button>
                      </Link>
                    )}

                    {/* Profile Menu Items */}
                    <div className="space-y-2">
                      {PROFILE_MENU_ITEMS.map((item) => {
                        if ("action" in item && item.action === "logout") {
                          return (
                            <Button
                              key={item.id}
                              variant="outline"
                              size="sm"
                              className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() => {
                                handleLogout();
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <BsBoxArrowRight className="w-4 h-4 mr-2" />
                              {item.label}
                            </Button>
                          );
                        }

                        return (
                          <Link key={item.id} href={item.href}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.icon === "BsPerson" && (
                                <BsPerson className="w-4 h-4 mr-2" />
                              )}
                              {item.icon === "BsGear" && (
                                <BsGear className="w-4 h-4 mr-2" />
                              )}
                              {item.label}
                            </Button>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <Link href={ROUTES.LOGIN}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href={ROUTES.SIGNUP}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Profile Overlay */}
      <MobileProfileOverlay
        isOpen={showMobileProfile}
        onClose={() => setShowMobileProfile(false)}
        onLogout={handleLogout}
      />

      {/* Notification Modal */}
      <NotificationModal
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      />
    </motion.nav>
  );
};

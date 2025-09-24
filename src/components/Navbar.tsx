"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { H4 } from "./Typography";
import { useUserStore } from "@/store/useUserStore";
import { ROUTES } from "@/utils/constants";
import { cn } from "@/utils/helpers";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useUserStore();

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={ROUTES.HOME}>
            <Logo size={"small"} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {user?.userType === "ARTIST" && (
                  <Link href={ROUTES.DASHBOARD}>
                    <Button variant="ghost" size="sm">
                      Dashboard
                    </Button>
                  </Link>
                )}
                <div className="flex items-center space-x-2">
                  {user?.profileImage && (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <span className="text-sm text-neutral-700">{user?.name}</span>
                </div>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-neutral-200 space-y-2">
                {isAuthenticated ? (
                  <>
                    {user?.userType === "ARTIST" && (
                      <Link href={ROUTES.DASHBOARD}>
                        <Button variant="ghost" size="sm" className="w-full">
                          Dashboard
                        </Button>
                      </Link>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href={ROUTES.LOGIN}>
                      <Button variant="ghost" size="sm" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href={ROUTES.SIGNUP}>
                      <Button variant="primary" size="sm" className="w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

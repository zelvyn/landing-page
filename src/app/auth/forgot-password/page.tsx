"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { H2, Body, H3 } from "@/components/Typography";
import { validateEmail } from "@/utils/helpers";
import { ROUTES, ANIMATION_VARIANTS, API_ENDPOINTS } from "@/utils/constants";
import { Logo } from "@/components/Logo";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";
      const response = await fetch(
        `${BACKEND_URL}${API_ENDPOINTS.AUTH.FORGOT_PASSWORD}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        router.push(`${ROUTES.VERIFY_OTP}?email=${encodeURIComponent(email)}`);
      } else {
        setError(result.error || "Failed to send reset email");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={ANIMATION_VARIANTS.stagger}
        className="w-full max-w-md"
      >
        <motion.div
          variants={ANIMATION_VARIANTS.slideUp}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <Logo title />

            <H3 className="mb-2">Forgot Password?</H3>
            <Body className="text-neutral-600">
              No worries! Enter your email and we'll send you a reset link.
            </Body>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              error={error}
              leftIcon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              }
            />

            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
            >
              Send Reset OTP
            </Button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center space-y-2">
            <Link
              href={ROUTES.LOGIN}
              className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
            >
              ← Back to Login
            </Link>
            <div className="text-neutral-600 text-sm">
              Don't have an account?{" "}
              <Link
                href={ROUTES.SIGNUP}
                className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

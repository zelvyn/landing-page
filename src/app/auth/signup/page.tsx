"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { Body, Caption, H3 } from "@/components/Typography";
import { useUserStore } from "@/store/useUserStore";
import {
  handleGoogleAuth,
  handleEmailAuth,
  GOOGLE_CLIENT_ID,
} from "@/utils/googleAuth";
import { validateEmail, validatePassword } from "@/utils/helpers";
import { ROUTES, ANIMATION_VARIANTS } from "@/utils/constants";
import { Logo } from "@/components/Logo";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "USER" as "USER" | "ARTIST",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleUserTypeChange = (userType: "USER" | "ARTIST") => {
    setFormData((prev) => ({ ...prev, userType }));
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const result = await handleEmailAuth(
        formData.email,
        formData.password,
        "signup",
        {
          name: formData.name,
          userType: formData.userType,
        },
      );

      if (result.success && result.user) {
        setUser(result.user);
        window.location.href =
          result.user.userType === "ARTIST" ? ROUTES.DASHBOARD : "/";
      } else {
        setErrors({ general: result.error || "Signup failed" });
      }
    } catch (error) {
      setErrors({ general: "An unexpected error occurred" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async (credentialResponse: any) => {
    if (!credentialResponse.credential) return;

    setIsLoading(true);
    setErrors({});

    try {
      const result = await handleGoogleAuth(
        credentialResponse.credential,
        formData.userType,
      );

      if (result.success && result.user) {
        setUser(result.user);
        window.location.href =
          result.user.userType === "ARTIST" ? ROUTES.DASHBOARD : "/";
      } else {
        setErrors({ general: result.error || "Google signup failed" });
      }
    } catch (error) {
      setErrors({ general: "Google signup failed" });
    } finally {
      setIsLoading(false);
    }
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
            <H3 className="mb-2">Create Account</H3>
            <Body className="text-neutral-600">
              Join our community of artists and art lovers
            </Body>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <Caption className="block mb-3 text-neutral-700 font-medium">
              I am a:
            </Caption>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleUserTypeChange("USER")}
                className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                  formData.userType === "USER"
                    ? "border-primary-500 bg-primary-50 text-primary-700"
                    : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🎨</div>
                  <Caption className="font-medium">Art Lover</Caption>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleUserTypeChange("ARTIST")}
                className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                  formData.userType === "ARTIST"
                    ? "border-primary-500 bg-primary-50 text-primary-700"
                    : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🖌️</div>
                  <Caption className="font-medium">Artist</Caption>
                </div>
              </button>
            </div>
          </div>

          {/* Google Signup */}
          {GOOGLE_CLIENT_ID ? (
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
              <div className="mb-6">
                <GoogleLogin
                  onSuccess={handleGoogleSignup}
                  onError={() => setErrors({ general: "Google signup failed" })}
                  size="large"
                  text="signup_with"
                  shape="rectangular"
                  theme="outline"
                />
              </div>
            </GoogleOAuthProvider>
          ) : (
            <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
              <Caption className="text-yellow-600">
                Google Sign-Up temporarily unavailable
              </Caption>
            </div>
          )}

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-neutral-500">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <Input
              type="text"
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              }
            />

            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
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

            <PasswordInput
              name="password"
              label="Password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              }
            />

            <PasswordInput
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={errors.confirmPassword}
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              }
            />

            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 border border-red-200 rounded-xl"
              >
                <Caption className="text-red-600">{errors.general}</Caption>
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
            >
              Create Account
            </Button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <div className="text-neutral-600 text-sm">
              Already have an account?{" "}
              <Link
                href={ROUTES.LOGIN}
                className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium"
              >
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/PasswordInput";
import { H2, Body, Caption, H1 } from "@/components/Typography";
import { useUserStore } from "@/store/useUserStore";
import {
  handleGoogleAuth,
  handleEmailAuth,
  GOOGLE_CLIENT_ID,
} from "@/utils/googleAuth";
import { validateEmail, validatePassword } from "@/utils/helpers";
import { ROUTES, ANIMATION_VARIANTS } from "@/utils/constants";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  const validateForm = () => {
    const newErrors: typeof errors = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const result = await handleEmailAuth(
        formData.email,
        formData.password,
        "login"
      );

      if (result.success && result.user) {
        setUser(result.user);
        window.location.href =
          result.user.userType === "ARTIST" ? ROUTES.DASHBOARD : "/";
      } else {
        setErrors({ general: result.error || "Login failed" });
      }
    } catch (error) {
      setErrors({ general: "An unexpected error occurred" });
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleLogin = async (credentialResponse: any) => {
    if (!credentialResponse.credential) return;

    setIsLoading(true);
    setErrors({});

    try {
      const result = await handleGoogleAuth(
        credentialResponse.credential,
        "USER"
      );

      if (result.success && result.user) {
        setUser(result.user);
        window.location.href =
          result.user.userType === "ARTIST" ? ROUTES.DASHBOARD : "/";
      } else {
        setErrors({ general: result.error || "Google login failed" });
      }
    } catch (error) {
      setErrors({ general: "Google login failed" });
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
            <Link
              href={ROUTES.HOME}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <Logo size="medium" />
              {/* <span className="text-xl font-bold text-neutral-900">Zelvyn</span> */}
              <H1 className="text-5xl font-bold bg-gradient-to-b from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zelvyn
              </H1>
            </Link>
            <Body className="text-neutral-600">
              Sign in to your account to continue
            </Body>
          </div>
          {/* Google Login */}
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <div className="mb-6">
              <div className="[&>div]:w-full [&>div>div]:w-full [&>div>div>div]:w-full [&>div>div>div]:rounded-2xl [&>div>div>div]:border-2 [&>div>div>div]:border-neutral-200 [&>div>div>div]:hover:border-primary-300 [&>div>div>div]:transition-all [&>div>div>div]:duration-200 [&>div>div>div]:shadow-sm [&>div>div>div]:hover:shadow-md">
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={() => setErrors({ general: "Google login failed" })}
                  size="large"
                  width="100%"
                  text="signin_with"
                  shape="rectangular"
                  theme="outline"
                />
              </div>
            </div>
          </GoogleOAuthProvider>
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
          <form onSubmit={handleEmailLogin} className="space-y-4">
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
              placeholder="Enter your password"
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
              Sign In
            </Button>
          </form>
          {/* Footer Links */}
          <div className="mt-6 text-center space-y-2">
            <Link
              href={ROUTES.FORGOT_PASSWORD}
              className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
            >
              Forgot your password?
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

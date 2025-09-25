"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordInput";
import { H2, Body, Caption } from "@/components/Typography";
import { validatePassword } from "@/utils/helpers";
import { ROUTES, ANIMATION_VARIANTS, API_ENDPOINTS } from "@/utils/constants";
import { Logo } from "@/components/Logo";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    if (!token) {
      router.push(ROUTES.FORGOT_PASSWORD);
    }
  }, [token, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});
    
    try {
      const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080';
      const response = await fetch(`${BACKEND_URL}${API_ENDPOINTS.AUTH.RESET_PASSWORD}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email,
          newPassword: formData.password,
          confirmPassword: formData.confirmPassword
        }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrors({ general: result.error || "Failed to reset password" });
      }
    } catch (error) {
      setErrors({ general: "An unexpected error occurred" });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
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
            className="bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <H2 className="mb-4 text-green-600">Password Reset Successfully</H2>
            <Body className="text-neutral-600 mb-6">
              Your password has been updated successfully. You can now sign in with your new password.
            </Body>

            <Button
              onClick={() => router.push(ROUTES.LOGIN)}
              className="w-full"
              size="lg"
            >
              Go to Login
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

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
          <div className="text-center mb-8">
            <Logo title />
            <H2 className="mb-2">Reset Password</H2>
            <Body className="text-neutral-600">
              Enter your new password below
            </Body>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <PasswordInput
              name="password"
              label="New Password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              leftIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />

            <PasswordInput
              name="confirmPassword"
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={errors.confirmPassword}
              leftIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
              Reset Password
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
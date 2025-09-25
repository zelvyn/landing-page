"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { H2, Body, Caption, H3 } from "@/components/Typography";
import { ROUTES, ANIMATION_VARIANTS, API_ENDPOINTS } from "@/utils/constants";
import { Logo } from "@/components/Logo";

function VerifyOTPContent() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      router.push(ROUTES.FORGOT_PASSWORD);
    }
  }, [email, router]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }

    if (error) setError("");
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setError("Please enter the complete OTP");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";
      const requestData = { email, otp: otpCode };
      console.log('Sending to backend:', {
        url: `${BACKEND_URL}${API_ENDPOINTS.AUTH.VERIFY_OTP}`,
        data: requestData
      });
      
      const response = await fetch(
        `${BACKEND_URL}${API_ENDPOINTS.AUTH.VERIFY_OTP}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();
      console.log('Backend response:', { status: response.status, result });

      if (response.ok) {
        // Generate a temporary token or use email as identifier
        const tempToken = btoa(`${email}:${Date.now()}`);
        router.push(`${ROUTES.RESET_PASSWORD}?token=${tempToken}&email=${encodeURIComponent(email || '')}`);
      } else {
        console.error('OTP verification failed:', result);
        setError(result.error || result.message || "Invalid OTP");
      }
    } catch (error) {
      setError("An unexpected error occurred");
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
          <div className="text-center mb-8">
            <Logo title />
            <H3 className="mb-2">Enter OTP</H3>
            <Body className="text-neutral-600">
              We've sent a 6-digit code to <strong>{email}</strong>
            </Body>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-semibold border-2 border-neutral-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                />
              ))}
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 border border-red-200 rounded-xl text-center"
              >
                <Caption className="text-red-600">{error}</Caption>
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
            >
              Verify OTP
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() =>
                router.push(`${ROUTES.FORGOT_PASSWORD}?email=${email}`)
              }
              className="text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
            >
              ← Back to forgot password
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function VerifyOTPPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <VerifyOTPContent />
    </Suspense>
  );
}

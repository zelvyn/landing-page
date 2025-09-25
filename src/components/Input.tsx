"use client";

import { cn } from "@/utils/helpers";
import { motion } from "framer-motion";
import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  useState,
} from "react";

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "onDrag"
    | "onDragEnd"
    | "onDragStart"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, leftIcon, rightIcon, className, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <motion.label
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isFocused ? 1 : 0.7 }}
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            {label}
          </motion.label>
        )}

        <div className="relative">
          {leftIcon && (
            <div
              className={cn(
                "absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200",
                isFocused ? "text-primary-500" : "text-neutral-400"
              )}
            >
              {leftIcon}
            </div>
          )}

          <motion.input
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            whileFocus={{ scale: 1.01 }}
            className={cn(
              "w-full px-4 py-3 rounded-2xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-2 text-sm",
              error ? "text-red-500" : "text-neutral-500"
            )}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    | "onDrag"
    | "onDragEnd"
    | "onDragStart"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, rows = 4, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <motion.label
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isFocused ? 1 : 0.7 }}
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            {label}
          </motion.label>
        )}

        <motion.textarea
          ref={ref}
          rows={rows}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          whileFocus={{ scale: 1.01 }}
          className={cn(
            "w-full px-4 py-3 rounded-2xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />

        {(error || helperText) && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-2 text-sm",
              error ? "text-red-500" : "text-neutral-500"
            )}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

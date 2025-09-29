import React, { ReactNode, createElement } from "react";
import { cn } from "@/utils/helpers";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const H1 = ({ children, className, as = "h1" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold font-display text-neutral-900",
        className,
      ),
    },
    children,
  );

export const H2 = ({ children, className, as = "h2" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn(
        "text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-neutral-900",
        className,
      ),
    },
    children,
  );

export const H3 = ({ children, className, as = "h3" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn(
        "text-2xl md:text-3xl font-semibold font-display text-neutral-900",
        className,
      ),
    },
    children,
  );

export const H4 = ({ children, className, as = "h4" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn(
        "text-xl md:text-2xl font-medium font-display text-neutral-900",
        className,
      ),
    },
    children,
  );

export const H5 = ({ children, className, as = "h5" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn(
        "text-lg md:text-xl font-medium font-display text-neutral-900",
        className,
      ),
    },
    children,
  );

export const H6 = ({ children, className, as = "h6" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn(
        "text-base md:text-lg font-medium font-display text-neutral-900",
        className,
      ),
    },
    children,
  );

export const Body = ({ children, className, as = "p" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn("text-base leading-relaxed text-neutral-700", className),
    },
    children,
  );

export const BodyLarge = ({ children, className, as = "p" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn("text-lg leading-relaxed text-neutral-700", className),
    },
    children,
  );

export const BodySmall = ({ children, className, as = "p" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn("text-sm leading-relaxed text-neutral-600", className),
    },
    children,
  );

export const Caption = ({
  children,
  className,
  as = "span",
}: TypographyProps) =>
  createElement(
    as,
    {
      className: cn("text-xs text-neutral-500 font-medium", className),
    },
    children,
  );

export const Lead = ({ children, className, as = "p" }: TypographyProps) =>
  createElement(
    as,
    {
      className: cn(
        "text-xl leading-relaxed text-neutral-600 font-light",
        className,
      ),
    },
    children,
  );

export const Gradient = ({
  children,
  className,
  as = "span",
}: TypographyProps) =>
  createElement(
    as,
    {
      className: cn("text-gradient font-bold", className),
    },
    children,
  );

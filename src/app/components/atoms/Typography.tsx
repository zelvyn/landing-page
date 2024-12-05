import React from "react";

interface TypographyProps {
  variant: "heading" | "subheading" | "body";
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const baseStyle = "text-gray-800";

  const variants = {
    heading: "text-4xl font-bold text-primary",
    subheading: "text-2xl font-semibold text-primary",
    body: "text-base font-normal",
  };

  return (
    <p className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};

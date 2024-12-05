import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant,
  onClick,
  children,
  className,
}) => {
  const baseStyle = "px-4 py-2 rounded text-center transition duration-300";

  const variants = {
    primary: "bg-primary text-white hover:bg-gray-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    tertiary:
      "bg-transparent text-primary hover:text-gray-700 border border-primary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

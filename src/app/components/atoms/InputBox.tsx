import React from "react";

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  value,
  onChange,
  className,
  ...rest
}) => {
  const baseStyle =
    "w-full px-4 py-2 border rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyle} ${className}`}
      {...rest}
    />
  );
};

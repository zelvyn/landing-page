import Image from "next/image";
import LOGO from "@/assets/images/zelvyn.png";
import { H2 } from "./Typography";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
interface LogoProps {
  size?: number | "small" | "medium" | "large";
  title?: boolean;
  className?: string;
}

const getSizeClasses = (
  size: number | "small" | "medium" | "large" | undefined,
): string => {
  if (typeof size === "number") return `w-[${size}px] h-[${size}px]`;
  switch (size) {
    case "small":
      return "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12";
    case "medium":
      return "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18";
    case "large":
      return "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24";
    default:
      return "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18";
  }
};

const getTitleClasses = (
  size: number | "small" | "medium" | "large" | undefined,
): string => {
  if (typeof size === "number") return "text-2xl";
  switch (size) {
    case "small":
      return "text-lg sm:text-xl md:text-2xl";
    case "medium":
      return "text-xl sm:text-2xl md:text-3xl lg:text-4xl";
    case "large":
      return "text-2xl sm:text-3xl md:text-4xl lg:text-5xl";
    default:
      return "text-xl sm:text-2xl md:text-3xl lg:text-4xl";
  }
};

export const Logo = ({ size = "medium", className, title }: LogoProps) => {
  const sizeClasses = getSizeClasses(size);
  const titleClasses = getTitleClasses(size);
  
  return (
    <Link href={ROUTES.HOME} className="inline-flex items-center space-x-1 sm:space-x-2">
      <Image
        src={LOGO}
        alt="Zelvyn Logo"
        width={80}
        height={80}
        className={`${sizeClasses} ${className || ""}`}
      />
      {title && (
        <H2 className={`${titleClasses} font-bold bg-gradient-to-b from-cyan-400 to-purple-600 bg-clip-text text-transparent`}>
          Zelvyn
        </H2>
      )}
    </Link>
  );
};

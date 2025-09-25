import Image from "next/image";
import LOGO from "@/assets/images/zelvyn.png";
import { H1, H2 } from "./Typography";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
interface LogoProps {
  size?: number | "small" | "medium" | "large";
  title?: boolean;
  className?: string;
}

const getSizeValue = (
  size: number | "small" | "medium" | "large" | undefined
): number => {
  if (typeof size === "number") return size;
  switch (size) {
    case "small":
      return 48;
    case "medium":
      return 72;
    case "large":
      return 80;
    default:
      return 72;
  }
};

export const Logo = ({ size = "medium", className, title }: LogoProps) => {
  const sizeValue = getSizeValue(size);
  return (
    <Link href={ROUTES.HOME} className="inline-flex items-center space-x-2">
      <Image
        src={LOGO}
        alt="Zelvyn Logo"
        width={sizeValue}
        height={sizeValue}
        className={className}
      />
      {title && (
        <H2 className="text-5xl font-bold bg-gradient-to-b from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Zelvyn
        </H2>
      )}
    </Link>
  );
};

import React from "react";
import Image from "next/image";
import { Typography } from "../atoms/Typography";
import LOGO from "../../../assets/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        className="w-8 h-auto sm:w-16 md:w-20 lg:w-14"
        width={0}
        height={0}
        alt="Zelvyn Logo"
        src={LOGO}
      />
      <div className="flex flex-col items-center">
        <Typography
          variant="heading"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white"
        >
          Zelvyn
        </Typography>
        <Typography
          variant="body"
          className="text-xs   text-white"
        >
          Artists United
        </Typography>
      </div>
    </div>
  );
};

export default Logo;
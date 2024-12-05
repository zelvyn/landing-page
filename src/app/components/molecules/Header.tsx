import React from "react";
import { Typography } from "../atoms/Typography";
import Image from "next/image";
import COMPANY_LOGO from "../../../assets/compnaylogo.png";
import LOGO from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo and Navigation */}
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-start items-center gap-x-2">
            <Image width={50} height={50} alt="logo" src={LOGO} />
            <Typography variant="heading" className="text-2xl text-secondary">
              Zelvyn
            </Typography>
          </div>

          <button className="lg:hidden text-indigo-600 hover:text-indigo-800 px-4">
            <span className="material-icons">menu</span>
          </button>

          <nav className="hidden lg:flex space-x-6">
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 px-4"
            >
              Contact
            </a>
            <a
              href="#join"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Join Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

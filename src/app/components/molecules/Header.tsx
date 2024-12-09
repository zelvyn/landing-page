"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Typography } from "../atoms/Typography";
import Image from "next/image";
import LOGO from "../../../assets/logo.png";
import config from "../../../../tailwind.config";

// Menu items defined in a JSON-like format
const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
  { name: "Join Us", href: "#join", isPrimary: true },
];

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center gap-x-2">
          <Image
            className="w-8 h-auto sm:w-16 md:w-20 lg:w-14"
            width={0}
            height={0}
            alt="Zelvyn Logo"
            src={LOGO}
          />
          <Typography
            variant="heading"
            className="lg:text-3xl text-[1.5rem] text-secondary"
          >
            Zelvyn
          </Typography>
        </div>

        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={"24"} color="#383961" />
          ) : (
            <IoMenu size={"30"} color="#383961" />
          )}
        </button>

        <nav className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${
                item.isPrimary
                  ? "bg-indigo-600 text-white px-4 py-2 rounded transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105"
                  : "text-gray-800 hover:text-indigo-600 transition-colors duration-200"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4 z-40">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`${
                  item.isPrimary
                    ? "bg-indigo-600 text-white px-4 py-2 rounded  "
                    : "text-gray-800 "
                } text-sm `}
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

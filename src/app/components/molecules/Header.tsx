
"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Logo from "../atoms/Logo";

const menuItems = [
  { name: "Home", href: "#home" },
  // { name: "About", href: "#about" },
  { name: "Services", href: "#features" },
  { name: "Contact", href: "#contact" },
  { name: "Join Us", href: "#contact", isPrimary: true },
];

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onNavClick: (sectionId: string) => void; // added onNavClick prop
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, onNavClick }) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600  shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Logo />

        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={"24"} color="#ffffff" />
          ) : (
            <IoMenu size={"30"} color="#ffffff" />
          )}
        </button>

        <nav className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${
                item.isPrimary
                  ? "bg-white text-indigo-600 px-4 py-2 rounded transition-all duration-200 hover:bg-gray-400 hover:shadow-lg transform hover:scale-105"
                  : "text-white hover:text-gray-300 transition-colors duration-200"
              }`}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.href.replace('#', '')); // Call onNavClick when a menu item is clicked
              }}
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
                    ? "bg-indigo-600 text-white px-4 py-2 rounded"
                    : "text-gray-800"
                } text-sm`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.href.replace('#', '')); // Handle navigation for mobile menu as well
                  toggleMenu();
                }}
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

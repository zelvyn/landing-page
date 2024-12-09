import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // React Icons

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Section with Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p>Email: zelvyn.ai@gmail.com</p>
            <p>Phone: +91 7991926528</p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-2">Useful Links</h4>
            <ul>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <p>Stay connected on social media:</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                className="text-white hover:text-blue-600"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-white hover:text-pink-600"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-xs">
          <p>&copy; 2024 Zelvyn. All rights reserved.</p>
          <p>
            Made with ❤️ by{" "}
            <a href="#team" className="hover:underline">
              The Zelvyn Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Typography } from "../atoms/Typography";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animation";

const Footer = () => {
  return (
    <motion.footer
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-gradient-to-r bg-[#383961] py-8"
    >
      <motion.div
        variants={staggerContainer}
        className="max-w-5xl mx-auto px-4"
      >
        {/* Top Section with Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-3">
            <Typography
              variant="subheading"
              className="text-white font-semibold mb-4"
            >
              Contact Us
            </Typography>
            <Typography variant="body" className="text-white/90">
              Email: zelvyn.ai@gmail.com
            </Typography>
          </div>

          {/* Useful Links */}
          <div className="space-y-3">
            <Typography
              variant="subheading"
              className="text-white font-semibold mb-4"
            >
              Useful Links
            </Typography>
            <div>
              <button
                onClick={() => {
                  document.getElementById("features")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="text-white/90 hover:text-white transition-colors duration-200"
              >
                <Typography variant="body" className="text-white ">
                  Services
                </Typography>
              </button>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-3">
            <Typography
              variant="subheading"
              className="text-white font-semibold mb-4"
            >
              Follow Us
            </Typography>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="text-white/90 hover:text-white transition-colors duration-200
                          transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <Typography variant="body" className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} Zelvyn. All rights reserved | Made
            with ❤️ by{" "}
            <button
              onClick={() => {
                document.getElementById("team")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="hover:text-white transition-colors duration-200"
            >
              The Zelvyn Team
            </button>
          </Typography>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

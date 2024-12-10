// import React from "react";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // React Icons

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-white py-6">
//       <div className="max-w-5xl mx-auto px-4">
//         {/* Top Section with Details */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//           {/* Contact Information */}
//           <div>
//             <h4 className="text-lg font-bold mb-2">Contact Us</h4>
//             <p>Email: zelvyn.ai@gmail.com</p>
//             <p>Phone: +91 7991926528</p>
//           </div>

//           {/* Useful Links */}
//           <div>
//             <h4 className="text-lg font-bold mb-2">Useful Links</h4>
//             <ul>
//               <li>
//                 <a href="#features" className="hover:underline">
//                   Services
//                 </a>
//               </li>
//               {/* <li>
//                 <a href="#terms" className="hover:underline">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#privacy" className="hover:underline">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#faq" className="hover:underline">
//                   FAQ
//                 </a>
//               </li> */}
//             </ul>
//           </div>

//           {/* Follow Us Section */}
//           <div>
//             <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            
//             <div className="flex space-x-4 mt-2">
//               {/* <a
//                 href="https://facebook.com"
//                 className="text-white hover:text-blue-600"
//                 aria-label="Facebook"
//               >
//                 <FaFacebook className="w-6 h-6" />
//               </a> */}
//               <a
//                 href="https://instagram.com"
//                 className="text-white hover:text-pink-600"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram className="w-6 h-6" />
//               </a>
//               {/* <a
//                 href="https://linkedin.com"
//                 className="text-white hover:text-blue-700"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedin className="w-6 h-6" />
//               </a> */}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-600 mt-6 pt-4 text-center text-xs">
//           <p></p>
//           <p>
//           &copy; 2024 Zelvyn. All rights reserved | Made with ❤️ by{" "}
//             <a href="#team" className="hover:underline">
//               The Zelvyn Team
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Typography } from "../atoms/Typography";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-[#383961] py-8">
      <div className="max-w-5xl mx-auto px-4">
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
            <Typography 
              variant="body"
              className="text-white/90"
            >
              Email: zelvyn.ai@gmail.com
            </Typography>
            <Typography 
              variant="body"
              className="text-white/90"
            >
              Phone: +91 7991926528
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
                  document.getElementById('features')?.scrollIntoView({ 
                    behavior: 'smooth' 
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
          <Typography 
            variant="body"
            className="text-white/80 text-sm"
          >
            &copy; 2024 Zelvyn. All rights reserved | Made with ❤️ by{" "}
            <button
              onClick={() => {
                document.getElementById('team')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="hover:text-white transition-colors duration-200"
            >
              The Zelvyn Team
            </button>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
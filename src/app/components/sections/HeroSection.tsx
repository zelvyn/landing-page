import { Typography } from "../atoms/Typography";
import Image from "next/image";  // Import Image from next/image
import BGCover from "../../../assets/artist1.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={BGCover}  // Use Image component here
          alt="Creative professionals collaborating"
          layout="fill"  // Ensures it covers the container size
          objectFit="cover"  // Keeps aspect ratio and fills container
          objectPosition="top"  // Adjusts image positioning
          className="opacity-40 transform scale-105 animate-slow-zoom"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Main Heading Section */}
          <div className="space-y-6">
            <Typography 
              variant="heading" 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                         text-transparent bg-clip-text bg-gradient-to-r 
                         from-white via-indigo-200 to-indigo-400
                         tracking-tight leading-tight animate-fade-in-up"
            >
              Welcome to Zelvyn
            </Typography>
            
            <Typography 
              variant="subheading"
              className="text-xl sm:text-2xl md:text-3xl text-indigo-200
                         font-light tracking-wide animate-fade-in-up-delay
                         max-w-2xl mx-auto"
            >
              The Bridge Between Creatives and Clients
            </Typography>
          </div>

          {/* Description - More Concise */}
          <Typography 
            variant="body" 
            className="text-base sm:text-lg text-stone-400 
                       max-w-xl mx-auto leading-relaxed 
                       animate-fade-in-up-delay-2 font-light
                       tracking-wide"
          >
            At Zelvyn, we connect creative professionals with clients who need their talents. 
            Whether you&apos;re an artist looking to showcase your skills or a client searching 
            for the perfect fit, our platform makes it simple to find what you need.
          </Typography>

          {/* CTA Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center 
                          mt-8 animate-fade-in-up-delay-3">
            <a
              href="#features"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 
             rounded-lg text-white font-medium 
             transform transition-all duration-300
             hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25
             focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              Explore Features
            </a>
            <a
              href="#join"
              className="px-8 py-3 bg-transparent border-2 border-indigo-500/50 
                         rounded-lg text-indigo-300 font-medium
                         transform transition-all duration-300
                         hover:border-indigo-400 hover:text-white
                         hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

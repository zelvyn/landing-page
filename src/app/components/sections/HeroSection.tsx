import { Typography } from "../atoms/Typography";
import Image from "next/image";
import BGCover from "../../../assets/Artists.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="hero-section relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Image Container */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <Image
          src={BGCover}
          alt="Creative professionals collaborating"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-60"
          priority
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Main Heading Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <Typography
              variant="heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                         text-transparent bg-clip-text bg-gradient-to-r 
                         from-white via-indigo-200 to-indigo-400
                         tracking-tight leading-tight"
            >
              Welcome to Zelvyn
            </Typography>

            <Typography
              variant="subheading"
              className="text-xl sm:text-2xl md:text-3xl text-indigo-300
                         font-light tracking-wide max-w-2xl mx-auto bg-white/50 px-4 py-2 rounded-md"
            >
              The Bridge Between Creatives and Clients
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUp}>
            <Typography
              variant="body"
              className="text-base sm:text-lg text-stone-400 
                         max-w-xl mx-auto leading-relaxed 
                         font-light tracking-wide text-white"
            >
              At Zelvyn, we connect creative professionals with clients who need
              their talents. Whether you&apos;re an artist looking to showcase
              your skills or a client searching for the perfect fit, our
              platform makes it simple to find what you need.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#features"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 
                        rounded-lg text-white font-medium"
            >
              Explore Features
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-indigo-500/50 
                        rounded-lg text-indigo-300 font-medium"
            >
              Join Now
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

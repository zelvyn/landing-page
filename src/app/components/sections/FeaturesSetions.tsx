import { Typography } from "../atoms/Typography";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function FeaturesSection() {
  const features = [
    {
      title: "For Artists",
      description:
        "Showcase your portfolio, attract clients, and receive direct artwork requests—whether it's a custom sketch, painting, or any creative piece.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "For Clients",
      description:
        "Quickly find the right artist for your vision. Browse portfolios, reach out directly, and get your artwork created just the way you imagined.",
      icon: "👥",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Simple Connections",
      description:
        "Connect, communicate, and collaborate effortlessly—Zelvyn makes it easy for creative professionals and clients to meet and get work done.",
      icon: "🤝",
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-16 space-y-6"
        >
          <Typography
            variant="heading"
            className={`${playfair.className} text-4xl md:text-5xl font-bold 
                       text-transparent bg-clip-text bg-gradient-to-r 
                       from-white via-indigo-200 to-indigo-400
                       leading-tight`}
          >
            What We Offer
          </Typography>

          <Typography
            variant="body"
            className="text-lg md:text-xl text-gray-300 leading-relaxed
                       max-w-2xl mx-auto"
          >
            Zelvyn is a dedicated platform where artists and clients connect to
            bring creative ideas to life. We don&apos;t handle transactions or
            commissions—we simply provide the space for meaningful
            collaborations to happen.
          </Typography>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group perspective-1000"
            >
              <div className="relative transform transition-all duration-300 group-hover:rotate-y-12">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} 
                                rounded-2xl opacity-75 blur group-hover:opacity-100 
                                transition duration-300`}
                />
                <div className="relative h-full bg-gray-900 p-8 rounded-xl border border-gray-800">
                  <div
                    className="text-5xl mb-6 transform transition-transform duration-300 
                                group-hover:scale-110 group-hover:rotate-12"
                  >
                    {feature.icon}
                  </div>
                  <Typography
                    variant="subheading"
                    className={`${playfair.className} text-2xl font-semibold mb-4 
                               text-white group-hover:text-indigo-300
                               transition-colors duration-300`}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body"
                    className="text-gray-300 leading-relaxed group-hover:text-white
                             transition-colors duration-300"
                  >
                    {feature.description}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Typography variant="body" className="text-gray-300 text-lg mb-8">
            Join our growing community of artists and art lovers today.
          </Typography>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#join"
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center px-8 py-4
                      bg-gradient-to-r from-indigo-500 to-purple-500 
                      text-white font-medium rounded-xl
                      transition-shadow duration-300
                      hover:shadow-lg hover:shadow-indigo-500/25
                      text-lg border border-indigo-400/20"
          >
            Start Creating
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

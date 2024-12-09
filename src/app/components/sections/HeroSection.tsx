import { Typography } from "../atoms/Typography";

const HeroSection = () => {
  return (
    <div className="hero-section text-center py-10">
      <Typography variant="heading" className="text-4xl font-bold mb-4">
        Welcome to Zelvyn
      </Typography>
      <Typography variant="body" className="text-lg mb-6">
        Whether you're an artist or looking for creative talent, Zelvyn is here
        to bridge the gap.
      </Typography>
      <a
        href="#features"
        className="bg-indigo-600 text-white px-6 py-3 rounded-md inline-block transition-transform transform hover:scale-105 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      >
        Learn More
      </a>
    </div>
  );
};

export default HeroSection;

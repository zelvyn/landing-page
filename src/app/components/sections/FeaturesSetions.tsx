import { Typography } from "../atoms/Typography";
import FeatureCard from "../molecules/FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      title: "For Artists",
      description: "Showcase your portfolio, get discovered, and grow your career.",
    },
    {
      title: "For Clients",
      description: "Find the perfect artist for your project with ease.",
    },
    {
      title: "Simple Connections",
      description: "Seamlessly connect, communicate, and collaborate.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-blue-200  to-indigo-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Typography 
            variant="heading"
            className="text-3xl sm:text-4xl font-bold 
                       bg-gradient-to-r from-indigo-600 to-[#383961]
                       text-transparent bg-clip-text"
          >
            What We Offer
          </Typography>
          
          <Typography 
            variant="body"
            className="text-base sm:text-lg text-gray-600/90 leading-relaxed
                       max-w-2xl mx-auto"
          >
            Zelvyn connects talented artists with clients who value creativity and originality. 
            From showcasing portfolios to fostering seamless collaborations, our platform makes 
            turning ideas into reality simple and inspiring.
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-[#383961] 
                                rounded-lg blur opacity-0 group-hover:opacity-20 
                                transition-all duration-300">
                </div>
                
                {/* Feature Card */}
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Bottom CTA */}
        <div className="text-center mt-16">
          <Typography
            variant="body"
            className="text-gray-600 italic mb-6"
          >
            Join our growing community of creative professionals
          </Typography>
          <a
            href="#join"
            className="inline-flex items-center justify-center px-6 py-3
                      bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white font-medium rounded-lg
                       transform transition-all duration-300
                       hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
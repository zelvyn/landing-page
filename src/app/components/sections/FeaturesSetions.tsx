import FeatureCard from "../molecules/FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      title: "For Artists",
      description:
        "Showcase your portfolio, get discovered, and grow your career.",
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
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
        <p className="text-gray-600 mb-6">
          Zelvyn provides a platform to connect talented artists with clients
          who appreciate creativity and originality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group transition-transform transform hover:scale-105 "
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

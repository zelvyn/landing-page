import { Typography } from "../atoms/Typography";

const testimonials = [
  {
    name: "Priya S.",
    role: "Client",
    image: "/avatars/client1.jpg",
    quote:
      "Found the perfect artist for my family portrait. The process was smooth and the result exceeded expectations!",
  },
  {
    name: "Rahul M.",
    role: "Artist",
    image: "/avatars/artist1.jpg",
    quote:
      "Zelvyn has helped me connect with clients who truly value art. Great platform for professional artists!",
  },
  {
    name: "Anjali K.",
    role: "Client",
    image: "/avatars/client2.jpg",
    quote:
      "Working with artists through Zelvyn has been amazing. The talent on this platform is top-notch!",
  },
];

const stats = [
  { label: "Artists", value: "50+", icon: "🎨" },
  { label: "Orders Completed", value: "100+", icon: "💬" },
  { label: "Avg. Rating", value: "4.9", icon: "⭐" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-4xl mb-2 block">{stat.icon}</span>
              <Typography
                variant="heading"
                className="text-3xl font-bold text-indigo-600"
              >
                {stat.value}
              </Typography>
              <Typography variant="body" className="text-gray-600">
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 mr-4" />
                <div>
                  <Typography variant="subheading" className="font-semibold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body" className="text-gray-600">
                    {testimonial.role}
                  </Typography>
                </div>
              </div>
              <Typography variant="body" className="text-gray-700 italic">
                {testimonial.quote}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

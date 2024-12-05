import { Button } from "./components/atoms/Button";
import { InputBox } from "./components/atoms/InputBox";
import { Typography } from "./components/atoms/Typography";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <section className="text-center px-6 mb-12 sm:mb-16">
          <Typography
            variant="heading"
            className="text-3xl sm:text-4xl text-gray-800 mb-4"
          >
            Connecting Artists with Opportunities
          </Typography>
          <Typography variant="body" className="text-gray-600 mb-8">
            Whether you&apos;re an artist looking to showcase your work or
            someone looking for creative talent, Zelvyn is here to bridge the
            gap.
          </Typography>
          <a
            href="#join"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 inline-block"
          >
            Get Started
          </a>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <Typography
              variant="subheading"
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              What We Offer
            </Typography>
            <Typography variant="body" className="text-gray-600 mb-6">
              Zelvyn provides a platform to connect talented artists with
              clients who appreciate creativity and originality.
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow rounded">
                <Typography
                  variant="subheading"
                  className="text-lg font-semibold text-indigo-600"
                >
                  For Artists
                </Typography>
                <Typography variant="body" className="mt-2 text-gray-600">
                  Showcase your portfolio, get discovered, and grow your career.
                </Typography>
              </div>
              <div className="p-6 bg-white shadow rounded">
                <Typography
                  variant="subheading"
                  className="text-lg font-semibold text-indigo-600"
                >
                  For Clients
                </Typography>
                <Typography variant="body" className="mt-2 text-gray-600">
                  Find the perfect artist for your project with ease.
                </Typography>
              </div>
              <div className="p-6 bg-white shadow rounded">
                <Typography
                  variant="subheading"
                  className="text-lg font-semibold text-indigo-600"
                >
                  Simple Connections
                </Typography>
                <Typography variant="body" className="mt-2 text-gray-600">
                  Seamlessly connect, communicate, and collaborate.
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <Typography
              variant="subheading"
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              Get in Touch
            </Typography>
            <Typography variant="body" className="text-gray-600 mb-6">
              Want to know more? Contact us and we&apos;ll get back to you.
            </Typography>
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-xl mx-auto">
              <InputBox
                placeholder="Your Name"
                className="p-3 border rounded w-full"
              />
              <InputBox
                placeholder="Your Email"
                className="p-3 border rounded w-full"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border rounded sm:col-span-2 w-full"
                rows={4}
              ></textarea>
              <Button variant="primary" className="sm:col-span-2 py-3 w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

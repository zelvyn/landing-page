import { Button } from "../atoms/Button";
import { InputBox } from "../atoms/InputBox";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-red">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Want to know more? Contact us and we&apos;ll get back to you.
        </p>
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
          <Button
            variant="primary"
            className="sm:col-span-2 py-3 w-full transition-transform transform hover:scale-105"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

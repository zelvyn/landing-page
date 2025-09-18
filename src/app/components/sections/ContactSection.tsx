import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { InputBox } from "../atoms/InputBox";

const formAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const inputAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = "/api/contact"; // Ensure this matches the API route

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          message: "",
        });
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={formAnimation}
        className="max-w-5xl mx-auto px-6"
      >
        <motion.div variants={inputAnimation} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Want to know more? Contact us and we&apos;ll get back to you.
          </p>
        </motion.div>

        <motion.form
          variants={formAnimation}
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 max-w-xl mx-auto"
        >
          <motion.div variants={inputAnimation} className="w-full">
            <InputBox
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={inputAnimation} className="w-full">
            <InputBox
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={inputAnimation} className="w-full">
            <InputBox
              name="contactNumber"
              type="tel"
              placeholder="Your Contact Number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={inputAnimation} className="w-full">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 min-h-[150px] resize-y"
            />
          </motion.div>

          <motion.div
            variants={inputAnimation}
            className="w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              variant="primary"
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}

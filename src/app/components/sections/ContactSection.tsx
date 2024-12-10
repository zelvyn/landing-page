import { useState } from "react";
import { Button } from "../atoms/Button";
import { InputBox } from "../atoms/InputBox";

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
    const endpoint = "https://example.com/contact"; // Replace with your endpoint

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
    <section id="contact" className="py-16 bg-gradient-to-b from-indigo-200 to-blue-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Want to know more? Contact us and we&apos;ll get back to you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 max-w-xl mx-auto"
        >
          <InputBox
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-3 border rounded w-full"
          />
          <InputBox
            name="email"
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-3 border rounded w-full"
          />
          <InputBox
            name="contactNumber"
            placeholder="Your Contact Number"
            type="tel"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="p-3 border rounded w-full"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="p-3 border rounded w-full text-gray-900"
          />

          <Button
            type="submit"
            variant="primary"
            className="py-3 w-full transition-transform transform hover:scale-105"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { H1, H2, Body, BodySmall } from "@/components/Typography";

const PRIVACY_SECTIONS = [
  {
    id: 1,
    title: "Information We Collect",
    content: [
      {
        type: "info",
        label: "Personal Information",
        text: "Name, email address, profile information",
      },
      {
        type: "info",
        label: "Usage Data",
        text: "How you interact with our platform",
      },
      {
        type: "info",
        label: "Device Information",
        text: "Browser type, IP address, device identifiers",
      },
      {
        type: "info",
        label: "Content",
        text: "Artwork, comments, and other user-generated content",
      },
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    content: [
      {
        type: "list",
        items: [
          "Provide and maintain our service",
          "Process transactions and send notifications",
          "Improve user experience and platform features",
          "Communicate with you about updates and promotions",
          "Ensure platform security and prevent fraud",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Information Sharing",
    content: [
      {
        type: "text",
        text: "We do not sell, trade, or rent your personal information to third parties. We may share information in these situations:",
      },
      {
        type: "list",
        items: [
          "With your explicit consent",
          "To comply with legal obligations",
          "To protect our rights and safety",
          "With service providers who assist our operations",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Data Security",
    content: [
      {
        type: "text",
        text: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      },
    ],
  },
  {
    id: 5,
    title: "Your Rights",
    content: [
      {
        type: "list",
        items: [
          "Access your personal data",
          "Correct inaccurate information",
          "Delete your account and data",
          "Export your data",
          "Opt-out of marketing communications",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Cookies and Tracking",
    content: [
      {
        type: "text",
        text: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.",
      },
    ],
  },
  {
    id: 7,
    title: "Third-Party Services",
    content: [
      {
        type: "text",
        text: "Our platform may contain links to third-party websites. We are not responsible for their privacy practices.",
      },
    ],
  },
  {
    id: 8,
    title: "Children's Privacy",
    content: [
      {
        type: "text",
        text: "Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.",
      },
    ],
  },
  {
    id: 9,
    title: "Changes to Privacy Policy",
    content: [
      {
        type: "text",
        text: "We may update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page.",
      },
    ],
  },
  {
    id: 10,
    title: "Contact Us",
    content: [
      {
        type: "text",
        text: "If you have questions about this Privacy Policy, please contact us at privacy@zelvyn.com",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <H1 className="mb-6">Privacy Policy</H1>
            <BodySmall className="text-neutral-500 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </BodySmall>

            <div className="space-y-6 text-neutral-700">
              {PRIVACY_SECTIONS.map((section) => (
                <section key={section.id}>
                  <H2 className="mb-3">
                    {section.id}. {section.title}
                  </H2>
                  {section.content.map((item, index) => {
                    if (item.type === "info" && "label" in item) {
                      return (
                        <Body key={index}>
                          <strong>{item.label}:</strong> {item.text}
                        </Body>
                      );
                    }
                    if (item.type === "list" && "items" in item && item.items) {
                      return (
                        <ul
                          key={index}
                          className="list-disc list-inside space-y-2 mt-2"
                        >
                          {item.items.map((listItem, listIndex) => (
                            <li key={listIndex}>
                              <Body as="span">{listItem}</Body>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (item.type === "text" && "text" in item) {
                      return <Body key={index}>{item.text}</Body>;
                    }
                    return null;
                  })}
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { H1, H2, Body, BodySmall } from "@/components/Typography";

const TERMS_SECTIONS = [
  {
    id: 1,
    title: "Acceptance of Terms",
    content: "By accessing and using Zelvyn, you accept and agree to be bound by the terms and provision of this agreement."
  },
  {
    id: 2,
    title: "User Accounts",
    content: "When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities under your account."
  },
  {
    id: 3,
    title: "Content Guidelines",
    content: [
      "You retain ownership of content you upload",
      "Content must not violate any laws or third-party rights",
      "We reserve the right to remove inappropriate content",
      "You grant us license to display and distribute your content"
    ]
  },
  {
    id: 4,
    title: "Artist Responsibilities",
    content: "Artists using our platform agree to provide original artwork and maintain professional conduct. Any copyright infringement will result in account suspension."
  },
  {
    id: 5,
    title: "User Conduct",
    content: "Users must respect artists' intellectual property, engage respectfully with the community, and not engage in any harmful or illegal activities."
  },
  {
    id: 6,
    title: "Privacy",
    content: "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service."
  },
  {
    id: 7,
    title: "Termination",
    content: "We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service."
  },
  {
    id: 8,
    title: "Changes to Terms",
    content: "We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page."
  },
  {
    id: 9,
    title: "Contact Information",
    content: "If you have any questions about these Terms of Service, please contact us at legal@zelvyn.com"
  }
];

export default function TermsPage() {
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
            <H1 className="mb-6">Terms of Service</H1>
            <BodySmall className="text-neutral-500 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </BodySmall>

            <div className="space-y-6 text-neutral-700">
              {TERMS_SECTIONS.map((section) => (
                <section key={section.id}>
                  <H2 className="mb-3">
                    {section.id}. {section.title}
                  </H2>
                  {Array.isArray(section.content) ? (
                    <ul className="list-disc list-inside space-y-2">
                      {section.content.map((item, index) => (
                        <li key={index}>
                          <Body as="span">{item}</Body>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Body>{section.content}</Body>
                  )}
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
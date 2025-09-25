"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

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
            <h1 className="text-3xl font-bold text-neutral-900 mb-6">Privacy Policy</h1>
            <p className="text-sm text-neutral-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-neutral-700">
              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. Information We Collect</h2>
                <div className="space-y-2">
                  <p><strong>Personal Information:</strong> Name, email address, profile information</p>
                  <p><strong>Usage Data:</strong> How you interact with our platform</p>
                  <p><strong>Device Information:</strong> Browser type, IP address, device identifiers</p>
                  <p><strong>Content:</strong> Artwork, comments, and other user-generated content</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and maintain our service</li>
                  <li>Process transactions and send notifications</li>
                  <li>Improve user experience and platform features</li>
                  <li>Communicate with you about updates and promotions</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information in these situations:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist our operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. Your Rights</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Cookies and Tracking</h2>
                <p>We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">7. Third-Party Services</h2>
                <p>Our platform may contain links to third-party websites. We are not responsible for their privacy practices.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">8. Children's Privacy</h2>
                <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">9. Changes to Privacy Policy</h2>
                <p>We may update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">10. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at privacy@zelvyn.com</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
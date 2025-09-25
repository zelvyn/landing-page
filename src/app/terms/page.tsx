"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

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
            <h1 className="text-3xl font-bold text-neutral-900 mb-6">Terms of Service</h1>
            <p className="text-sm text-neutral-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-neutral-700">
              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. Acceptance of Terms</h2>
                <p>By accessing and using Zelvyn, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. User Accounts</h2>
                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities under your account.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. Content Guidelines</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>You retain ownership of content you upload</li>
                  <li>Content must not violate any laws or third-party rights</li>
                  <li>We reserve the right to remove inappropriate content</li>
                  <li>You grant us license to display and distribute your content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Artist Responsibilities</h2>
                <p>Artists using our platform agree to provide original artwork and maintain professional conduct. Any copyright infringement will result in account suspension.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. User Conduct</h2>
                <p>Users must respect artists' intellectual property, engage respectfully with the community, and not engage in any harmful or illegal activities.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Privacy</h2>
                <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">7. Termination</h2>
                <p>We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">8. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">9. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us at legal@zelvyn.com</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
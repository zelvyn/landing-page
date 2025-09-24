"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { H1, H2, H3, Lead, Body } from "@/components/Typography";
import { ArtworkCard } from "@/components/ArtworkCard";
import { ROUTES, ANIMATION_VARIANTS } from "@/utils/constants";

const featuredArtworks = [
  {
    id: "1",
    title: "Digital Dreams",
    artist: { name: "Alex Chen", username: "alexchen", avatar: "/avatars/alex.jpg" },
    image: "/artworks/digital-dreams.jpg",
    price: 2500,
    likes: 142,
  },
  {
    id: "2",
    title: "Neon Nights",
    artist: { name: "Sarah Kim", username: "sarahkim", avatar: "/avatars/sarah.jpg" },
    image: "/artworks/neon-nights.jpg",
    price: 1800,
    likes: 89,
  },
  {
    id: "3",
    title: "Abstract Emotions",
    artist: { name: "Mike Johnson", username: "mikej", avatar: "/avatars/mike.jpg" },
    image: "/artworks/abstract-emotions.jpg",
    price: 3200,
    likes: 203,
  },
];

const features = [
  {
    icon: "🎨",
    title: "Showcase Your Art",
    description: "Create stunning portfolios and reach art lovers worldwide with our intuitive platform.",
  },
  {
    icon: "💰",
    title: "Earn from Your Passion",
    description: "Sell your artwork and accept commissions directly through our secure marketplace.",
  },
  {
    icon: "🌟",
    title: "Build Your Brand",
    description: "Grow your following and establish yourself as a professional artist in the community.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.stagger}
            className="text-center"
          >
            <motion.div variants={ANIMATION_VARIANTS.fadeIn}>
              <H1 className="mb-6">
                Where Art Meets
                <br />
                <span className="text-gradient">Digital Innovation</span>
              </H1>
            </motion.div>
            
            <motion.div variants={ANIMATION_VARIANTS.slideUp}>
              <Lead className="max-w-3xl mx-auto mb-8">
                Discover extraordinary digital art, connect with talented artists, and own unique pieces 
                that inspire. Join the future of art collecting and creation.
              </Lead>
            </motion.div>
            
            <motion.div 
              variants={ANIMATION_VARIANTS.slideUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href={ROUTES.SIGNUP}>
                <Button size="lg" className="w-full sm:w-auto">
                  Start Creating
                </Button>
              </Link>
              <Link href="/explore">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Art
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="aspect-video bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <H3 className="text-white mb-4">Featured Artwork Preview</H3>
                  <Body className="text-white/80">Discover amazing digital art from talented creators</Body>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-accent-400 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-400 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.stagger}
            className="text-center mb-16"
          >
            <motion.div variants={ANIMATION_VARIANTS.fadeIn}>
              <H2 className="mb-4">Why Choose Zelvyn?</H2>
            </motion.div>
            <motion.div variants={ANIMATION_VARIANTS.slideUp}>
              <Lead className="max-w-2xl mx-auto text-neutral-600">
                Everything you need to succeed as a digital artist in one powerful platform.
              </Lead>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={ANIMATION_VARIANTS.slideUp}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <H3 className="mb-4">{feature.title}</H3>
                <Body className="text-neutral-600">{feature.description}</Body>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Artworks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50/30 to-secondary-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.stagger}
            className="text-center mb-16"
          >
            <motion.div variants={ANIMATION_VARIANTS.fadeIn}>
              <H2 className="mb-4">Featured Artworks</H2>
            </motion.div>
            <motion.div variants={ANIMATION_VARIANTS.slideUp}>
              <Lead className="max-w-2xl mx-auto text-neutral-600">
                Discover exceptional pieces from our community of talented artists.
              </Lead>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredArtworks.map((artwork) => (
              <motion.div key={artwork.id} variants={ANIMATION_VARIANTS.slideUp}>
                <ArtworkCard {...artwork} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mt-12"
          >
            <Link href="/explore">
              <Button variant="outline" size="lg">
                View All Artworks
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.stagger}
          >
            <motion.div variants={ANIMATION_VARIANTS.fadeIn}>
              <H2 className="text-white mb-4">Ready to Share Your Art?</H2>
            </motion.div>
            <motion.div variants={ANIMATION_VARIANTS.slideUp}>
              <Lead className="text-white/90 mb-8">
                Join thousands of artists who are already building their careers on Zelvyn.
              </Lead>
            </motion.div>
            <motion.div variants={ANIMATION_VARIANTS.slideUp}>
              <Link href={ROUTES.SIGNUP}>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-neutral-100"
                >
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

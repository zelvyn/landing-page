"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ArtworkCard } from "@/components/ArtworkCard";
import { H1, H3, Body, Caption } from "@/components/Typography";
import { ANIMATION_VARIANTS } from "@/utils/constants";

interface Artist {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  coverImage: string;
  location: string;
  website: string;
  socialLinks: {
    twitter: string;
    instagram: string;
    discord: string;
  };
  stats: {
    followers: number;
    following: number;
    artworks: number;
    sales: number;
  };
  artworks: Array<{
    id: string;
    title: string;
    image: string;
    price: number;
    likes: number;
    isLiked: boolean;
  }>;
}

interface ArtistProfileProps {
  artist: Artist;
}

export const ArtistProfile = ({ artist }: ArtistProfileProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("artworks");

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleLike = (artworkId: string) => {
    // Handle artwork like functionality
    console.log("Liked artwork:", artworkId);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      {/* Cover Image */}
      <div className="relative h-64 md:h-80 lg:h-96 mt-16">
        <Image
          src={artist.coverImage}
          alt={`${artist.name}'s cover`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.stagger}
          className="relative -mt-20 pb-8"
        >
          {/* Profile Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.slideUp}
            className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={artist.avatar}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <H1 className="mb-2">{artist.name}</H1>
                    <Caption className="text-neutral-500 mb-2">
                      @{artist.username}
                    </Caption>
                    <Body className="text-neutral-600 mb-4 max-w-2xl">
                      {artist.bio}
                    </Body>

                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {artist.location}
                      </div>
                      <a
                        href={artist.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary-600 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Website
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={handleFollow}
                      variant={isFollowing ? "outline" : "primary"}
                      className="min-w-[120px]"
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                    <Button variant="outline">Message</Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={ANIMATION_VARIANTS.slideUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: "Followers", value: artist.stats.followers },
              { label: "Following", value: artist.stats.following },
              { label: "Artworks", value: artist.stats.artworks },
              { label: "Sales", value: artist.stats.sales },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-2xl font-bold text-neutral-900 mb-1">
                  {formatNumber(stat.value)}
                </div>
                <Caption className="text-neutral-500">{stat.label}</Caption>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={ANIMATION_VARIANTS.slideUp}
            className="flex justify-center gap-4 mb-8"
          >
            <a
              href={artist.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <svg
                className="w-5 h-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href={artist.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <svg
                className="w-5 h-5 text-pink-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
              </svg>
            </a>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={ANIMATION_VARIANTS.slideUp}
            className="border-b border-neutral-200 mb-8"
          >
            <nav className="flex space-x-8">
              {[
                {
                  id: "artworks",
                  label: "Artworks",
                  count: artist.artworks.length,
                },
                { id: "collections", label: "Collections", count: 3 },
                { id: "about", label: "About" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className="ml-2 text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Content */}
          <motion.div variants={ANIMATION_VARIANTS.fadeIn} key={activeTab}>
            {activeTab === "artworks" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artist.artworks.map((artwork) => (
                  <ArtworkCard
                    key={artwork.id}
                    {...artwork}
                    artist={{
                      name: artist.name,
                      username: artist.username,
                      avatar: artist.avatar,
                    }}
                    onLike={handleLike}
                  />
                ))}
              </div>
            )}

            {activeTab === "collections" && (
              <div className="text-center py-12">
                <H3 className="mb-4 text-neutral-600">
                  Collections Coming Soon
                </H3>
                <Body className="text-neutral-500">
                  This artist hasn't created any collections yet.
                </Body>
              </div>
            )}

            {activeTab === "about" && (
              <div className="max-w-3xl">
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <H3 className="mb-6">About {artist.name}</H3>
                  <Body className="text-neutral-600 leading-relaxed mb-6">
                    {artist.bio}
                  </Body>
                  <Body className="text-neutral-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Body>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

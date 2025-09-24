"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { H5, Body, Caption } from "./Typography";
import { cn } from "@/utils/helpers";

interface ArtworkCardProps {
  id: string;
  title: string;
  artist: {
    name: string;
    username: string;
    avatar?: string;
  };
  image: string;
  price?: number;
  likes?: number;
  isLiked?: boolean;
  className?: string;
  onLike?: (id: string) => void;
}

export const ArtworkCard = ({
  id,
  title,
  artist,
  image,
  price,
  likes = 0,
  isLiked = false,
  className,
  onLike,
}: ArtworkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onLike?.(id)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg
            className={cn(
              "w-5 h-5 transition-colors duration-200",
              isLiked ? "text-red-500 fill-current" : "text-neutral-600"
            )}
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </motion.button>

        {/* Price Tag */}
        {price && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Caption className="font-semibold text-neutral-900">
              ${price.toLocaleString()}
            </Caption>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <H5 className="mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
          {title}
        </H5>
        
        <Link
          href={`/artist/${artist.username}`}
          className="flex items-center space-x-3 mb-4 group/artist"
        >
          {artist.avatar ? (
            <Image
              src={artist.avatar}
              alt={artist.name}
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {artist.name.charAt(0)}
              </span>
            </div>
          )}
          <Body className="text-neutral-600 group-hover/artist:text-primary-600 transition-colors duration-200">
            {artist.name}
          </Body>
        </Link>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <Caption className="text-neutral-500">{likes}</Caption>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const ArtworkCardSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden animate-pulse">
      <div className="aspect-square bg-neutral-200" />
      <div className="p-6">
        <div className="h-6 bg-neutral-200 rounded mb-2" />
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-neutral-200 rounded-full" />
          <div className="h-4 bg-neutral-200 rounded w-24" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-4 bg-neutral-200 rounded w-12" />
          <div className="h-5 w-5 bg-neutral-200 rounded" />
        </div>
      </div>
    </div>
  );
};
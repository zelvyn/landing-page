"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/Button";
import { BsHouse, BsArrowLeft } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Page Not Found</h2>
          <p className="text-neutral-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">
              <BsHouse className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={() => window.history.back()}
          >
            <BsArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
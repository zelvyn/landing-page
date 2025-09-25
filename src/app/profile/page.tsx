"use client";

import { motion } from "framer-motion";
import { useUserStore } from "@/store/useUserStore";
import { Navbar } from "@/components/Navbar";
import {
  BsPerson,
  BsCalendar,
  BsEnvelope,
  BsPhone,
  BsGlobe,
} from "react-icons/bs";

export default function ProfilePage() {
  const { user } = useUserStore();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 h-32"></div>

            {/* Profile Info */}
            <div className="px-8 py-6">
              <div className="flex items-start space-x-6 -mt-16">
                {user?.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={user?.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full border-4 border-white bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center shadow-lg">
                    <BsPerson className="w-12 h-12 text-purple-600" />
                  </div>
                )}

                <div className="flex-1 mt-4">
                  <h1 className="text-3xl font-bold text-neutral-900">
                    {user?.name}
                  </h1>
                  <p className="text-lg text-neutral-600">
                    @{user?.username || "username"}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user?.emailVerified
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {user?.emailVerified
                        ? "Verified Account"
                        : "Unverified Account"}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 capitalize">
                      {user?.userType?.toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                    Personal Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BsEnvelope className="w-5 h-5 text-neutral-500" />
                      <div>
                        <p className="text-sm text-neutral-500">Email</p>
                        <p className="font-medium">{user?.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <BsPhone className="w-5 h-5 text-neutral-500" />
                      <div>
                        <p className="text-sm text-neutral-500">Phone</p>
                        <p className="font-medium">
                          {user?.phone || "Not provided"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <BsCalendar className="w-5 h-5 text-neutral-500" />
                      <div>
                        <p className="text-sm text-neutral-500">Member since</p>
                        <p className="font-medium">
                          {user?.createdAt
                            ? new Date(user.createdAt).toLocaleDateString()
                            : "Unknown"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <BsGlobe className="w-5 h-5 text-neutral-500" />
                      <div>
                        <p className="text-sm text-neutral-500">Provider</p>
                        <p className="font-medium capitalize">
                          {user?.provider || "Email"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Statistics */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                    Account Statistics
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Profile Views</span>
                      <span className="font-semibold text-2xl text-purple-600">
                        1,234
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Artworks</span>
                      <span className="font-semibold text-2xl text-blue-600">
                        42
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Followers</span>
                      <span className="font-semibold text-2xl text-pink-600">
                        567
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Following</span>
                      <span className="font-semibold text-2xl text-green-600">
                        89
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Last Login</span>
                      <span className="font-medium text-neutral-700">
                        {user?.lastLogin
                          ? new Date(user.lastLogin).toLocaleDateString()
                          : "Today"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mt-6 bg-neutral-50 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  About
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Welcome to my profile! I'm a passionate{" "}
                  {user?.userType?.toLowerCase()} on Zelvyn, exploring the world
                  of digital art and creativity. I love experimenting with
                  different styles and techniques to create unique pieces that
                  inspire and captivate viewers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

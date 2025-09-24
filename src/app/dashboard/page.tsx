"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { Input, Textarea } from "@/components/Input";
import { H1, H2, H3, Body, Caption } from "@/components/Typography";
import { ArtworkCard } from "@/components/ArtworkCard";
import { useUserStore } from "@/store/useUserStore";
import { ANIMATION_VARIANTS } from "@/utils/constants";

const mockArtworks = [
  {
    id: "1",
    title: "Digital Dreams",
    image: "/artworks/digital-dreams.jpg",
    price: 2500,
    likes: 142,
    isLiked: false,
    status: "published",
    views: 1250,
  },
  {
    id: "2",
    title: "Cyber City",
    image: "/artworks/cyber-city.jpg",
    price: 3200,
    likes: 89,
    isLiked: true,
    status: "draft",
    views: 0,
  },
];

const mockCommissions = [
  {
    id: "1",
    title: "Custom Portrait",
    client: "John Doe",
    price: 500,
    status: "in_progress",
    deadline: "2024-02-15",
  },
  {
    id: "2",
    title: "Logo Design",
    client: "Tech Startup",
    price: 800,
    status: "completed",
    deadline: "2024-01-20",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const {
    user,
    isAuthenticated,
    dashboardState,
    updateDashboardState,
    addRecentUpload,
  } = useUserStore();
  const [activeTab, setActiveTab] = useState(dashboardState.activeTab);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: "",
    description: "",
    price: "",
    tags: "",
  });

  useEffect(() => {
    if (!isAuthenticated || user?.userType !== "ARTIST") {
      router.push("/auth/login");
      return;
    }
  }, [isAuthenticated, user, router]);

  useEffect(() => {
    updateDashboardState({ activeTab });
  }, [activeTab, updateDashboardState]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle artwork upload
    const newArtworkId = Date.now().toString();
    addRecentUpload(newArtworkId);
    setIsUploadModalOpen(false);
    setUploadForm({ title: "", description: "", price: "", tags: "" });
  };

  const stats = [
    { label: "Total Artworks", value: "24", change: "+3 this month" },
    { label: "Total Sales", value: "$12,450", change: "+$2,100 this month" },
    { label: "Profile Views", value: "8,920", change: "+15% this week" },
    { label: "Followers", value: "1,234", change: "+89 this week" },
  ];

  if (!isAuthenticated || user?.userType !== "ARTIST") {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.stagger}
          >
            {/* Header */}
            <motion.div
              variants={ANIMATION_VARIANTS.slideUp}
              className="flex flex-col md:flex-row md:items-center justify-between mb-8"
            >
              <div>
                <H1 className="mb-2">Welcome to Zelvyn, {user?.name}!</H1>
                <Body className="text-neutral-600">
                  Manage your artworks, track your sales, and grow your
                  audience.
                </Body>
              </div>
              <Button
                onClick={() => setIsUploadModalOpen(true)}
                className="mt-4 md:mt-0"
              >
                Upload Artwork
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={ANIMATION_VARIANTS.slideUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <Caption className="text-neutral-500">{stat.label}</Caption>
                  </div>
                  <H2 className="mb-1">{stat.value}</H2>
                  <Caption className="text-green-600">{stat.change}</Caption>
                </div>
              ))}
            </motion.div>

            {/* Tabs */}
            <motion.div
              variants={ANIMATION_VARIANTS.slideUp}
              className="border-b border-neutral-200 mb-8"
            >
              <nav className="flex space-x-8">
                {[
                  { id: "overview", label: "Overview" },
                  {
                    id: "artworks",
                    label: "Artworks",
                    count: mockArtworks.length,
                  },
                  {
                    id: "commissions",
                    label: "Commissions",
                    count: mockCommissions.length,
                  },
                  { id: "analytics", label: "Analytics" },
                  { id: "settings", label: "Settings" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
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
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* Recent Activity */}
                  <div className="bg-white rounded-3xl p-6 shadow-sm">
                    <H3 className="mb-4">Recent Activity</H3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-2xl">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <Body>New sale: "Digital Dreams" sold for $2,500</Body>
                        <Caption className="text-neutral-500 ml-auto">
                          2 hours ago
                        </Caption>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-2xl">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <Body>New follower: @artlover123</Body>
                        <Caption className="text-neutral-500 ml-auto">
                          5 hours ago
                        </Caption>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white rounded-3xl p-6 shadow-sm">
                    <H3 className="mb-4">Quick Actions</H3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="h-20">
                        Upload New Artwork
                      </Button>
                      <Button variant="outline" className="h-20">
                        Create Collection
                      </Button>
                      <Button variant="outline" className="h-20">
                        View Analytics
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "artworks" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mockArtworks.map((artwork) => (
                    <div key={artwork.id} className="relative">
                      <ArtworkCard
                        {...artwork}
                        artist={{
                          name: user?.name || "",
                          username: user?.username || "",
                          avatar: user?.profileImage || "",
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            artwork.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {artwork.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "commissions" && (
                <div className="space-y-4">
                  {mockCommissions.map((commission) => (
                    <div
                      key={commission.id}
                      className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <H3 className="mb-1">{commission.title}</H3>
                          <Body className="text-neutral-600">
                            Client: {commission.client}
                          </Body>
                          <Caption className="text-neutral-500">
                            Deadline: {commission.deadline}
                          </Caption>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-neutral-900 mb-1">
                            ${commission.price}
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              commission.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {commission.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <H3 className="mb-4">Analytics Coming Soon</H3>
                  <Body className="text-neutral-600">
                    Detailed analytics and insights will be available here.
                  </Body>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <H3 className="mb-4">Profile Settings</H3>
                  <Body className="text-neutral-600">
                    Profile settings and preferences will be available here.
                  </Body>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full"
          >
            <H3 className="mb-6">Upload New Artwork</H3>
            <form onSubmit={handleUploadSubmit} className="space-y-4">
              <Input
                label="Title"
                placeholder="Enter artwork title"
                value={uploadForm.title}
                onChange={(e) =>
                  setUploadForm((prev) => ({ ...prev, title: e.target.value }))
                }
                required
              />
              <Textarea
                label="Description"
                placeholder="Describe your artwork"
                value={uploadForm.description}
                onChange={(e) =>
                  setUploadForm((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={3}
              />
              <Input
                label="Price ($)"
                type="number"
                placeholder="0.00"
                value={uploadForm.price}
                onChange={(e) =>
                  setUploadForm((prev) => ({ ...prev, price: e.target.value }))
                }
              />
              <Input
                label="Tags"
                placeholder="digital, art, abstract"
                value={uploadForm.tags}
                onChange={(e) =>
                  setUploadForm((prev) => ({ ...prev, tags: e.target.value }))
                }
              />
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Upload
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

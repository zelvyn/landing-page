"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { BsGear, BsBell, BsShield, BsPalette, BsGlobe } from "react-icons/bs";

export default function SettingsPage() {
  const { user, preferences, updatePreferences, theme, setTheme } =
    useUserStore();
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: BsGear },
    { id: "notifications", label: "Notifications", icon: BsBell },
    { id: "privacy", label: "Privacy", icon: BsShield },
    { id: "appearance", label: "Appearance", icon: BsPalette },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 bg-neutral-50 border-r border-neutral-200">
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-neutral-900 mb-6">
                    Settings
                  </h1>
                  <nav className="space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                            activeTab === tab.id
                              ? "bg-primary-100 text-primary-700"
                              : "text-neutral-600 hover:bg-neutral-100"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{tab.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8">
                {activeTab === "general" && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-neutral-900">
                      General Settings
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        value={user?.name || ""}
                        placeholder="Enter your full name"
                      />
                      <Input
                        label="Username"
                        value={user?.username || ""}
                        placeholder="Enter your username"
                      />
                      <Input
                        label="Email"
                        type="email"
                        value={user?.email || ""}
                        placeholder="Enter your email"
                      />
                      <Input
                        label="Phone"
                        value={user?.phone || ""}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-neutral-700">
                        Bio
                      </label>
                      <textarea
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        rows={4}
                        placeholder="Tell us about yourself..."
                        defaultValue="I'm a passionate artist exploring digital creativity..."
                      />
                    </div>

                    <Button className="w-full md:w-auto">Save Changes</Button>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-neutral-900">
                      Notification Preferences
                    </h2>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                        <div>
                          <h3 className="font-medium text-neutral-900">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-neutral-600">
                            Receive notifications via email
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={preferences.emailUpdates}
                            onChange={(e) =>
                              updatePreferences({
                                emailUpdates: e.target.checked,
                              })
                            }
                          />
                          <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                        <div>
                          <h3 className="font-medium text-neutral-900">
                            Push Notifications
                          </h3>
                          <p className="text-sm text-neutral-600">
                            Receive push notifications
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={preferences.showNotifications}
                            onChange={(e) =>
                              updatePreferences({
                                showNotifications: e.target.checked,
                              })
                            }
                          />
                          <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                        <div>
                          <h3 className="font-medium text-neutral-900">
                            Marketing Emails
                          </h3>
                          <p className="text-sm text-neutral-600">
                            Receive promotional content
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "privacy" && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-neutral-900">
                      Privacy Settings
                    </h2>

                    <div className="space-y-4">
                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <h3 className="font-medium text-neutral-900 mb-2">
                          Profile Visibility
                        </h3>
                        <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg">
                          <option>Public</option>
                          <option>Friends Only</option>
                          <option>Private</option>
                        </select>
                      </div>

                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <h3 className="font-medium text-neutral-900 mb-2">
                          Show Online Status
                        </h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>

                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h3 className="font-medium text-red-900 mb-2">
                          Danger Zone
                        </h3>
                        <p className="text-sm text-red-600 mb-4">
                          These actions cannot be undone
                        </p>
                        <Button
                          variant="outline"
                          className="text-red-600 border-red-300 hover:bg-red-50"
                        >
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "appearance" && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-neutral-900">
                      Appearance
                    </h2>

                    <div className="space-y-4">
                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <h3 className="font-medium text-neutral-900 mb-4">
                          Theme
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            onClick={() => setTheme("light")}
                            className={`p-4 border-2 rounded-lg bg-white cursor-pointer transition-all ${
                              theme === "light"
                                ? "border-primary-500 ring-2 ring-primary-200"
                                : "border-neutral-300 hover:border-neutral-400"
                            }`}
                          >
                            <div className="w-full h-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded mb-2"></div>
                            <p className="text-sm font-medium text-center">
                              Light
                            </p>
                          </button>
                          <button
                            onClick={() => setTheme("dark")}
                            className={`p-4 border-2 rounded-lg bg-neutral-800 cursor-pointer transition-all ${
                              theme === "dark"
                                ? "border-primary-500 ring-2 ring-primary-200"
                                : "border-neutral-300 hover:border-neutral-400"
                            }`}
                          >
                            <div className="w-full h-8 bg-gradient-to-r from-neutral-700 to-neutral-600 rounded mb-2"></div>
                            <p className="text-sm font-medium text-center text-white">
                              Dark
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  email: string;
  name: string;
  username?: string;
  profileImage?: string;
  userType: "ARTIST" | "USER";
  phone?: string;
  emailVerified: boolean;
  isActive: boolean;
  provider?: string;
  createdAt: string;
  lastLogin?: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  theme: "light" | "dark";
  preferences: {
    showNotifications: boolean;
    emailUpdates: boolean;
    artworkFilters: string[];
  };
  dashboardState: {
    activeTab: string;
    recentUploads: string[];
  };
}

interface UserActions {
  setUser: (user: User | null) => void;
  logout: () => void;
  setTheme: (theme: "light" | "dark") => void;
  updatePreferences: (preferences: Partial<UserState["preferences"]>) => void;
  updateDashboardState: (state: Partial<UserState["dashboardState"]>) => void;
  addRecentUpload: (uploadId: string) => void;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  theme: "light",
  preferences: {
    showNotifications: true,
    emailUpdates: true,
    artworkFilters: [],
  },
  dashboardState: {
    activeTab: "overview",
    recentUploads: [],
  },
};

export const useUserStore = create<UserState & UserActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          dashboardState: initialState.dashboardState,
        }),

      setTheme: (theme) => set({ theme }),

      updatePreferences: (newPreferences) =>
        set((state) => ({
          preferences: { ...state.preferences, ...newPreferences },
        })),

      updateDashboardState: (newState) =>
        set((state) => ({
          dashboardState: { ...state.dashboardState, ...newState },
        })),

      addRecentUpload: (uploadId) =>
        set((state) => ({
          dashboardState: {
            ...state.dashboardState,
            recentUploads: [
              uploadId,
              ...state.dashboardState.recentUploads,
            ].slice(0, 10),
          },
        })),
    }),
    {
      name: "zelvyn-user-store",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        theme: state.theme,
        preferences: state.preferences,
        dashboardState: state.dashboardState,
      }),
    },
  ),
);

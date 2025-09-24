import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zelvyn - Where Art Meets Digital Innovation",
    template: "%s | Zelvyn",
  },
  description: "Discover extraordinary digital art, connect with talented artists, and own unique pieces that inspire. Join the future of art collecting and creation.",
  keywords: ["digital art", "NFT", "artists", "marketplace", "art collection", "creative platform"],
  authors: [{ name: "Zelvyn Team" }],
  creator: "Zelvyn",
  publisher: "Zelvyn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zelvyn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zelvyn.com",
    title: "Zelvyn - Where Art Meets Digital Innovation",
    description: "Discover extraordinary digital art, connect with talented artists, and own unique pieces that inspire.",
    siteName: "Zelvyn",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zelvyn - Digital Art Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelvyn - Where Art Meets Digital Innovation",
    description: "Discover extraordinary digital art, connect with talented artists, and own unique pieces that inspire.",
    images: ["/og-image.jpg"],
    creator: "@zelvyn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
import { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zelvyn | Hire Custom Portrait Artists in India",
  description:
    "Zelvyn connects talented artists with clients looking for custom portraits and artwork. Affordable, verified, and secure.",
  keywords: "custom portraits, artists india, commission artwork, digital art",
  openGraph: {
    title: "Zelvyn | Custom Portrait Artists in India",
    description:
      "Connect with talented artists for custom portraits and artwork",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
          rel="stylesheet"
        />
        {/* Favicon link */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} ${playfair.className}`}>
        {children}
      </body>
    </html>
  );
}

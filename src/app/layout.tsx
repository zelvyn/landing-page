import { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Zelvyn",
  description: "Connecting artists with people looking for creative talent",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

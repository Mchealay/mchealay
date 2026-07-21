import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Chen — Full-Stack Engineer",
  description:
    "Full-Stack Engineer specializing in scalable systems, high-performance APIs, and modern web experiences. Currently available for new opportunities.",
  keywords: [
    "Full-Stack Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen — Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in scalable systems, high-performance APIs, and modern web experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen — Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in scalable systems, high-performance APIs, and modern web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

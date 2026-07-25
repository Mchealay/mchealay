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
  title: "Mchealay Hafte — Full-Stack Software Developer",
  description:
    "Full-Stack Software Developer specializing in AI-powered applications, NestJS microservices, Python OpenCV vision systems, and Next.js platforms. B.Sc. Software Engineering Mekelle University (GPA 3.67/4.0).",
  keywords: [
    "Mchealay Hafte",
    "Full-Stack Developer",
    "Software Developer",
    "Python",
    "Django",
    "Next.js",
    "NestJS",
    "Flutter",
    "OpenCV",
    "MediaPipe",
    "PostgreSQL",
    "MongoDB",
    "Tigrinya Sign Language",
    "Mekelle University",
    "Portfolio",
  ],
  authors: [{ name: "Mchealay Hafte", url: "https://mchealay.vercel.app" }],
  openGraph: {
    title: "Mchealay Hafte — Full-Stack Software Developer",
    description:
      "Full-Stack Developer delivering AI-powered solutions in healthcare, education, career tech & governance.",
    url: "https://mchealay.vercel.app",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mchealay Hafte — Full-Stack Software Developer",
    description:
      "Full-Stack Developer delivering AI-powered solutions in healthcare, education, career tech & governance.",
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

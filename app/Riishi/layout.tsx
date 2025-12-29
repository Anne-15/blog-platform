import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ReactQueryProvider } from "../QueryClientProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Riishi | Portfolio & Creative Projects",
    template: "%s | Riishi Portfolio"
  },
  description: "Explore my creative portfolio featuring software engineering projects and UI/UX designs. Discover innovative solutions and creative work.",
  keywords: ["portfolio", "software engineering", "UI/UX design", "web development", "Riishi"],
  authors: [{ name: "Riishi" }],
  creator: "Riishi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.riishi.net",
    siteName: "Riishi Portfolio",
    title: "Riishi | Portfolio & Creative Projects",
    description: "Explore my creative portfolio featuring software engineering projects and UI/UX designs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riishi | Portfolio & Creative Projects",
    description: "Explore my creative portfolio featuring software engineering projects and UI/UX designs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={outfit.className}>
      <ReactQueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </ReactQueryProvider>
    </div>
  );
}

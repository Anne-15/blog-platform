import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riishi",
  description: "My blog portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <main className="h-full">
          {children} <Analytics />
        </main>
      </body>
    </html>
  );
}

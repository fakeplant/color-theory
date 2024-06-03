import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Color Theory",
  description: "A deep dive into the wonderful world of color.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

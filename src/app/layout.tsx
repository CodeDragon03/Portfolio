import type { Metadata } from "next";
import { Twinkle_Star } from "next/font/google";
import "./globals.css";

const twinkleStar = Twinkle_Star({
  weight: "400",
  variable: "--font-twinkle-star",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "In progess ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${twinkleStar.variable} antialiased`}>{children}</body>
    </html>
  );
}

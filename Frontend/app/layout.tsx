import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Visa City",
  description: "Fast, reliable visa application services for global travel.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black h-full sidebar">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black h-full`}>
    <div className="min-h-screen w-full px-4 lg:px-20 bg-black">
      {children}
    </div>
  </body>
</html>

  );
}

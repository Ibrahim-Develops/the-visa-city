import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

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
        <Link
          href="https://wa.me/971547499849"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        >
          <FaWhatsapp className="text-2xl" />
          <ToastContainer position="bottom-left" autoClose={3000} theme="dark" style={{ zIndex: 999999 }} />
        </Link>
      </body>
    </html>
  );
}

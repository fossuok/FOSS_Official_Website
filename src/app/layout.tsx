import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Foss UOK official Website",
  description: "This is the official website of Foss UOK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#020c1b] via-[#0d1b2a] to-[#112240] text-gray-600 m-[40px]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

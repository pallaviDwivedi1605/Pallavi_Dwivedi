import Navbar from "@/src/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pallavi Dwivedi",
  description: "Welcome to My Protfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className=" w-screen p-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

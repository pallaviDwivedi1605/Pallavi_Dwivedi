import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";

const text = Hind_Siliguri({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Pallavi Dwivedi",
  description: "PD's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={text.className}>
        <div>
          <Navbar />
          <main className="container">{children}</main>
          <div className="overlay"></div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

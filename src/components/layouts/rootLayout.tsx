import "@/app/globals.css";
import Navbar from "@/components/common/navbar";
import type { Metadata } from "next";
import { Inter, MuseoModerno, Outfit } from "next/font/google";
import Footer from "../common/footer";

const inter = Inter({ subsets: ["latin"] });
const museo = MuseoModerno({ subsets: ["latin"], variable: "--font-museo" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Tabby Profiles",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <div className="min-h-[95vh]">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
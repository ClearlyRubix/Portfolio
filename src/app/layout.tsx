import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cayden Batten",
  description: "Electrical Engineering Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className + " text-zinc-300 text-sm bg-zinc-900 flex flex-col min-h-screen"}>
        <Navbar/>
        <div className="flex flex-grow">
          {children}
        </div>
        
      </body>
    </html>
  );
}

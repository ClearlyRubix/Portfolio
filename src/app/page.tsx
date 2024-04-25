"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  
    return (
        <main className="min-h-screen bg-zinc-900">
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <div className="basis-1/2 self-stretch">
                    <HeroSection />
                </div>
                <div className="basis-1/2 self-stretch">
                    <AboutSection/>
                </div>
            </div>
        </main>
    );
}

"use client"

import AboutSection from "./components/sections/about/AboutSection";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  
    return (
        <main className="w-full">
            <div className="flex flex-col md:flex-row w-full">
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

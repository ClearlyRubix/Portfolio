import AboutSection from "./components/sections/about/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import FeaturedProjectsSection from "./components/sections/projects/FeaturedProjectsSection";

export default function Home() {
  
    return (
        <main className="w-full">
            <div className="flex flex-col md:flex-row w-full items-stretch flex-wrap">
                <div className="basis-1/2">
                    <HeroSection />
                </div>
                <div className="basis-1/2">
                    <AboutSection/>
                </div>
                <div className="basis-full">
                    <FeaturedProjectsSection/>
                </div>
            </div>
            
        </main>
    );
}

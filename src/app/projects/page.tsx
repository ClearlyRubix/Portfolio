import Image from "next/image";
import ProjectItem from "../components/sections/projects/ProjectItem";



export default function Projects() {
    return (
        <main className="w-full">
            <div className="flex flex-col md:flex-row items-stretch flex-wrap gap-y-16">
                <div className="basis-1/3">
                    <ProjectItem/>
                </div>
                <div className="basis-1/3">
                    <ProjectItem/>
                </div>
                <div className="basis-1/3">
                    <ProjectItem/>
                </div>
                <div className="basis-1/3">
                    <ProjectItem/>
                </div>
                <div className="basis-1/3">
                    <ProjectItem/>
                </div>
            </div>
        </main>
    );
}

import Image from "next/image";
import ProjectItem from "../components/sections/projects/ProjectItem";



export default function Projects() {
    return (
        <main className="w-full">
            <div className="flex flex-col md:flex-row items-stretch flex-wrap gap-y-16 gap-x-16 justify-between p-4">
                <div>
                    <ProjectItem title={"Title Text"} short_description={"Description Text"} date={"YYYY-MM-DD"} img_src={"/test%20image.png"}/>
                </div>
                <div>
                    <ProjectItem title={"Title Text"} short_description={"Description Text"} date={"YYYY-MM-DD"} img_src={"/test%20image.png"}/>
                </div>
                <div>
                    <ProjectItem title={"Title Text"} short_description={"Description Text"} date={"YYYY-MM-DD"} img_src={"/test%20image.png"}/>
                </div>
                <div>
                    <ProjectItem title={"Title Text"} short_description={"Description Text"} date={"YYYY-MM-DD"} img_src={"/test%20image.png"}/>
                </div>
                <div>
                    <ProjectItem title={"Title Text"} short_description={"Description Text"} date={"YYYY-MM-DD"} img_src={"/test%20image.png"}/>
                </div>
            </div>
        </main>
    );
}

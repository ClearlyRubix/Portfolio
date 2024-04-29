import Image from "next/image";
import ProjectItem from "../components/sections/projects/ProjectItem";
import { getSortedPostsData } from "../../../lib/posts";

// type allProjectData = {
//     title: String;
//     date: String;
//     short_description: String;
//     thumbnail: String;
// }[]

export default function Projects() {
    const allProjectData = getSortedPostsData()
    return (
        <main className="w-full">
            {allProjectData.length > 0 ? 
            <div className="flex flex-col md:flex-row items-stretch flex-wrap gap-y-8 gap-x-8 justify-center p-4">
                {
                    allProjectData.map((project) => (
                        <div key={project.id}>
                            <ProjectItem id={project.id} title={project.title} date={project.date} short_description={project.short_description} img_src={project.thumbnail}/>
                        </div>
                    ))
                }
            </div>
            :
            <div> 
                No Projects found
            </div>
            }

           
        
            
        </main> 
    );
}

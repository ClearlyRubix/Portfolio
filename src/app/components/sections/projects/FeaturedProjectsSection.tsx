import Link from "next/link"
import IconArrowRight from "../../icons/IconArrowRight"
import { getSortedFeaturedPostsData } from "../../../../../lib/posts";
import ProjectItem from "./ProjectItem";


type ProjectData = {
    date: string; 
    title: string; 
    short_description: string; 
    thumbnail: string;
    featured: boolean;
}[]

const FeaturedProjectsSection = () => {

    const featuredProjects = getSortedFeaturedPostsData()
    // console.log(featuredProjects)

    return (
        // Header
        <div className="mt-10 px-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="md:w-1/3"></div>
                <span className="text-xl uppercase font-bold tracking-widest">
                    Featured Projects
                </span>
                <div className="md:w-1/3 flex flex-col md:flex-row justify-end pr-3">
                    <Link href={"/projects"}>
                        <div className="flex flex-row items-center">
                          <div className="inline-block mr-2 text-xs uppercase font-bold tracking-wider">
                                All Projects
                            </div>
                            <div className="inline-block">
                                <IconArrowRight/>
                            </div>  
                        </div>
                    </Link>
                </div>
            </div>

            {/* Projects */}
            <div>
                
                {featuredProjects.length > 0 ?
                    <div>
                        {
                            featuredProjects.map((project) => ( 
                                <div key={project.id}>
                                    <ProjectItem title={project.title} date={project.date} id={project.id} short_description={project.short_description} img_src={project.thumbnail}/>
                                </div>
                            ))
                        }
                    </div>
                :
                    <div>
                        No Featured Projects Found
                    </div>    
                }
                
            </div>
        </div>
    )
}

export default FeaturedProjectsSection
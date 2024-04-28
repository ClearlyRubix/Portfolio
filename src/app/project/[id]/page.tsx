import { getProjectById, getProjectContentById, getSortedPostsData } from "../../../../lib/posts"
import Image from "next/image"

import { remark } from "remark"
import remarkHtml from "remark-html"


type ProjectData = { date: String; title: String; short_description: String; thumbnail: String }[]

export const dynamicParams = false // redirect to 404 if project does not exist

export async function generateStaticParams() { // get's all the possible project ids
    const allProjectData = getSortedPostsData()
    return allProjectData.map((project) => ({
        id: project.id
    }))
}

export default async function Project({ params }: { params: {id: string}}) {
    const project = getProjectById(params.id)
    const content = getProjectContentById(params.id).content
    const processsedContent = await remark().use(remarkHtml).process(content)
    const contentHtml = processsedContent.toString()

    return (
        <main className="w-full p-4">
            <div className="flex flex-col-reverse md:flex-row ">
                <Image className="block self-center" src={project.thumbnail} alt="Thumbnail Image" width={400} height={225}/>
                <div className="flex flex-col md:ml-3 pt-2 md:pt-0 pb-2">
                    <h1 className="text-xl uppercase font-bold tracking-wider inline">
                        {project.title}
                    </h1>
                    <h2 className="inline font-semibold text-base">
                        {project.date}
                    </h2>
                    <p>
                        {project.short_description}
                    </p>
                </div>
            </div>
            <div className="pt-2 prose prose-zinc prose-invert" dangerouslySetInnerHTML={{__html: contentHtml}}>

            </div>
        </main>
    );
}

import { getProjectById, getSortedPostsData } from "../../../../lib/posts"

type ProjectData = { date: String; title: String; short_description: String; thumbnail: String }[]

export const dynamicParams = false // redirect to 404 if project does not exist

export async function generateStaticParams() {
    const allProjectData = getSortedPostsData()
    return allProjectData.map((project) => ({
        id: project.id
    }))
}

export default function Project({ params }: { params: {id: string}}) {
    const project = getProjectById(params.id)
    return (
        <main className="">
            <div className="flex flex-col md:flex-row">
                {project.title}
            </div>
        </main>
    );
}

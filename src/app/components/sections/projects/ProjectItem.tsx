import Link from "next/link"

const ProjectItem = ({ title, date, short_description, img_src }: { title: String, date: String, short_description: String, img_src: String }) => {
    return(
        <Link href={"/project/"+title}>
            {/* Image Div */}
            <div className={"rounded-lg w-full h-52 md:w-[575px] md:h-80 group flex flex-col justify-end"}
            style={{ background: `url(${img_src})`, backgroundSize: "cover" }}>
                {/* Overlay Div */}
                <div className="overlay md:opacity-0 place-items-end w-full h-1/2 md:bg-transparent bg-zinc-800 rounded-b-lg rounded-t-md group-hover:bg-zinc-800 group-hover:opacity-60 group-hover:text- group-hover:visible opacity-60 left-0 bottom-0 transition-all duration-300 p-2 text-zinc-200">
                    <h1 className="text-xl uppercase font-bold tracking-wider inline">
                        {title + " · "}
                    </h1>
                    <h2 className="inline">
                        {date}
                    </h2>
                    <p>
                        {short_description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectItem
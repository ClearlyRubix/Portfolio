import Image from "next/image"
import Link from "next/link"
import LinkedInIcon from "../../../public/linkedin.svg"
import GitHubIcon from "../../../public/github.svg"
import IconGitHub from "../icons/IconGitHub"
import IconLinkedIn from "../icons/IconLinkedIn"


const HeroSection = () => {
    return (
        <>
        <div className="flex flex-col border-2 border-zinc-800 rounded m-4 p-4 h-full">
            <h1 className="text-zinc-200 font-bold text-4xl tracking-tighter mb-4">
                Cayden Batten
            </h1>
            <h2 className="font-semibold text-zinc-200 mb-4">
                Electrical Engineering Student
            </h2>
            <p className="max-w-xs mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed.
            </p>
            <ul>
                <li className="">
                    <Link href={"/resume.pdf"} className="p-1 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-200 w-fit block text-center">
                        <span className="bg-zinc-900 hover:bg-zinc-800 rounded-full px-3 py-1 w-fit block text-sm md:text-xs">
                            My Resume
                        </span>
                    </Link>
                </li>
            </ul>
            <ul className="flex items-center mt-12 md:mt-auto">
                <li className="mr-5 shrink-0 transition-transform hover:-translate-y-1">
                    <Link className="hover:text-zinc-200" href={"https://www.linkedin.com/in/caydenbatten/"} target="_blank" title="LinkedIn">
                        <IconLinkedIn feather={true}/>
                    </Link>
                </li>
                <li className="mr-5 shrink-0 transition-transform hover:-translate-y-1">
                    <Link className="hover:text-zinc-200" href={"https://github.com/ClearlyRubix/"} target="_blank" title="GitHub">
                        <IconGitHub feather={true} />
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default HeroSection
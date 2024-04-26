import Link from "next/link"
import IconGitHub from "../../icons/IconGitHub"
import IconLinkedIn from "../../icons/IconLinkedIn"
import ContactText from "./ContactText"

const ContactSection = () => {
    return (
        <>
        <div id="contact" className="flex flex-col border-2 border-zinc-800 rounded m-4 p-4">
            <h2 className="font-bold text-sm text-zinc-100 uppercase tracking-widest pb-6">
                Let&#39;s Connect
            </h2>
            <ContactText/> 
            <ul className="flex items-center mt-8">
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

export default ContactSection
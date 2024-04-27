"use client"
import Link from "next/link"
import { useState } from "react"


const Navbar = () => {
    const [navDropDownEnabled, setnavDropDownEnabled] = useState(false)

    return (
        <>
        <nav className="border-b-zinc-800 border-b-2 border-x-transparent border-t-transparent bg-zinc-900">
            <div className="bg-zinc-900 flex flex-wrap justify-between mx-auto items-center pt-2 pb-1 md:pb-2">
                <div>
                    <Link href={"/"} className="text-2xl md:text-3xl text-zinc-200 font-bold uppercase tracking-widest inline-flex py-1 px-3">
                        Cayden
                    </Link>
                </div>
                <div className="w-auto">
                    <button onClick={() => setnavDropDownEnabled(!navDropDownEnabled)} type="button" className="inline-flex items-center md:hidden text-zinc-400 py-1 px-4">
                        <span className="sr-only">Open Menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div>
                        <div className="md:block hidden">
                            <ul className="inline-flex justify-between">
                                    <li key="about" className="transition-transform hover:-translate-y-1"><Link href={"/#about"} className="text-zinc-400 sm:text-xl rounded font-semibold hover:text-white mx-3 my-1">About</Link></li>
                                    <li key="projects" className="transition-transform hover:-translate-y-1"><Link href={"/projects"} className="text-zinc-400 sm:text-xl rounded font-semibold hover:text-white mx-3 my-1">Projects</Link></li>
                                    <li key="contact" className="transition-transform hover:-translate-y-1"><Link href={"/contact"} className="text-zinc-400 sm:text-xl rounded font-semibold hover:text-white mx-3 my-1">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            {navDropDownEnabled ? (
                <div className="md:hidden max-w-screen flex flex-col items-center">
                    <ul className="flex flex-col items-center">
                        <li key="about"><Link href={"/#about"} className="text-zinc-400 sm:text-xl rounded hover:text-white">About</Link></li>
                        <li key="projects"><Link href={"/projects"} className="text-zinc-400 sm:text-xl rounded hover:text-white">Projects</Link></li>
                        <li key="contact"><Link href={"/contact"} className="text-zinc-400 sm:text-xl rounded hover:text-white">Contact</Link></li>
                    </ul>
                </div>
            ):<></>}
        </nav>
        </>
    )
}

export default Navbar
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404: Not Found",
    description: "Page not found",
};

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center w-dvw">
            <h1 className="text-9xl font-extrabold tracking-widest mb-5">
                404 
            </h1>
            <h2 className="text-4xl mb-6">
                Page Not Found
            </h2>
            <Link href={"/"} className="text-xl bg-zinc-900 rounded-xl border-[2.5px] border-zinc-200 p-4 hover:bg-zinc-800">
                Go Home
            </Link>
            
        </div>
    )
}

export default NotFound
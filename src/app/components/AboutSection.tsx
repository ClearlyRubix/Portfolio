import AboutText from "./AboutText"

const AboutSection = () => {

    return (
        <div id="about" className="border-2 border-zinc-800 rounded m-4 p-4 h-full">
            <h2 className="font-bold text-sm text-zinc-100 uppercase tracking-widest pb-6">
                About Me
            </h2>
            <AboutText/>  
        </div>
    )
}

export default AboutSection
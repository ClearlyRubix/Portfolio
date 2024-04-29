import Link from "next/link"

const AboutText = () => {

    return (
        <>
        <div>
            <p className="mb-4">
                I&#39;m currently a student studying Electrical Engineering. In my spare time I also work on <Link className="font-bold underline" href="https://www.teamzeus.ca/">Team Zeus</Link> for the Motor Control and Telemetry teams. If electricity is involved, I&#39;m usually interested in learning more about it. I have experience in schematic and PCB design with <Link className="font-bold underline" href="https://www.altium.com/">Altium Designer</Link> as well as some experience in 3d CAD software such as <Link className="font-bold underline" href="https://www.solidworks.com/">SOLIDWORKS</Link>, <Link className="font-bold underline" href="https://www.autodesk.com/ca-en/products/fusion-360/overview">Fusion360</Link>, and <Link className="font-bold underline" href="https://www.onshape.com/en/">Onshape</Link>. I also have plentiful experience coding in <Link className="font-bold underline" href={"https://en.wikipedia.org/wiki/C_(programming_language)"}>C</Link>, <Link className="font-bold underline" href={"https://www.python.org/"}>Python</Link>, and <Link className="font-bold underline" href={"https://en.wikipedia.org/wiki/SQL"}>SQL</Link> as part of my degree and/or work as well as other languages and frameworks such as <Link className="font-bold underline" href={"https://www.java.com/en/"}>Java</Link> and <Link className="font-bold underline" href={"https://www.javascript.com/"}>JavaScript</Link> (<Link className="font-bold underline" href="https://nodejs.org/en">Node.js mainly</Link>) from working on my own projects.
            </p>
            {/* TODO: Add link to Sun Tracking Solar panel projcet*/}
            <p> 
                I&#39;m particularly interested in robotics and anything related to embedded systems, and I&#39;m always eager to learn more and take on new challenges. You can also see view some of <Link className="font-bold underline" href="/#featured-projects">my featured projects below.</Link> I&#39;m particularly proud of the <Link className="font-bold underline" href="/projects">Sun Tracking Solar Panel</Link> which was a part of my design class at university. As an engineer, I&#39;m a dedicated problem solver, a strong team player, and extremely detail-oriented. If you&#39;re interested in learning more about my work or discussing potential opportunities, please don&#39;t hesitate to <Link className="font-bold underline" href={"/contact"}>contact me.</Link>
            </p>
        </div>
        </>
    )
}

export default AboutText
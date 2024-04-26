import Image from "next/image"

const thumbHeight = 9*14
const thumbWidth = 16*14

const ProjectItem = () => {
    return(
        <div>
            <div className="bg-white rounded-lg h-52 md:h-72 group">
                <div className="overlay">
                    Text
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
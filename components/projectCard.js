import pcStyles from "../styles/projectCard.module.css"
import Image from "next/image"

const ProjectCard = ({ proj }) => {
    return (
        <div className={pcStyles.card}>
            <h3 className={pcStyles.projHeading}><a href={proj.url} target="_blank">{proj.name}</a></h3>
            <div className={pcStyles.imgContainer}>
                <Image
                    src={`/images/${proj.img}`}
                    layout="fill"
                    objectFit="cover"
                    className={pcStyles.projImage}
                />
            </div>
            <p>{proj.desc}</p>
            <div className={pcStyles.techParent}>
                {proj.tech.map((t) => (
                    <small className={pcStyles.tech}>{t}</small>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard
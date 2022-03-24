import ProjectCard from "../components/projectCard"
import utilStyles from '../styles/utils.module.css'
import Layout from "../components/layout"

export default function projects() {
    const projectInfo = [
        { name: "Citro Hacks", url: "https://citro.tech/citrohacks", img: "citropage.png", desc: "Official hackathon landing page of Citro Hacks", tech: ["HTML", "CSS", "Javascript", "Vercel"] },
        { name: "Personal Website v1", url: "https://riley.is-a.dev/", img: "personalv1.png", desc: "My old personal Website", tech: ["HTML", "CSS", "Javascript"] },
        { name: "U Cure Sadness Bot", url: "https://devpost.com/software/ucsb-u-cure-sadness-bot", img: "ucuresad.png", desc: "An astronomically-punny and dog-loving bot for your mental health", tech: ["Discord.py", "Various APIs", "Heroku"] },
        { name: "DAB", url: "https://devpost.com/software/dab", img: "dab.png", desc: "Easily monitor soil moisture levels and regulate plant watering", tech: ["Arduino", "C++", "Bluetooth", "MIT App Inventor"] },
        { name: "Ikkaku", url: "https://devpost.com/software/ikkaku", img: "ikkaku.png", desc: "Discord bot for Amador Valley High School's Ocean Conservancy Club", tech: ["Discord.js", "Heroku"] }
    ]

    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Personal Projects</h2>
            <p>I'm proud of those :)</p>
            <div className={utilStyles.projCardsContainer}>
                {projectInfo.map((project) => (
                    <ProjectCard proj={project} />
                ))}
            </div>

        </Layout>
    )
}
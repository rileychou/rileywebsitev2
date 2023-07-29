import ProjectCard from "../components/projectCard"
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from "../components/layout"
import Head from 'next/head'

export default function projects() {
    const projectInfo = [
        { name: "Blenders Simulator", url: "https://devpost.com/software/smoothie-simulator", img: "medium.png", desc: "To sooth your craving for our local Blenders.", tech: ["React.js", "JavaScript", "Glitch.com"]},
        { name: "Citro Hacks", url: "https://citro.tech/citrohacks", img: "citropage.png", desc: "Official hackathon landing page of Citro Hacks", tech: ["HTML", "CSS", "Javascript", "Vercel"] },
        { name: "Personal Website v1", url: "https://riley.is-a.dev/", img: "personalv1.png", desc: "My old personal Website", tech: ["HTML", "CSS", "Javascript"] },
        { name: "U Cure Sadness Bot", url: "https://devpost.com/software/ucsb-u-cure-sadness-bot", img: "ucuresad.png", desc: "An astronomically-punny and dog-loving bot for your mental health", tech: ["Discord.py", "Various APIs", "Heroku"] },
        { name: "DAB", url: "https://devpost.com/software/dab", img: "dab.png", desc: "Easily monitor soil moisture levels and regulate plant watering", tech: ["Arduino", "C++", "Bluetooth", "MIT App Inventor"] },
        { name: "Ikkaku", url: "https://devpost.com/software/ikkaku", img: "ikkaku.png", desc: "Discord bot for Amador Valley High School's Ocean Conservancy Club", tech: ["Discord.js", "Heroku"] }
    ]

    return (
        <Layout>
            <Head>
                <title>{siteTitle} | Projects</title>
            </Head>
            <h2 className={utilStyles.headingXl}>Personal Projects</h2>
            <p>
                On my website, you'll find a plethora of personal and group projects that have sharpened my experience as a software engineer.
            </p>
            <p>I'm proud of those :)</p>
            <div className={utilStyles.projCardsContainer}>
                {projectInfo.map((project) => (
                    <ProjectCard key={project.name} proj={project} />
                ))}
            </div>

        </Layout>
    )
}
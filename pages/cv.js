import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export default function cv() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} | Experience</title>
            </Head>
            <div className={utilStyles.locAndRes}>
                <h2>📍 Santa Barbara, CA</h2>
                <a className={utilStyles.resumebtn} href='/Riley_Resume.pdf'>Resume</a>
            </div>
            <h3 className={utilStyles.headingMd}>Experience</h3>
            <h4 className={utilStyles.headingSm}>Citro Tech</h4>
            <ul>
                <li>Developed and maintained Citro Tech's Website</li>
                <li>Oversaw tech + sponsorships for Citro Hacks, an all-inclusive virtual Hackathon with 830+ registrants worldwide</li>
                <li>Emcee + chat moderator for Citro Hacks workshops</li>
            </ul>
            <h4 className={utilStyles.headingSm}>Ace Coding Instructor</h4>
            <ul>
                <li>Taught web development and Java to local middle schoolers</li>
                <li>Worked with other instructors to develop a weekly curriculum</li>
            </ul>
            <h3 className={utilStyles.headingMd}>Skills</h3>
            <h4 className={utilStyles.headingSm}>Programming Languages / Frameworks / Tools</h4>
            <ul>
                <li>HTML/CSS/Javascript</li>
                <li>React/Next.js</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>Github</li>
            </ul>
            <h4 className={utilStyles.headingSm}>Soft Skills</h4>
            <ul>
                <li>Initiative</li>
                <li>Patience</li>
                <li>Problem Solving</li>
                <li>Teamwork</li>
            </ul>
            <h4 className={utilStyles.headingSm}>Languages</h4>
            <ul>
                <li>English - Native Proficiency</li>
                <li>Mandarin - Native Proficiency</li>
            </ul>
            <h3 className={utilStyles.headingMd}>Education</h3>
            <h4 className={utilStyles.headingSm}>University Of California, Santa Barbara - B.S. Computer Science</h4>
            <ul>
                <li>Expected Graduation: June 2025</li>
                <li>Activities and Societies: CodersSB, SBHacks, Climbing Team</li>
            </ul>
            <h4 className={utilStyles.headingSm}>Amador Valley High School</h4>
            <ul>
                <li>2017 - 2021</li>
                <li>Activities and Societies: Local Leaders of the 21st Century, Ocean Conservancy Club, Ace Coding Club, Varsity Swim</li>
            </ul>

        </Layout>
    );
}

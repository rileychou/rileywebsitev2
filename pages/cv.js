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
                <a className={utilStyles.resumebtn} href='/Riley_Chou_Resume.pdf' target="_blank">Resume</a>
            </div>
            <h3 className={utilStyles.headingMd}>Experience</h3>
            <h4 className={utilStyles.headingSm}>Web Development Engineering Intern</h4>
            <h5 className={utilStyles.headingXs}>We Vote | June 2023 - Present </h5>
            <ul>
                <li>Implement functions and performance improvements with React.js and JavaScript for digital voter guide to enhance user experience</li>
                <li>Develop software on an Agile/Scrum development team, tracking issues with Jira and perform version control with Git/Github.</li>
                <li>Deliver progress updates at weekly standups and adapt to changing specifications of features.</li>
            </ul>
            <h4 className={utilStyles.headingSm}>IT Engineering Intern</h4>
            <h5 className={utilStyles.headingXs}>Lanner Electronics | June 2023 - Present </h5>
            <ul>
                <li>Create a web application with Model View Control architecture using Django to process work orders for Lanner Electronics.</li>
                <li>Process data from SQLite database that is populated by the Django ModelForm class and display it on the frontend.</li>
                <li>Discuss features weekly to implement with the IT department and receive feedback.</li>
            </ul>
            <h4 className={utilStyles.headingSm}>Undergraduate Learning Assistant</h4>
            <h5 className={utilStyles.headingXs}>Computer Science Dept. of UCSB | September 2022 - March 2023 </h5>
            <ul>
                <li>Mentored 350+ students in introductory Python and Digital Logic Design courses.</li>
                <li>Scheduled weekly office hours to provide debugging sessions, homework help, and content clarification.</li>
                <li>Proctored weekly quizzes and graded assignments and projects using Gradescope.</li>
            </ul>
            <h4 className={utilStyles.headingSm}>Director of Technology</h4>
            <h5 className={utilStyles.headingXs}>Citro Tech | November 2020 - September 2021 </h5>
            <ul>
                <li>Built and maintained Citro Tech's responsive website with HTML, CSS, and JavaScript alongside one other member.</li>
                <li>Gathered 830+ signups and raised over $3000 from 24 sponsors for Citro Hacks, an all-inclusive high school virtual hackathon.</li>
                <li>Co-hosted 18 Citro Hacks workshops and events over the course of a weekend.</li>
            </ul>
            <h4 className={utilStyles.headingSm}>Ace Coding Instructor</h4>
            <ul>
                <li>Taught web development and Java to local middle schoolers</li>
                <li>Worked with other instructors to develop a weekly curriculum</li>
            </ul>

            <h3 className={utilStyles.headingMd}>Skills</h3>
            <div className={utilStyles.skillsContainer}>
                <div className={utilStyles.skillCard}>
                    <h4 className={utilStyles.headingSm}>Programming Languages</h4>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>C++/C#</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className={utilStyles.skillCard}>
                    <h4 className={utilStyles.headingSm}>Frameworks & Dev Tools</h4>
                    <ul>
                        <li>React/Next.js</li>
                        <li>Pycharm</li>
                        <li>VSCode</li>
                        <li>Git/Github</li>
                        <li>Linux command line</li>
                    </ul>
                </div>
                <div className={utilStyles.skillCard}>
                    <h4 className={utilStyles.headingSm}>Interpersonal Skills</h4>
                    <ul>
                        <li>Initiative</li>
                        <li>Patience</li>
                        <li>Problem Solving</li>
                        <li>Teamwork</li>
                        <li>Leadership</li>
                    </ul>
                </div>
            </div>

            <h3 className={utilStyles.headingMd}>Education</h3>
            <h4 className={utilStyles.headingSm}>University Of California, Santa Barbara - B.S. Computer Science</h4>
            <ul>
                <li>Expected Graduation: June 2025</li>
                <li>Activities and Societies: CodersSB, SBHacks, Climbing Team, TASA</li>
            </ul>

        </Layout>
    );
}

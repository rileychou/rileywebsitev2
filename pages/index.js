import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h3>📍 Santa Barbara, CA</h3>
        <p>
          Hello, I'm Riley, an inquisitive and diligent Computer Science undergraduate at the University of California, Santa Barbara.
          I love building things that make an impact.
        </p>
        <p>
          Last summer, I was a web development intern at We Vote, working with a small Agile team of engineers to build a digital voter guide. 
          I implemented fast, clean, and modular React.js code to improve user experience.
        </p>
        <p>
          When I'm not programming, you can find me climbing or lifting at the gym, jamming on the guitar, or hiking with friends.
        </p>
        <p>I am actively seeking internship/part-time opportunities in software engineering or related fields. If you have an opportunity, I'd love to connect.</p>
      </section>

    </Layout>
  )
}
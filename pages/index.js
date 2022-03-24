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
        <p>Welcome to my website! I'm an inquisitive and diligent Computer Science undergraduate at UCSB.</p>
        <p>
          Since I started programming, 
          I've been enhancing my skills by building things (mostly frontend) when I feel like it.
        </p>
        <p>
          Besides coding, my three personality traits are: boulder bro, boba connoisseur, and full-time dark mode enthusiast.
        </p>

      </section>

    </Layout>
  )
}
import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Blog</title>
      </Head>
      <section className={`${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingXl}>My Blog</h2>
        <p>Not much going on here, just a collection of random reflections and ruminations.</p>
        <ul className={`${utilStyles.list} ${utilStyles.headingMd} `}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} legacyBehavior>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
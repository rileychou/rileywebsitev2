import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import useSWR from 'swr'

const name = 'Riley Chou'
export const siteTitle = 'Riley Chou'

//useEffect(() => { document.querySelector("body").classList.add("") });


export default function Layout({ children, home }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <div className={home ? styles.bgHome : null}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Riley Chou is a computer science student at UCSB."
          />
          <meta name="theme-color" content="#35cce7"></meta>
          <meta name="author" content="Riley Chou"></meta>
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content="Riley Chou's personal website." />
          <meta property="twitter:card" content="summary_large_image" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />


        </Head>
        <div className={styles.layoutContainer}>
          <header className={styles.header}>
            {home ? (
              <>
                <div className={styles.navbar}>
                  <h1 className={utilStyles.heading2Xl}>{name}</h1>
                  <div>
                    <Link href="/blog" className={utilStyles.headingMd}>Blog</Link>
                    <Link href="/cv" className={utilStyles.headingMd}>Experience</Link>
                    <Link href="/projects" className={utilStyles.headingMd}>Projects</Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.navbar}>
                  <h1 className={utilStyles.heading2Xl}>
                    <Link href="/" className={utilStyles.colorInherit}>{name}</Link>
                  </h1>
                  <div>
                    <Link href="/blog" className={utilStyles.headingMd}>Blog</Link>
                    <Link href="/cv" className={utilStyles.headingMd}>Experience</Link>
                    <Link href="/projects" className={utilStyles.headingMd}>Projects</Link>
                  </div>
                </div>
              </>
            )}
          </header>
          <main>{children}</main>
          <div>
            <p> </p>
          </div>
          {/*!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )*/}
          <footer className={styles.footer}>
            <ul className={`${utilStyles.list} ${styles.socialsContainer}`}>
              <li className={styles.socialsList}><SocialIcon url="https://github.com/rileychou" bgColor="#00000000" fgColor='#fff' style={{ height: 60, width: 60 }} /></li>
              <li className={styles.socialsList}><SocialIcon url="https://linkedin.com/in/rileychou" bgColor="#00000000" fgColor='#fff' style={{ height: 60, width: 60 }} /></li>
              <li className={styles.socialsList}><SocialIcon url="mailto:rileychou@ucsb.edu" bgColor="#00000000" fgColor='#fff' style={{ height: 60, width: 60 }} /></li>
            </ul>
            <small className={styles.smallBlock}><SocialIcon network="spotify" bgColor="#00000000" fgColor='#fff' style={{ height: 36, width: 36 }}/>{data?.isPlaying ? 'Now listening to' : 'Last listened to'} {data?.title ? data.title : 'null'} by {data?.artists ? data.artists[0].name : 'null'}.</small>
            <small>© Riley Chou 2023. Built with <a href='https://nextjs.org/learn/basics/create-nextjs-app' target="_blank">Next.js.</a></small>
          </footer>
        </div> 
      </div>
    </div>
  );
}
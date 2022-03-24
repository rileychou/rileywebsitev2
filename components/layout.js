import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Riley Chou'
export const siteTitle = 'Riley Chou'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Riley Chou's personal website."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />


      </Head>
      <div className={styles.layoutContainer}>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={128}
                width={128}
                layout="fixed"
                alt={name}
              />
              <div className={styles.navbar}>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <div>
                  <Link href="/blog"><a className={utilStyles.headingMd}>Blog</a></Link>
                  <Link href="/cv"><a className={utilStyles.headingMd}>Experience</a></Link>
                  <Link href="/projects"><a className={utilStyles.headingMd}>Projects</a></Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.navbar}>
                <h1 className={utilStyles.heading2Xl}>
                  <Link href="/"><a className={utilStyles.colorInherit}>{name}</a></Link>
                </h1>
                <div>
                  <Link href="/blog"><a className={utilStyles.headingMd}>Blog</a></Link>
                  <Link href="/cv"><a className={utilStyles.headingMd}>Experience</a></Link>
                  <Link href="/projects"><a className={utilStyles.headingMd}>Projects</a></Link>
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
            <li className={styles.socialsList}><a href="https://github.com/rileychou">Github</a></li>
            <li className={styles.socialsList}><a href="https://www.linkedin.com/in/rileychou/" target="_blank">LinkedIn</a></li>
            <li className={styles.socialsList}><a href="mailto:chou409@ucsb.edu" target="_blank">Mail</a></li>
          </ul>
          <small>© Riley Chou 2022. Built with <a href='https://nextjs.org/learn/basics/create-nextjs-app' target="_blank">Next.js.</a></small>
        </footer>
      </div>

    </div>
  )
}
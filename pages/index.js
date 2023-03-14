import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img from '../public/github.png'
import htmlpng from '../public/htmlpng.png'
import csspng from '../public/csspng.png'
import jspng from '../public/jspng.png'
import reactpng from '../public/reactpng.png'
import nextjspng from '../public/nextjspng.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Fung | Front-End Developer</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.topbar}>
          <div className={styles.topbarLeft}>Alex.dev</div>
          <div className={styles.topbarRight}>
            <div>Home</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyTop}>
            <div className={styles.bodyTopLeft}>
              <h1 className={styles.title}>Front-End Developer 👓</h1>
              <p className={styles.paragraph}>Hi 👋 My name is Alex Fung. I am a fresh graduate learning web development, started with HTML, CSS, and javascript.</p>
            </div>
            <ul className={styles.bodyTopRight}>
              <li>🌍  Based in Hong Kong</li>
              <li className={styles.git}>🖥️  Check my Github at <a href='https://github.com/fung673?tab=repositories'><Image src={img} className={styles.logo} alt='github' /></a></li>
              <li>{`✉️  You can contact me at`} <a href='alexfung1234@gmail.com' className={styles.email}>here</a></li>
              <li>{`🧠  I'm learning backend knowledge`}</li>
              <li>{`🤝  I'm open to collaborating on Interesting Project`}</li>
            </ul>
          </div>
          <div className={styles.bodyBottom}>
            <div className={styles.techStack}>Tech Stack</div>
            <div className={styles.techStackLogoList}>
              <Image src={htmlpng} className={styles.techStackLogo} alt='html' title="HTML" />
              <Image src={csspng} className={styles.techStackLogo} alt='CSS' title="CSS" />
              <Image src={jspng} className={styles.techStackLogo} alt='Javscript' title="Javascript" />
              <Image src={reactpng} className={styles.techStackLogo} alt='ReactJS' title="ReactJS" />
              <Image src={nextjspng} className={styles.techStackLogo} alt='NextJS' title="NextJS" />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

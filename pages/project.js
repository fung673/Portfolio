import styles from '../styles/Project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bookshopimg from '../public/bookshoppng.png'
import nextjspng from '../public/nextjspng.png'
import todolist from '../public/todolist.png'
import weatherpng from '../public/weather.png'
import reactpng from '../public/reactpng.png'
import { useEffect, useState } from 'react'

export default function Project() {
 return <div className={styles.main}>
  <div className={styles.topbar}>
   <div className={styles.topbarLeft}>Alex.dev</div>
   <div className={styles.topbarRight}>
    <Link href='/'>Home</Link>
    <a>Projects</a>
    <a href='mailto:alexfung1234@gmail.com'>Contact</a>
   </div>
  </div>
  <div className={styles.body}>
   <h3 className={styles.projectpageTitle}>{`I made these websites 👇`}</h3>
   <div className={styles.projects}>
    <div className={styles.project}>
     <a href='https://nextjs-bookshop.vercel.app/ ' target="_blank" className={styles.projectDisplay}><Image src={bookshopimg} alt='bookshop' className={styles.projectpng} /></a>
     <div className={styles.projectText}>
      <div className={styles.Topic}>{`Online BookShop📖`}</div>
      <p className={styles.paragraph}>A Online Bookshop website that allows users to buy their favourite book online.
       The website includes login system, add to cart and checkout page.
      </p>
      <Image src={nextjspng} alt='NextJs' className={styles.techStackLogo} title="NextJS" />
     </div>
    </div>



    <div className={styles.project}>     <a href='https://nextjs-todolist-seven.vercel.app/ ' target="_blank" className={styles.projectDisplay}>
     <Image src={todolist} alt='todolist' className={styles.projectpng} /></a>
     <div className={styles.projectText}>
      <div className={styles.Topic}>{`TodoList 🖋️`}</div>
      <p className={styles.paragraph}>A TodoList to Organize Your Work & Life which Provides simple function such as Add Task and Done.
      </p>
      <Image src={nextjspng} alt='NextJs' className={styles.techStackLogo} title="NextJS" />
     </div>

    </div>



    <div className={styles.project}>
     <a href='https://fung673.github.io/weatherapp/' target="_blank" className={styles.projectDisplay}><Image src={weatherpng} alt='todolist' className={styles.projectpng} /></a>
     <div className={styles.projectText}>
      <div className={styles.Topic}>{`WeatherApp ☔`}</div>
      <p className={styles.paragraph}>A Website for Users to forecast the weather in following days. API fetch from The Hong Kong Observatory.
      </p>
      <Image src={reactpng} alt='NextJs' className={styles.techStackLogo} title="NextJS" />
     </div>
    </div>
   </div>
  </div>
 </div>
}
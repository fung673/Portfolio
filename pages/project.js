import styles from '../styles/Project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bookshopimg from '../public/bookshoppng.png'
import nextjspng from '../public/nextjspng.png'
import todolist from '../public/todolist.png'
import weatherpng from '../public/weather.png'
import reactpng from '../public/reactpng.png'

export default function Project() {
 return <div className={styles.main}>
  <div className={styles.topbar}>
   <div className={styles.topbarLeft}>Alex.dev</div>
   <div className={styles.topbarRight}>
    <Link href='/'>Home</Link>
    <a>Projects</a>
    <a>Contact</a>
   </div>
  </div>
  <div className={styles.body}>
   <h3>{`I made these websites 👇`}</h3>
   <div className={styles.projects}>
    <div className={styles.project}>
     <Image src={bookshopimg} alt='bookshop' className={styles.projectpng} width={500} />
     <div className={styles.projectText}>
      <div className={styles.Topic}>{`Online BookShop📖`}</div>
      <p className={styles.paragraph}>A Online Bookshop website that allows users to buy their favourite book online.
       The website includes login system, add to cart and checkout page.
      </p>
      <Image src={nextjspng} alt='NextJs' className={styles.techStackLogo} title="NextJS" />
     </div>
    </div>
    <div className={styles.project}>
     <div className={styles.projectText}>
      <div className={styles.Topic}>{`TodoList 🖋️`}</div>
      <p className={styles.paragraph}>A TodoList to Organize Your Work & Life which Provides simple function such as Add Task and Done.
      </p>
      <Image src={nextjspng} alt='NextJs' className={styles.techStackLogo} title="NextJS" />
     </div>
     <Image src={todolist} alt='todolist' width={500} height='fill' />
    </div>
    <div className={styles.project}>
     <Image src={weatherpng} alt='todolist' width={500} height='fill' />
     <div className={styles.projectText}>
      <div className={styles.Topic}>{`WeatherApp 🖋️`}</div>
      <p className={styles.paragraph}>A Website for Users to forecast the weather in following days. API fetch from The Hong Kong Observatory.
      </p>
      <Image src={reactpng} alt='NextJs' className={styles.techStackLogo} title="NextJS" />
     </div>
    </div>
   </div>
  </div>
 </div>
}
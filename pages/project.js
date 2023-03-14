import styles from '../styles/Home.module.css'
import Link from 'next/link'
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
 </div>
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>WebDev with react</title>
      <meta name="keywords" content="web development, programming"/>
    </Head>
     <h1>I am <span>Riya Gupta.</span></h1>
     <p>Frontend Web Developer</p>
    </div>
  )
}

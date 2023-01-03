import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import NavDropdown from '../components/NavDropdown/NavDropdown'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import TimeLine from '../components/TimeLine/TimeLine'

const inter = Inter({ subsets: ['latin'] })

export default function Home({children}) {
  return (
    <>
      <Head>
        <title>NEXT Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <Hero />
        <NavDropdown />
        <Projects />
        <Technologies />
        <TimeLine/>
        <Footer />
        <main className={styles.main}>
          {children}
        </main>
        
      </div>
    </>
  )
}

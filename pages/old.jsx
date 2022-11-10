import Head from 'next/head'
import NavBar from '../components/NavBar'
import SocialMedias from '../components/SocialMedias'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Formation from '../components/Formation'
import Languages from '../components/Languages'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  function aboutMe() {
    return (
      <div className={styles.container}>
        <p className={styles.font}>
          {"Hello my name is Lucas, I'm a "}<strong>Game Developer</strong> and <strong>Backend Developer</strong>.
        </p>
        <p className={styles.font}>
          {"I already have 3 years of experience in the market, I've worked with embedded systems, mobile, web and games that are currently my focus, I use the Unity engine to make games, I'm always learning to use new tools to improve my skills as a developer."}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Lucas Portfolio</title>
        <meta name="description" content="Meu portfólio de jogos" />
        <link rel="icon" href="/icons/control.png" />
      </Head>

      <NavBar />
      <SocialMedias />

      <div className={styles.container}>

        <div className={styles.image}>
          <h1 className={styles.h1}>Lucas Lima</h1>
          <h2 className={styles.h2}>Game Development and Backend</h2>
          <div style={{
            marginTop: '40px',
            padding: '7px 14px'
          }}>
            <Button
              href="https://drive.google.com/file/d/1VlBC69YxptEC9MxCYa9_MrSPH8FqbvDb/view?usp=sharing"
              target="_black"
              primary={true} >
              Curriculum (PDF)
            </Button>
          </div>
        </div>

        <div id="about" className={styles.part}>

          <div className={styles.space}>
            <h1>About Me</h1>
          </div>

          {aboutMe()}

        </div>

        <div id="portifolio" className={styles.part}>
          <div className={styles.space}>
            <h1>Portfolio</h1>
          </div>
          <Projects />
          <div className={styles.space}>
            <h1>Certificates</h1>
          </div>
          <Certificates />
        </div>

        <div id="formation" className={styles.part}>
          <div className={styles.space}>
            <h1>Formation</h1>
          </div>
          <Formation />
          <div id="skills" className={styles.space}>
            <h1>Languages and Tools</h1>
          </div>
          <Languages />

        </div>

        <div className={styles.baseboard}>
          <span className={styles.baseboardSpan}>Copyright ©2022 All rights reserved | This website was developed by Lucas Lima</span>
        </div>

      </div>
    </div>
  )
}

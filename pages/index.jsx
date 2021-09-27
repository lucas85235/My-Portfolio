import MenuBar from '../components/MenuBar'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Formation from '../components/Formation'
import Languages from '../components/Languages'
import BottonButton from '../components/BottonButton'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  function aboutMe() {
    return (
      <div className={styles.container}>
        <p className={styles.font}>
          Olá me chamo Lucas, sou programador com foco no <strong>Backend</strong> mas também consigo lidar muito bem com Frontend.
        </p>
        <p className={styles.font}>
          Tenho formação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e
          atualmente venho trabalhando com o desenvolvimento de jogos.
        </p>
      </div>
    )
  }

  function contato() {
    return (
      <div className={styles.container}>
        <a className={styles.span} href="mailto:lucas85235@gmail.com">lucas85235@gmail.com</a>
        <a className={styles.span} href="tel:+55-92-99482-2837">(92) 99482-2837</a>
      </div>
    )
  }

  return (
    <div>
      <MenuBar id="init" />
      <BottonButton />
      <div className={styles.container}>

        <div className={styles.image}>
          <h1>Lucas Lima</h1>
          <h2>Desenvolvedor de Software - Backend</h2>
          <Link href="https://drive.google.com/file/d/1VlBC69YxptEC9MxCYa9_MrSPH8FqbvDb/view?usp=sharing">
            <a target="_blank">
              <button className={styles.button}>Ver Currículo (PDF)</button>
            </a>
          </Link>
        </div>

        <div id="about" className={styles.part}>

          <div className={styles.space}>
            <h1>Sobre Min</h1>
          </div>

          {aboutMe()}

        </div>

        <div id="portifolio" className={styles.part}>
          <div className={styles.space}>
            <h1>Portfólio</h1>
          </div>
          <Projects />
          <div className={styles.space}>
            <h1>Cetificados</h1>
          </div>
          <Certificates />
        </div>

        <div id="formation" className={styles.part}>
          <div className={styles.space}>
            <h1>Formação</h1>
          </div>
          <Formation />
          <div id="skills" className={styles.space}>
            <h1>Linguagens e Ferramentas</h1>
          </div>
          <Languages />

        </div>

        <div id="contact" className={styles.part}>
          <div className={styles.space}>
            <h1>Contato</h1>
          </div>
          {contato()}
        </div>

        <div className={styles.baseboard}>
          <span>Copyright ©2020 All rights reserved | This website was developed by Lucas Lima</span>
        </div>

      </div>
    </div>
  )
}

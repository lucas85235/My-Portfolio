import MenuBar from '../components/MenuBar'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Formation from '../components/Formation'
import Languages from '../components/Languages'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {

  function aboutMe() {
    return (
      <>
        <p className={styles.font}>
          Olá me chamo Lucas, sou programador com foco no <strong>Backend</strong> mas também consigo lidar muito bem com Frontend.
        </p>
        <p className={styles.font}>
          Tenho formação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e
          atualmente trabalho com desenvolvimento de jogos.
        </p>
        <div className={styles.perfilDiv}>
          <Image className={styles.perfilImage} src="/photo.jpg" alt="Foto de perfil" width="500" height="500" />
        </div>
      </>
    )
  }

  function aboutSite() {
    return (
      <>
        <p className={styles.font}>
          Esse site é a primeira versão que fiz para o meu <strong>portfólio.</strong>
        </p>
        <p className={styles.font}>
          Foi feito com <strong>Next.js</strong>, ainda estou aprendendo a usar as ferramente do
          next pois faz somente uma semana que comecei a estudar desenvolvimento web em geral mesmo assim já comecei a
          colocar esses conhecimentos em pratica.
        </p>
      </>
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
      <MenuBar />
      <div className={styles.container}>

        <div className={styles.image}>
          <h1>Lucas Lima</h1>
          <h2>Software Developer - Backend</h2>
          <button className={styles.button}>Ver Curriculo (PDF)</button>
        </div>

        <div id="about" className={styles.part}>
          <div className={styles.space}>
            <h1>About Me</h1>
          </div>

          <div className={styles.container}>
            {aboutMe()}
          </div>

          <div className={styles.space}>
            <h1>Sobre Este Site</h1>
          </div>
          <div className={styles.container}>
            {aboutSite()}
          </div>
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

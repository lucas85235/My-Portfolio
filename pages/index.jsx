import MenuBar from '../components/MenuBar'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import RenderLink from '../components/RenderLink'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  function formacao() {
    return (
      <div className={styles.container}>
        <div className={styles.formation}>
          <h2>Analise e Desenvolvimento de Sistemas</h2>
          <div className={styles.formationDiv}>
            <Link href="https://estacio.br/">
              <a target="_blank">
                <h3 className={styles.formationCursor}>Estacio de Sá</h3>
              </a>
            </Link>  
            <h3>2018-2020</h3>            
          </div>
        </div>
        <div className={styles.formation}>
          <h2>Estagiário de Desenvolvimento</h2>
          <div className={styles.formationDiv}>
            <Link href="https://certiamazonia.org.br/">
              <a target="_blank">
                <h3 className={styles.formationCursor}>Fundação CERTI</h3>
              </a>
            </Link>  
            <h3>2019-2020</h3>
          </div>
        </div>
        <div className={styles.formation}>
          <h2>Analista de Desenvolvimento de Software</h2>
          <div className={styles.formationDiv}>
            <Link href="https://certiamazonia.org.br/">
              <a target="_blank">
                <h3 className={styles.formationCursor}>Fundação CERTI</h3>
              </a>
            </Link>
            <h3>2020-2021</h3>
          </div>
        </div>
      </div>
    )
  }

  function languages() {
    return (
      <div className={styles.container2}>
        <div className={styles.languages}>
          <h2>HTML</h2>
          <div className={styles.languagesDiv}>
            <h3>Para construção da estrutura das páginas</h3>            
          </div>
        </div>
        <div className={styles.languages}>
          <h2>HTML</h2>
          <div className={styles.languagesDiv}>
            <h3>Para construção da estrutura das páginas</h3>            
          </div>
        </div>
        <div className={styles.languages}>
          <h2>HTML</h2>
          <div className={styles.languagesDiv}>
            <h3>Para construção da estrutura das páginas</h3>            
          </div>
        </div>
        <div className={styles.languages}>
          <h2>HTML</h2>
          <div className={styles.languagesDiv}>
            <h3>Para construção da estrutura das páginas</h3>            
          </div>
        </div>
        <div className={styles.languages}>
          <h2>HTML</h2>
          <div className={styles.languagesDiv}>
            <h3>Para construção da estrutura das páginas</h3>            
          </div>
        </div>
        <div className={styles.languages}>
          <h2>HTML</h2>
          <div className={styles.languagesDiv}>
            <h3>Para construção da estrutura das páginas</h3>            
          </div>
        </div>
        <div className={styles.languages}>
          <h2>HTML</h2>
          <div className={styles.languagesDiv}>
            <h3>Para construção da estrutura das páginas</h3>            
          </div>
        </div>
        <div className={styles.languages}>
          <h2>HTML</h2>
          <div className={styles.languagesDiv}>
            <h3>Para construção da estrutura das páginas</h3>            
          </div>
        </div>
      </div>
    )
  }

  function contato() {
    return (
      <div className={styles.container}>
        <span className={styles.span}>lucas85235@gmail.com</span>
        <span className={styles.span}>(92) 99482-2837</span>
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
            <p className={styles.font}>
              Olá me chamo Lucas, sou programador com foco no <strong>Backennd</strong> mas tambem consigo lidar muito bem com Frontend.
              Tenho formação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e 
              atualmente trabalho com desenvolvimento de jogos.
            </p>
            <div className={styles.perfilDiv}>
              <Image className={styles.perfilImage} src="/photo.jpg" alt="Foto de perfil" width="500" height="500" />
            </div>
          </div>

          <div className={styles.space}>
            <h1>Sobre Este Site</h1>
          </div>
          <div className={styles.container}>
            <p className={styles.font}>
              Esse site é uma prova disso, ele é a primeira versão que fiz para o meu <strong>portfólio.</strong>
            </p>
            <p className={styles.font}>
              Foi feito com <strong>Next.js</strong>, ainda estou aprendendo a usar as ferramente do 
              next pois faz somente uma semana que começei a estudar sobre mesmo assim já começei a 
              colocar esses conhecimentos em pratica.
            </p>
          </div>
        </div>

        <div id="portifolio" className={styles.part}>
          <div className={styles.space}>
            <h1>Portfólio</h1>
          </div>
          <h2>Meus Projetos e Jogos</h2>
          <Projects/>
          <div className={styles.space}>
           <h1>Cetificados</h1>
          </div>
          <Certificates/>
        </div>

        <div id="formation" className={styles.part}>
          <div className={styles.space}>
            <h1>Formação</h1>
          </div>
          {formacao()}
          <div className={styles.space}>
            <h1>Linguagens e Ferramentas</h1>
          </div>
          {languages()}

        </div>

        <div id="contact" className={styles.part}>
          <div className={styles.space}>
            <h1>Contato</h1>
          </div>
          {contato()}
        </div>

        <div className={styles.baseboard}>
          <h1>Redes Sociais</h1>
        </div>

      </div>
    </div>
  )
}

import MenuBar from '../components/MenuBar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {

  function certificados() {
    return (
      <div className={styles.imgContainer}>

        <a rel="noreferrer" href="/Certifications/c++.jpg">
          <Image className={styles.imgSmall} src="/Certifications/c++.jpg" alt="Certicado" width="420" height="300" />
        </a>

        <a rel="noreferrer" href="/Certifications/solidity.jpg">
          <Image className={styles.imgSmall} src="/Certifications/solidity.jpg" alt="Certicado" width="420" height="300" />
        </a>

        <a rel="noreferrer" href="/Certifications/unity.jpg">
          <Image className={styles.imgSmall} src="/Certifications/unity.jpg" alt="Certicado" width="420" height="300" />
        </a>

        <a rel="noreferrer" href="/Certifications/gamejam.png">
          <Image className={styles.imgSmall} src="/Certifications/gamejam.png" alt="Certicado" width="420" height="300" />
        </a>

      </div>
    )
  }

  function projetos() {
    return (
      <div className={styles.imgContainer}>
        
        <a rel="noreferrer" href="https://darksardinha.itch.io/nao-pebol">
          <Image className={styles.imgProject} src="/Projects/NacaoPebol.png" alt="Projeto" width="480" height="270" />
        </a>

        <a rel="noreferrer" href="https://www.youtube.com/watch?v=R1DbT8NtkFQ">
          <Image className={styles.imgProject} src="/Projects/LendasDoPebol.png" alt="Projeto" width="480" height="270" />
        </a>

        <a rel="noreferrer" href="https://store.steampowered.com/app/1482050/Space_Ship_Infinity/">
          <Image className={styles.imgProject} src="/Projects/SpaceShip.png" alt="Projeto" width="480" height="270" />
        </a>

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
          <h1>About Me</h1>

          <div className={styles.container}>
            <p className={styles.font}>
              Olá me chamo Lucas, sou programador com foco no <strong>Backennd</strong> mas tambem consigo lidar muito bem com Frontend.
              Tenho formação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e 
              atualmente trabalho com desenvolvimento de jogos.
            </p>
            <Image className={styles.perfil} src="/photo.jpg" alt="Foto de perfil" width="500" height="500" />
          </div>

          <h1>Sobre Este Site</h1>
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
          <h1>Portfólio</h1>
          <h2>Projetos</h2>
          {projetos()}
          <div className={styles.space}></div>
          <h2>Cetificados</h2>
          {certificados()}
        </div>

        <div id="formation" className={styles.part}>
          <h1>Formação</h1>
        </div>

        <div id="contact" className={styles.part}>
          <h1>Contato</h1>
        </div>

      </div>
    </div>
  )
}

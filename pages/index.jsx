import MenuBar from '../components/MenuBar'
import styles from '../styles/Home.module.css'

export default function Home() {

  function certificados() {
    return (
      <div className={styles.imgContainer}>

        <a target="_blank" href="Certifications/c++.jpg">
          <img className={styles.imgSmall} src="Certifications/c++.jpg" alt="Certicado" />
        </a>

        <a target="_blank" href="Certifications/solidity.jpg">
          <img className={styles.imgSmall} src="Certifications/solidity.jpg" alt="Certicado" />
        </a>

        <a target="_blank" href="Certifications/unity.jpg">
          <img className={styles.imgSmall} src="Certifications/unity.jpg" alt="Certicado" />
        </a>

        <a target="_blank" href="Certifications/gamejam.png">
          <img className={styles.imgSmall} src="Certifications/gamejam.png" alt="Certicado" />
        </a>

      </div>
    )
  }

  function projetos() {
    return (
      <div className={styles.imgContainer}>
        
        <a target="_blank" href="https://darksardinha.itch.io/nao-pebol">
          <img className={styles.imgProject} src="Projects/NacaoPebol.png" alt="Projeto" />
        </a>

        <a target="_blank" href="https://www.youtube.com/watch?v=R1DbT8NtkFQ">
          <img className={styles.imgProject} src="Projects/LendasDoPebol.png" alt="Projeto" />
        </a>

        <a target="_blank" href="https://store.steampowered.com/app/1482050/Space_Ship_Infinity/">
          <img className={styles.imgProject} src="Projects/SpaceShip.png" alt="Projeto" />
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
            <img className={styles.perfil} src="photo.jpg" alt="" />
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

import RenderLink from './RenderLink'
import styles from '../styles/Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.imgContainer}>

            <span className={styles.font}>Meus Projetos e Jogos</span>

            <div className={styles.imgContainer}>

                <RenderLink
                    render={styles.imgProject}
                    link="https://darksardinha.itch.io/nao-pebol"
                    image="/Projects/NacaoPebol.png"
                    width="480" height="270"
                />

                <RenderLink
                    render={styles.imgProject}
                    link="https://www.youtube.com/watch?v=R1DbT8NtkFQ"
                    image="/Projects/LendasDoPebol.png"
                    width="480" height="270"
                />

                <RenderLink
                    render={styles.imgProject}
                    link="https://store.steampowered.com/app/1482050/Space_Ship_Infinity/"
                    image="/Projects/SpaceShip.png"
                    width="480" height="270"
                />

                <RenderLink
                    render={styles.imgProject}
                    link="https://darksardinha.itch.io/warbots"
                    image="/Projects/Warbots.png"
                    width="480" height="270"
                />

            </div>

        </div>

    )
}
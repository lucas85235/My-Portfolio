import Image from 'next/image';

const mainGame =
{
    title: "Warbots",
    description: "Warbots is a blockchain game that uses RPG and card game mechanics to ensure that the player with the best strategy wins! Warbots will feature a Roguelike-style singleplayer mode, inspired by the game Slay the Spire. In addition, it will also have an online multiplayer mode, which will make the game more competitive. Join these mighty robots in fast paced and exciting battles!",
    link: "https://playwarbots.com/",
    image: "/Projects/WarbotsLogo.png"
}

const otherGames = [
    {
        title: "Nação Pebol",
        description: "Project developed in just one weekend, during the Game Jam+ 2020 event. One of the challenges proposed to the participants was to create a game to engage the fans of the Flamengo soccer team. With that in mind, a simplified soccer game was developed, in two dimensions, using the club's brand and athletes.",
        link: "https://darksardinha.itch.io/nao-pebol",
        image: "/Projects/NacaoPebol.png"
    },
    {
        title: "Lendas do Pebol",
        description: "This project was awarded the Feliciano Lana award, promoted by the Secretary of Culture and Creative Economy with resources made available by the Audir Blanc Law at the end of 2020. It is a one-on-one football game with characters from the Amazon region. Eight folkloric characters are the protagonists of this story, such as Boto, Curupira and Uirapuru. I work as a Programmer and Producer.",
        link: "https://store.steampowered.com/app/2238340/Lendas_do_Pebol_Mythic_Football/",
        image: "/Projects/LendasDoPebol.png"
    },
    {
        title: `Eat'em Up!`,
        description: "Eat'em Up is still in pre-production. The concept was presented for the  Magalu call for new games, promoted by the Big Festival 2022. Out of 114 proposals, Eat’em Up was one of the 8 chosen to move on to the next stage, with the possibility of receiving investment from Magazine Luiza.",
        image: "/Projects/EatAndUp.png",
    },
    {
        title: "Arcade Versus",
        description: "Arcadeversus is a social online game where different players can interact with each other and compete in experiences reminiscent of arcade classics! In the gamejam+ 2022 version, we will have 3 games inspired by the classics Asteroids, Space Invaders and Pac-man! The game will have continuous development, adding new experiences with each update!",
        link: "https://darksardinha.itch.io/arcadeversus",
        image: "/Projects/Arcade.png",
    },
    {
        title: 'Space Ship Infinity',
        description: "Returning to the classic pixel art spaceship game style. Survive in space to the maximum of enemy ships and anything else that can destroy your ship, get all the advantages and upgrades available to get your best score.",
        link: "https://store.steampowered.com/app/1482050/Space_Ship_Infinity/",
        image: "/Projects/SpaceShip.png",
    },
    {
        title: "Basketball.io 3D",
        description: "Make as many baskets as possible in the shortest possible time, while competing with other players for the lead!",
        link: "https://play.google.com/store/apps/details?id=com.netuno.basketballmobile",
        image: "/Projects/Basketball.webp",
    },
    {
        title: "Fun Ski 3D",
        description: "Travel the scenery on your ski, jumping ramps and performing incredible tricks while still in the air, but be careful not to fall. I worked with programming mechanics, ui and visual effects.",
        link: "https://play.google.com/store/apps/details?id=io.netuno.ski",
        image: "/Projects/Ski.webp",
    },
    {
        title: "Balloon Runner",
        description: "Pop balloons as you run across the stage dodging dangerous obstacles, collect rubies along the way and finally play darts to multiply your winnings!",
        link: "https://play.google.com/store/apps/details?id=io.netuno.balloonrunner",
        image: "/Projects/Ballon.webp",
    },
]

function Projects({ styles }) {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Projects</h2>
                    <div>
                        <div className={styles.item}>
                            <div className={styles.imageDiv}>
                                <a href={mainGame.link} target="_blank" rel="noreferrer">
                                    <Image className={styles.image} src={mainGame.image} height={400} width={800} objectFit='fill' alt='' />
                                </a>
                            </div>

                            <h3 className={styles.title}>
                                <a href={mainGame.link} target="_blank" rel="noreferrer">{mainGame.title}</a>
                            </h3>
                            <div className={`${styles.desc} + ${styles.textLeft}`}>
                                <p>{mainGame.description}</p>
                            </div>
                            <a className={styles.btnSecondary} href={mainGame.link} target="_blank" rel="noreferrer">
                                <svg className={styles.btn} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z">
                                    </path>
                                </svg>
                                Site
                            </a>
                        </div>
                    </div>

                    <div className={styles.divider}></div>
                    {otherGames.map((value, key) =>
                        <div className={styles.itemRow} key={key}>
                            <a className={styles.rowA} href={value.link} target="_blank" rel="noreferrer">
                                <Image className={styles.image} src={value.image} height={437} width={777} objectFit='fill' alt='' />
                            </a>
                            <div className={styles.rowDiv}>
                                <h3 className={`${styles.title} + ${styles.mb2}`}>
                                    <a href={value.link} target="_blank" rel="noreferrer">{value.title}</a>
                                </h3>
                                <p className={styles.mb2}>{value.description}</p>
                                <p>
                                    <a className={styles.moreLink} href={value.link} target="_blank" rel="noreferrer">
                                        <svg className={styles.btn} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z">
                                            </path>
                                        </svg>
                                        <i>
                                        </i>
                                        Find out more
                                    </a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects;

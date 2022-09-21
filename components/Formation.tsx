import styles from '../styles/Formation.module.css'
import Link from 'next/link'

export default function Formation() {
    return (
        <div className={styles.container}>
            <div className={styles.formation}>
                <h2>Analysis and Systems Development</h2>
                <div className={styles.div}>
                    <Link href="https://estacio.br/">
                        <a target="_blank">
                            <h3 className={styles.cursor}>Estacio de Sá</h3>
                        </a>
                    </Link>
                    <h3>2018-2021</h3>
                </div>
            </div>
            <div className={styles.formation}>
                <h2>Development Intern</h2>
                <div className={styles.div}>
                    <Link href="https://certiamazonia.org.br/">
                        <a target="_blank">
                            <h3 className={styles.cursor}>CERTI Foundation</h3>
                        </a>
                    </Link>
                    <h3>2019-2020</h3>
                </div>
            </div>
            <div className={styles.formation}>
                <h2>Software Development</h2>
                <div className={styles.div}>
                    <Link href="https://certiamazonia.org.br/">
                        <a target="_blank">
                            <h3 className={styles.cursor}>CERTI Foundation</h3>
                        </a>
                    </Link>
                    <h3>2020-2021</h3>
                </div>
            </div>
            <div className={styles.formation}>
                <h2>Game Development</h2>
                <div className={styles.div}>
                    <Link href="https://play.google.com/store/apps/dev?id=4781778552349893740&hl=pt_BR&gl=US">
                        <a target="_blank">
                            <h3 className={styles.cursor}>Netuno.io</h3>
                        </a>
                    </Link>
                    <h3>2022</h3>
                </div>
            </div>

        </div>
    )
}
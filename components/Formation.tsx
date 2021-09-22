import styles from '../styles/Formation.module.css'
import Link from 'next/link'

export default function Formation() {
    return (
        <div className={styles.container}>
            <div className={styles.formation}>
                <h2>Analise e Desenvolvimento de Sistemas</h2>
                <div className={styles.div}>
                    <Link href="https://estacio.br/">
                        <a target="_blank">
                            <h3 className={styles.cursor}>Estacio de Sá</h3>
                        </a>
                    </Link>
                    <h3>2018-2020</h3>
                </div>
            </div>
            <div className={styles.formation}>
                <h2>Estagiário de Desenvolvimento</h2>
                <div className={styles.div}>
                    <Link href="https://certiamazonia.org.br/">
                        <a target="_blank">
                            <h3 className={styles.cursor}>Fundação CERTI</h3>
                        </a>
                    </Link>
                    <h3>2019-2020</h3>
                </div>
            </div>
            <div className={styles.formation}>
                <h2>Analista de Desenvolvimento de Software</h2>
                <div className={styles.div}>
                    <Link href="https://certiamazonia.org.br/">
                        <a target="_blank">
                            <h3 className={styles.cursor}>Fundação CERTI</h3>
                        </a>
                    </Link>
                    <h3>2020-2021</h3>
                </div>
            </div>
        </div>
    )
}
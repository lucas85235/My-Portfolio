import styles from '../styles/BottonButton.module.css'
import Image from 'next/image'

export default function BottonButton(props) {
    return (
        <a href="#init">
            <button className={styles.button}>
                <Image src="/Media/up.png" alt="" width="75px" height="75px" />
            </button>
        </a>
    )
}
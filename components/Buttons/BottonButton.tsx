import styles from '../styles/BottonButton.module.css'
import Image from 'next/image'

function BottonButton() {
    return (
        <a href="#init">
            <button className={styles.button}>
                <Image src="/Media/up.png" alt="" width="75px" height="75px" />
            </button>
        </a>
    )
}

export default BottonButton;

import styles from '../../styles/Header.module.css'
import Image from 'next/image';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.profileImage}>
                    <Image className={styles.image} src="/photos/1.jpg" height={180} width={180} alt=''/>
                </div>
                <div className={styles.floatLeft}>
                    <h1 className={styles.name}>Lucas Lima</h1>
                    <h2 className={styles.desc}>Pleno Unity Developer</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;
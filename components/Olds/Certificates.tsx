import RenderLink from './RenderLink'
import styles from '../styles/Certificates.module.css'

export default function Certificates() {
    return (
        <div className={styles.imgContainer}>

            <RenderLink
                render={styles.imgSmall}
                link="/Certifications/c++.jpg"
                image="/Certifications/c++.jpg"
                width="480" height="320"
            />

            <RenderLink
                render={styles.imgSmall}
                link="/Certifications/solidity.jpg"
                image="/Certifications/solidity.jpg"
                width="480" height="320"
            />

            <RenderLink
                render={styles.imgSmall}
                link="/Certifications/unity.jpg"
                image="/Certifications/unity.jpg"
                width="480" height="320"
            />

            <RenderLink
                render={styles.imgSmall}
                link="/Certifications/gamejam.png"
                image="/Certifications/gamejam.png"
                width="480" height="320"
            />

        </div>
    )
}
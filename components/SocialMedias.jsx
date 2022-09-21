import styles from '../styles/SocialMedias.module.css'
import Image from 'next/image'

const buttons = [
    {
        link: "mailto:lucas85235@gmail.com",
        image: "/Icons/email.png"        
    },
    {
        link: "https://wa.me/5592994822837",
        image: "/Icons/whatsapp.png"
    }
]

function Button(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>
                <Image src={props.image} alt="" width="50px" height="50px" />
            </button>
        </a>
    )
}

export default function SocialMedias(props) {
    return (
        <div className={styles.container}>
            {buttons.map(data => Button(data))}
        </div>
    )
}

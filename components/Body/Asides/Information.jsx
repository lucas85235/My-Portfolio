import Image from 'next/image';

const information = [
    {
        text: "Manaus, Amazonas, Brazil",
        icon: "/Icons/location.webp"
    },
    {
        text: "lucas85235@gmail.com",
        link: "mailto:lucas85235@gmail.com",
        icon: "/Icons/email.webp"
    },
    {
        text: "Download CV",
        link: "https://drive.google.com/file/d/1FYAj3AKvgXl1Z73OmvJY63O8ZvyNcUcW/view?usp=sharing",
        icon: "/Icons/pdf.webp"
    }
]

function Information({styles}) {
    return (
        <aside className={styles.section}>
            <div className={styles.sectionInner}>
                <div className={styles.content}>
                    <ul className={styles.unstyled}>
                        {information.map((value, key) =>
                            <li className={styles.li} key={key}>
                                <div className={styles.imgIcon}>
                                    <Image src={value.icon} height={180} width={180} alt='' />
                                </div>
                                <a className={value.link ? styles.moreLink : null} href={value.link} target="_blank" rel="noreferrer">
                                    {value.text}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Information;

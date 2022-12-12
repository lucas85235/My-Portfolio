
import MakeStars from "./MakeStars";

const languages = [
    {
        lang: "Portuguese: ",
        level: "Native Speaker",
        stars: 5
    },
    {
        lang: "English: ",
        level: "Intermediate",
        stars: 3
    }
]

function Languages({styles}) {
    return (
        <aside className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.heading}>Languages</h2>
                <div className={styles.content}>
                    <ul className={styles.unstyled}>
                        {languages.map((value, key) =>
                            <li className={styles.li} key={key}>
                                <span className={styles.lang}>
                                    <strong>{value.lang}</strong>
                                </span>
                                <span className={styles.level}>
                                    {value.level}
                                    <br />
                                    {/* {MakeStars(value.stars, styles)} */}
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Languages;

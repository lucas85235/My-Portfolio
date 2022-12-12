import MakeStars from "./MakeStars";

const skills = [
    {
        skill: "Unity and C#: ",
        level: "Expert",
        stars: 5
    },
    {
        skill: "Versioning with Git: ",
        level: "Expert",
        stars: 5
    },
    {
        skill: "Scrum and Kanban: ",
        level: "Pro",
        stars: 4
    },
    {
        skill: "Firebase: ",
        level: "Pro",
        stars: 4
    },
    {
        skill: "Solidity: ",
        level: "Pro",
        stars: 4
    },
    {
        skill: "Next, React: ",
        level: "Great",
        stars: 3
    },
    {
        skill: "HTML, CSS: ",
        level: "Great",
        stars: 3
    },
    {
        skill: "Javascript: ",
        level: "Great",
        stars: 3
    },
]

function Skills({styles}) {
    return (
        <aside className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.heading}>Skills</h2>
                <div className={styles.content}>
                    <ul className={styles.unstyled}>
                        {skills.map((value, key) =>
                            <li className={styles.li} key={key}>
                                <span className={styles.lang}>
                                    <strong>{value.skill}</strong>
                                </span>
                                <span className={styles.level}>
                                    {value.level}
                                    <br />
                                    {MakeStars(value.stars, styles)}
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Skills;

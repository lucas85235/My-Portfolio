function About({styles}) {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.heading}>About Me</h2>
                <div>
                    <p>{`Graduated in Systems Analysis and Development, since 2019 sending games to multiple platforms. I like to solve problems in a practical and efficient way, according to the restrictions given to me. My experience and favorite part is programming game mechanics, but I'm also good at creating the UI and integrating the backend.`}</p>
                    <p>{`I've been addicted to video games since I was little, always playing different types of games. My experience as a player allows me to better understand what mechanics and features to use within a game and decide what works and what doesn't.`}</p>
                </div>
            </div>
        </section>
    )
}

export default About;

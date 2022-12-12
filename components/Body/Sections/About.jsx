function About({styles}) {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.heading}>About Me</h2>
                <div>
                    <p>{`Graduated in the area of Information Systems, I have been working for more than 3 years in the development of electronic games using the Unity3D and C# graphics engine, also having a brief experience with back-end and front-end technologies.`}</p>
                </div>
            </div>
        </section>
    )
}

export default About;

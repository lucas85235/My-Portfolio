import About from './Sections/About';
import Projects from './Sections/Projects';
import Information from './Asides/Information';
import Skills from './Asides/Skills';
import Languages from './Asides/Languages';
import styles from '../../styles/Body.module.css'

function Body() {
    return (
        <div className={`${styles.sectionsWrapper} + ${styles.container}`}>
            <div className={styles.row}>

                {/* Right Panel */}

                <div className={styles.primary}>
                    <About styles={styles} />
                    <Projects styles={styles} />
                </div>

                {/* Left Panel */}

                <div className={styles.secondary}>
                    <Information styles={styles} />
                    <Skills styles={styles} />
                    <Languages styles={styles}/>
                </div>
            </div>
        </div>
    )
}

export default Body;

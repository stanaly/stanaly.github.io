import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import Skills from './Skills'
import { projects } from '../Collections/projects'

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>Hey there, I am Asavari.</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>Usually, when I am not caught up with my college assignments, I like to try my hand at web development and I think I have gotten pretty good at it!</h2>
                <Link href="#work"><a className={styles.cta1} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>My work</a></Link>
            </div>
            <div className={styles.homeWorkSection} id="work">
                <h1 className={styles.workheading}>Work</h1>
                {
                    projects.slice(0, 3).map((project) => {
                        return (
                            <div key={project.id}>
                                <HomeProject currentTheme={currentTheme} project={project} />
                            </div>
                        )
                    })
                }
                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}><Link href="/work"><a className={styles.cta3} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>View All <span>&gt;</span></a></Link></div>
            </div>
            <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
                <Skills currentTheme={currentTheme} />
            </div>
            <div id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.workheading}>About Me</h1>
                <p className={styles.aboutText} style={{ color: currentTheme.subtext }}>I am Asavari, a student at VJTI, Mumbai. I am currently pursuing my bachelor<span>&#39;</span>s degree in electronic engineering. I aim to gain maximum technical knowledge during the course of my eduction and hopefully apply the same for the benefit of the society in future. Other than that, you are most likely to find me with a book in one hand and tea in other. I also like to groove to upbeat music whenever I feel happy!</p>
            </div>
        </div>
    )
}

export default HomePage

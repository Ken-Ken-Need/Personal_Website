import { profile } from '../data/profile'
import styles from './About.module.css'

export default function About() {
  return (
    <main className={`page ${styles.about}`}>
      <h1>about</h1>
      <p className={styles.bio}>{profile.bio}</p>

      <hr />

      <section>
        <h2>education</h2>
        <div className={styles.eduList}>
          {profile.education.map((e, i) => (
            <div key={i} className={styles.eduItem}>
              <span>{e.school}</span>
              <span className={styles.muted}>{e.degree} · {e.year}</span>
            </div>
          ))}
        </div>
      </section>

      <hr />

      <section>
        <h2>skills</h2>
        <div className={styles.skills}>
          {profile.skills.map(s => (
            <span key={s} className={styles.skill}>{s}</span>
          ))}
        </div>
      </section>
    </main>
  )
}

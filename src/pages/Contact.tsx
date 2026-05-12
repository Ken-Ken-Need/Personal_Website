import { profile } from '../data/profile'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <main className={`page ${styles.contact}`}>
      <h1>contact</h1>
      <p>The best way to reach me is by email.</p>

      <ul className={styles.links}>
        <li>
          <span className={styles.label}>email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span className={styles.label}>github</span>
          <a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace('https://', '')}</a>
        </li>
        <li>
          <span className={styles.label}>linkedin</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin.replace('https://', '')}</a>
        </li>
        {profile.resume && (
          <li>
            <span className={styles.label}>resume</span>
            <a href={profile.resume} target="_blank" rel="noreferrer">download PDF</a>
          </li>
        )}
      </ul>
    </main>
  )
}

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`page ${styles.inner}`}>
        <span>built with react + typescript</span>
        <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noreferrer">
          source
        </a>
      </div>
    </footer>
  )
}

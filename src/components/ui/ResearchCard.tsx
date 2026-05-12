import type { Research } from '../../types'
import styles from './ResearchCard.module.css'

interface Props {
  item: Research
}

const statusLabel: Record<Research['status'], string> = {
  published: 'published',
  submitted: 'under review',
  'in-progress': 'in progress',
}

export default function ResearchCard({ item }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3>{item.title}</h3>
        <span className={`${styles.status} ${styles[item.status]}`}>
          {statusLabel[item.status]}
        </span>
      </div>
      <div className={styles.meta}>
        {item.venue} · {item.year}
      </div>
      <p className={styles.desc}>{item.description}</p>
      <div className={styles.links}>
        {item.paperUrl && (
          <a href={item.paperUrl} target="_blank" rel="noreferrer">paper</a>
        )}
        {item.githubUrl && (
          <a href={item.githubUrl} target="_blank" rel="noreferrer">code</a>
        )}
      </div>
    </article>
  )
}

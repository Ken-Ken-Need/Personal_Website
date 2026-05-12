import type { Project } from '../../types'
import Tag from './Tag'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3>{project.title}</h3>
        <span className={styles.year}>{project.year}</span>
      </div>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.footer}>
        <div className={styles.tags}>
          {project.tech.map(t => <Tag key={t} label={t} />)}
        </div>
        <div className={styles.links}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">github</a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">live</a>
          )}
        </div>
      </div>
    </article>
  )
}

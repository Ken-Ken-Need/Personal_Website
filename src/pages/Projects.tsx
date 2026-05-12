import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const allTech = Array.from(new Set(projects.flatMap(p => p.tech))).sort()
  const [filter, setFilter] = useState<string | null>(null)

  const filtered = filter ? projects.filter(p => p.tech.includes(filter)) : projects

  return (
    <main className={`page ${styles.projects}`}>
      <h1>projects</h1>

      <div className={styles.filters}>
        <button
          className={`${styles.filter} ${filter === null ? styles.active : ''}`}
          onClick={() => setFilter(null)}
        >
          all
        </button>
        {allTech.map(t => (
          <button
            key={t}
            className={`${styles.filter} ${filter === t ? styles.active : ''}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div>
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </main>
  )
}

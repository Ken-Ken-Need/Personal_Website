import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { research } from '../data/research'
import ProjectCard from '../components/ui/ProjectCard'
import ResearchCard from '../components/ui/ResearchCard'
import styles from './Home.module.css'

export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0, 2)
  const recentResearch = research.slice(0, 2)

  return (
    <main className={`page ${styles.home}`}>
      <section className={styles.hero}>
        <h1>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
        <p className={styles.bio}>{profile.bio}</p>
        <div className={styles.cta}>
          <Link to="/projects">projects</Link>
          <Link to="/research">research</Link>
        </div>
      </section>

      {featured.length > 0 && (
        <section>
          <div className={styles.sectionHeader}>
            <h2>selected projects</h2>
            <Link to="/projects">all →</Link>
          </div>
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </section>
      )}

      {recentResearch.length > 0 && (
        <section>
          <div className={styles.sectionHeader}>
            <h2>research</h2>
            <Link to="/research">all →</Link>
          </div>
          {recentResearch.map(r => <ResearchCard key={r.id} item={r} />)}
        </section>
      )}
    </main>
  )
}

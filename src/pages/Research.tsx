import { research } from '../data/research'
import ResearchCard from '../components/ui/ResearchCard'
import styles from './Research.module.css'

const order: Array<typeof research[0]['status']> = ['published', 'submitted', 'in-progress']

export default function Research() {
  const grouped = order.reduce<Record<string, typeof research>>((acc, status) => {
    const items = research.filter(r => r.status === status)
    if (items.length) acc[status] = items
    return acc
  }, {})

  const sectionTitle: Record<string, string> = {
    published: 'published',
    submitted: 'under review',
    'in-progress': 'in progress',
  }

  return (
    <main className={`page ${styles.research}`}>
      <h1>research</h1>
      {Object.entries(grouped).map(([status, items]) => (
        <section key={status} className={styles.group}>
          <h2 className={styles.groupTitle}>{sectionTitle[status]}</h2>
          {items.map(r => <ResearchCard key={r.id} item={r} />)}
        </section>
      ))}
    </main>
  )
}

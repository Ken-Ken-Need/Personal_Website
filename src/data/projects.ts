import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'example-project',
    title: 'Example Project',
    description: 'A short one-sentence description of what this project does.',
    tech: ['TypeScript', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/example-project',
    liveUrl: 'https://example.com',
    year: 2026,
    featured: true,
  },
]

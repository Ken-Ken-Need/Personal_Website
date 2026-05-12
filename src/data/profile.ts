import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Your Name',
  title: 'CS Student @ NYU',
  bio: 'I build things and occasionally research stuff. Interested in systems, ML, and anything that breaks in interesting ways.',
  email: 'you@nyu.edu',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  resume: '/resume.pdf',
  skills: [
    'Python', 'TypeScript', 'Go', 'C++',
    'React', 'Node.js',
    'PostgreSQL', 'Redis',
    'Docker', 'Linux',
  ],
  education: [
    {
      school: 'New York University',
      degree: 'B.S. Computer Science',
      year: '2022 – 2026',
    },
  ],
}

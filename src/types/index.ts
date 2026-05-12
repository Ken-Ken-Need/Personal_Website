export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  year: number
  featured?: boolean
}

export interface Research {
  id: string
  title: string
  venue: string
  description: string
  paperUrl?: string
  githubUrl?: string
  status: 'published' | 'submitted' | 'in-progress'
  year: number
}

export interface Profile {
  name: string
  title: string
  bio: string
  email: string
  github: string
  linkedin: string
  resume?: string
  skills: string[]
  education: Education[]
}

export interface Education {
  school: string
  degree: string
  year: string
}

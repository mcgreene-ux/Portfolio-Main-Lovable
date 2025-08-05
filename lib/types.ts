export interface ProjectData {
  title: string
  subtitle: string
  year: string
  client: string
  location: string
  services: string[]
  overview: string
  challenge: string
  solution: string
  results: string
  figmaUrl: string
  websiteUrl: string
  color: string
  headerImage?: string
  inProgress?: boolean
  stats: { value: string; label: string }[]
  process: {
    name: string
    description: string
    longDescription: string
    deliverables: string[]
    duration: string
  }[]
  research: {
    methods: string[]
    insights: string[]
    participants: number
    duration: string
  }
  design: {
    tools: string[]
    iterations: number
    screens: number
    components: number
  }
  testimonial: {
    quote: string
    author: string
    position: string
  }
}

interface ProjectCardProps {
  project: {
    title: string
    category: string
    description: string
    image: string
    slug: string
    color: string
  }
  index: number
}

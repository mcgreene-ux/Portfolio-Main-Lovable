import type { ProjectData } from "@/lib/types"

export const takeTheCity: ProjectData = {
  title: "TTC (Take the City)",
  subtitle: "NAVIGATION",
  year: "",
  client: "Take the City",
  location: "Global",
  services: ["UX/UI Design", "Mobile App Design", "Gamification", "Community Building"],
  overview:
    "An app and scalable website that makes it easier for people with sensory-related anxiety to navigate Dublin.",
  challenge:
    "Dublin is a thriving city with much to offer, but not everyone within its diverse population can easily take advantage of what the city has to offer. People with anxiety struggles often find it difficult to participate in and move about the city without negatively impacting their mental health.",
  solution:
    "We created an app and website dedicated to highlighting and listing sensory-friendly places throughout Dublin, providing users with information on how to reach these venues in the least stressful way possible. The platform focuses on accessibility and mental health support for urban navigation.",
  results:
    "User testing showed strong engagement with the gamified discovery features and intuitive navigation. Stakeholders were impressed with the comprehensive user research and strategic approach to community building. The design system and interaction patterns established a scalable foundation for the platform.",
  figmaUrl:
    "https://embed.figma.com/proto/Zibr0F7e2Hrg5WSpzPdBHV/ALL-CASE-STUDY-LAYOUTS-FOR-PORTFOLIO?page-id=402%3A75&node-id=455-3343&viewport=4065%2C5360%2C0.35&scaling=scale-down-width&content-scaling=fixed&embed-host=share",
  websiteUrl: "https://example.com/take-the-city",
  color: "217 91% 45%", // Darker blue accent color
  headerImage: "/images/website lead image.jpg",
  slug: "take-the-city",
  stats: [
    { value: "Sensory-Friendly", label: "Navigation Design" },
    { value: "Gamified", label: "Discovery Features" },
    { value: "Accessibility", label: "Focused Platform" },
  ],
  process: [
    {
      name: "Discovery",
      description: "Understanding local event ecosystems and user behaviors.",
      longDescription:
        "We conducted extensive research into how people currently discover and engage with local events, identifying pain points and opportunities for a new platform. This included surveys, interviews, and competitive analysis of existing event apps.",
      deliverables: ["Market Research Report", "User Personas", "Competitive Analysis"],
      duration: "3 weeks",
    },
    {
      name: "Strategy",
      description: "Defining gamification mechanics and core user journeys.",
      longDescription:
        "Based on discovery, we developed a strategy for integrating gamification elements to encourage exploration and participation. We mapped out key user journeys, focusing on event discovery, attendance, and social interaction.",
      deliverables: ["Gamification Strategy", "User Flow Diagrams", "Information Architecture"],
      duration: "2 weeks",
    },
    {
      name: "Design",
      description: "Wireframing, prototyping, and visual design for a dynamic experience.",
      longDescription:
        "We created wireframes and high-fidelity prototypes, focusing on a visually engaging and intuitive interface. The design incorporated dynamic elements and clear calls to action to guide users through the app and highlight events.",
      deliverables: ["Wireframes", "Interactive Prototype", "UI Style Guide", "High-fidelity Mockups"],
      duration: "4 weeks",
    },
    {
      name: "Testing",
      description: "Usability testing and iteration on engagement features.",
      longDescription:
        "Multiple rounds of usability testing were conducted to gather feedback on the app's usability, the effectiveness of gamification, and the overall user experience. Insights informed iterative design improvements.",
      deliverables: ["Usability Test Report", "Feedback Analysis", "Design Iterations"],
      duration: "3 weeks",
    },
    {
      name: "Handoff & Launch",
      description: "Development support and preparation for community rollout.",
      longDescription:
        "We provided detailed design specifications and assets to the development team, ensuring accurate implementation. Support was given throughout the development cycle, including QA and preparation of launch materials for community engagement.",
      deliverables: ["Design Specifications", "Asset Library", "Launch Plan Support"],
      duration: "6 weeks",
    },
  ],
  research: {
    methods: ["User Interviews", "Competitive Analysis", "Surveys", "Contextual Inquiry"],
    insights: [
      "Users often miss out on local events due to lack of awareness or difficulty finding information.",
      "Social features and gamification can significantly boost engagement and repeat usage.",
      "Personalized recommendations are crucial for cutting through information overload.",
      "Seamless integration with mapping and calendar tools is highly valued.",
    ],
    participants: 35,
    duration: "3 weeks",
  },
  design: {
    tools: ["Figma", "Adobe Illustrator", "Principle", "Miro"],
    iterations: 6,
    screens: 50,
    components: 80,
  },
  testimonial: {
    quote:
      "The TTC app design is incredibly innovative! It's transformed how I discover and engage with my city, making every outing an adventure. The gamification is a brilliant touch.",
    author: "Local Explorer",
    position: "Beta Tester",
  },
}

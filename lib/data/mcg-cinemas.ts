import type { ProjectData } from "@/lib/types"

export const mcgCinemas: ProjectData = {
  title: "MCG Cinemas",
  subtitle: "E-COMMERCE B2C",
  year: "",
  client: "MCG Cinemas",
  location: "London, UK",
  services: ["UX/UI Design", "Mobile App Design", "Product Strategy"],
  overview: "A food delivery app to make it easier for people to have a home-movie experience",
  challenge:
    "The challenge was to create a seamless and engaging mobile experience for ordering cinema food and drinks for home delivery, integrating a user-friendly interface with efficient delivery logistics.",
  solution:
    "We designed an intuitive app with a clear ordering flow, personalized recommendations, and real-time delivery tracking. The solution focused on enhancing convenience and replicating the cinema snack experience at home.",
  results:
    "User testing revealed high satisfaction with the ordering flow and visual design. Stakeholders praised the comprehensive design system and clear documentation. The project established a strong foundation for future feature development and provided valuable insights into the home delivery market opportunity.",
  figmaUrl:
    "https://embed.figma.com/proto/Zibr0F7e2Hrg5WSpzPdBHV/ALL-CASE-STUDY-LAYOUTS-FOR-PORTFOLIO?node-id=130-147&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=130%3A147&embed-host=share",
  websiteUrl: "https://example.com/mcg-cinemas",
  color: "0 84% 60%", // Red color for cinema theme
  headerImage: "/images/website and behance main image.jpg", // Specific header image for MCG Cinemas
  stats: [
    { value: "Clear Interface", label: "Improves User Experience" },
    { value: "Streamlined Flow", label: "Simplifies Ordering Process" },
    { value: "Visual Design", label: "Enhances Product Appeal" },
  ],
  process: [
    {
      name: "Discovery",
      description: "Market research and user needs analysis",
      longDescription:
        "We conducted extensive market research into the food delivery and entertainment industries, alongside user interviews to understand current habits and desires for at-home cinema experiences. This helped identify key features and potential pain points.",
      deliverables: ["Market Research Report", "User Personas", "Competitive Analysis"],
      duration: "3 weeks",
    },
    {
      name: "Strategy",
      description: "Defining core features and user flows",
      longDescription:
        "Based on discovery, we outlined the core functionalities, focusing on a streamlined ordering process, clear menu presentation, and intuitive delivery options. User flows were mapped to ensure a smooth journey from browsing to checkout.",
      deliverables: ["Feature Prioritization", "User Flow Diagrams", "Information Architecture"],
      duration: "2 weeks",
    },
    {
      name: "Design",
      description: "Wireframing, prototyping, and visual design",
      longDescription:
        "Low-fidelity wireframes were created to establish layout, followed by high-fidelity prototypes for interactive testing. The visual design aimed for a premium, cinematic feel, using rich colors and engaging imagery for food items.",
      deliverables: ["Wireframes", "Interactive Prototype", "UI Style Guide", "High-fidelity Mockups"],
      duration: "4 weeks",
    },
    {
      name: "Testing",
      description: "Usability testing and iteration",
      longDescription:
        "Multiple rounds of usability testing were conducted with target users to gather feedback on the ordering process, menu navigation, and delivery experience. Insights from testing informed iterative design improvements.",
      deliverables: ["Usability Test Report", "Feedback Analysis", "Design Iterations"],
      duration: "3 weeks",
    },
    {
      name: "Handoff & Launch",
      description: "Development support and launch preparation",
      longDescription:
        "We provided detailed design specifications and assets to the development team, ensuring accurate implementation. Support was given throughout the development cycle, including QA and preparation of launch materials.",
      deliverables: ["Design Specifications", "Asset Library", "Launch Plan Support"],
      duration: "6 weeks",
    },
  ],
  research: {
    methods: ["User Interviews", "Competitive Analysis", "Surveys", "Concept Testing"],
    insights: [
      "Users desire convenience for cinema snacks at home but lack a dedicated service",
      "Clear imagery and detailed descriptions of food items are crucial for ordering confidence",
      "Real-time delivery tracking is a high-priority feature",
      "Personalized recommendations could enhance the user experience",
    ],
    participants: 28,
    duration: "3 weeks",
  },
  design: {
    tools: ["Figma", "Adobe Photoshop", "Principle"],
    iterations: 5,
    screens: 40,
    components: 70,
  },
  testimonial: {
    quote:
      "The MCG Cinemas app design is fantastic! It's so easy to use, and getting our favorite cinema snacks delivered right to our door has completely changed our movie nights.",
    author: "A Happy Beta User",
    position: "Movie Enthusiast",
  },
}

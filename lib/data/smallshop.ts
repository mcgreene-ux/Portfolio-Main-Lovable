import type { ProjectData } from "@/lib/types"

export const smallshop: ProjectData = {
  title: "Smallshop",
  subtitle: "E-COMMERCE B2C",
  year: "",
  client: "Small Business Collective",
  location: "Remote",
  services: ["E-commerce Design", "UX/UI Design", "Platform Strategy"],
  overview:
    "A modern e-commerce platform to increase engagement with small businesses, focusing on simplicity, fewer friction points, and user retention.",
  challenge:
    "Small businesses often struggle with complex and expensive e-commerce solutions. The challenge was to create an affordable, intuitive, and scalable platform that empowers them to sell online effectively without extensive technical knowledge.",
  solution:
    "We designed a streamlined e-commerce interface with a focus on clear product presentation, simplified checkout flows, and robust administrative tools. The solution prioritizes mobile responsiveness and accessibility to ensure a broad reach for small businesses.",
  results:
    "Usability testing demonstrated that small business owners could set up their stores significantly faster than with existing platforms. User feedback highlighted the intuitive interface and comprehensive feature set. The design system established clear patterns for future platform expansion.",
  figmaUrl:
    "https://embed.figma.com/proto/Zibr0F7e2Hrg5WSpzPdBHV/ALL-CASE-STUDY-LAYOUTS-FOR-PORTFOLIO?page-id=398%3A76&node-id=402-4371&viewport=1043%2C5071%2C0.19&scaling=scale-down-width&content-scaling=fixed&embed-host=share",
  websiteUrl: "https://example.com/smallshop",
  color: "120 60% 40%", // A green color
  headerImage: "/images/website main image.jpg",
  slug: "smallshop",
  stats: [
    { value: "Simple Setup", label: "Reduces Onboarding Time" },
    { value: "Mobile Design", label: "Supports Mobile Users" },
    { value: "Clear Checkout", label: "Improves User Experience" },
  ],
  process: [
    {
      name: "Discovery",
      description: "Understanding small business needs and market gaps.",
      longDescription:
        "We conducted interviews with small business owners and analyzed existing e-commerce platforms to identify pain points, feature gaps, and opportunities for a more user-friendly solution. This included understanding their technical comfort levels and budget constraints.",
      deliverables: ["Market Research Report", "Small Business Personas", "Competitive Analysis"],
      duration: "3 weeks",
    },
    {
      name: "Strategy",
      description: "Defining core features and platform architecture.",
      longDescription:
        "Based on discovery, we outlined the essential features for both sellers and buyers, focusing on simplicity and efficiency. We developed a scalable platform architecture that could support various business types and future growth.",
      deliverables: ["Feature Prioritization", "Platform Architecture Diagram", "User Flow Maps"],
      duration: "2 weeks",
    },
    {
      name: "Design",
      description: "Wireframing, prototyping, and visual design for intuitive experience.",
      longDescription:
        "We created wireframes and high-fidelity prototypes, emphasizing a clean, intuitive interface for both store management and customer shopping. The visual design aimed for a modern, approachable aesthetic that could be customized by individual businesses.",
      deliverables: ["Wireframes", "Interactive Prototype", "UI Style Guide", "High-fidelity Mockups"],
      duration: "4 weeks",
    },
    {
      name: "Testing",
      description: "Usability testing with small business owners and customers.",
      longDescription:
        "Multiple rounds of usability testing were conducted with small business owners setting up their stores and with customers making purchases. Feedback was used to refine the onboarding process, product management, and checkout experience.",
      deliverables: ["Usability Test Report", "Feedback Analysis", "Design Iterations"],
      duration: "3 weeks",
    },
    {
      name: "Handoff & Launch",
      description: "Development support and platform rollout.",
      longDescription:
        "We provided detailed design specifications and assets to the development team, ensuring accurate implementation. Support was given throughout the development cycle, including QA and preparation of launch materials for the small business community.",
      deliverables: ["Design Specifications", "Asset Library", "Launch Plan Support"],
      duration: "6 weeks",
    },
  ],
  research: {
    methods: ["User Interviews", "Competitive Analysis", "Surveys", "Contextual Inquiry"],
    insights: [
      "Small businesses need simple, affordable, and quick setup for online stores.",
      "Customers value clear product information and a straightforward checkout process.",
      "Mobile experience is crucial for both managing and shopping on the platform.",
      "Customization options for branding are highly desired by small businesses.",
    ],
    participants: 40,
    duration: "3 weeks",
  },
  design: {
    tools: ["Figma", "Webflow", "Adobe Illustrator", "Miro"],
    iterations: 7,
    screens: 60,
    components: 90,
  },
  testimonial: {
    quote:
      "Smallshop has been a game-changer for my business. It's incredibly easy to use, and my customers love the clean, simple shopping experience. Highly recommend!",
    author: "Local Artisan",
    position: "Small Business Owner",
  },
}

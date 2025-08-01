import type { ProjectData } from "@/lib/types"

export const zarkAdminDashboard: ProjectData = {
  title: "Zark Admin Dashboard",
  subtitle: "SAAS",
  year: "",
  client: "Zark Solutions",
  location: "Remote",
  services: ["Web Platform Design", "Dashboard Design", "Data Visualization"],
  overview: "An administrative dashboard for managing complex business operations and data analytics.",
  challenge:
    "The challenge was to consolidate disparate data sources and complex functionalities into a single, intuitive dashboard that provides actionable insights for administrators without overwhelming them.",
  solution:
    "We designed a modular dashboard with customizable widgets, real-time data visualisation, and streamlined workflows for common administrative tasks. The solution focused on clarity, efficiency, and scalability.",
  results:
    "Usability testing showed administrators could complete key tasks more efficiently with the new interface. User feedback highlighted improved data visibility and workflow optimization. The modular design system established a foundation for future dashboard expansions and customization options.",
  figmaUrl:
    "https://embed.figma.com/proto/Zibr0F7e2Hrg5WSpzPdBHV/ALL-CASE-STUDY-LAYOUTS-FOR-PORTFOLIO?page-id=0%3A1&node-id=130%3A147&viewport=3545%2C4629%2C0.3&scaling=scale-down-width&content-scaling=fixed&embed-host=share",
  websiteUrl: "https://example.com/zark-dashboard",
  color: "210 30% 30%", // Dark Blue/Gray
  headerImage: "/images/main-behance.png",
  slug: "zark-admin-dashboard",
  stats: [
    { value: "Data Visualization", label: "Improves Decision Making" },
    { value: "Design System", label: "Ensures Consistency" },
    { value: "Intuitive Interface", label: "Reduces Learning Curve" },
  ],
  process: [
    {
      name: "Discovery",
      description: "Understanding administrative workflows and data needs.",
      longDescription:
        "We conducted in-depth interviews with administrators and analyzed existing systems to understand their daily tasks, pain points, and critical data requirements. This helped identify key areas for improvement and automation.",
      deliverables: ["Workflow Analysis Report", "Admin Personas", "Data Requirements Document"],
      duration: "4 weeks",
    },
    {
      name: "Strategy",
      description: "Defining modular architecture and data visualization strategy.",
      longDescription:
        "Based on discovery, we developed a strategy for a modular dashboard architecture, allowing for customization and scalability. We defined the key data points to visualize and how to present them for maximum clarity and actionability.",
      deliverables: ["Modular Architecture Plan", "Data Visualization Strategy", "Feature Prioritization"],
      duration: "3 weeks",
    },
    {
      name: "Design",
      description: "Wireframing, prototyping, and visual design for clarity and efficiency.",
      longDescription:
        "We created wireframes and high-fidelity prototypes, focusing on a clean, intuitive interface that minimizes cognitive load. The visual design emphasized data hierarchy, clear calls to action, and a professional aesthetic.",
      deliverables: ["Wireframes", "Interactive Prototype", "UI Style Guide", "High-fidelity Mockups"],
      duration: "5 weeks",
    },
    {
      name: "Testing",
      description: "Usability testing with administrators and iteration.",
      longDescription:
        "Multiple rounds of usability testing were conducted with actual administrators to gather feedback on task completion, data comprehension, and overall usability. Insights from testing informed iterative design improvements.",
      deliverables: ["Usability Test Report", "Feedback Analysis", "Design Iterations"],
      duration: "4 weeks",
    },
    {
      name: "Handoff & Optimization",
      description: "Development support and post-launch optimization.",
      longDescription:
        "We provided detailed design specifications and assets to the development team, ensuring accurate implementation. Post-launch, we monitored usage data and gathered feedback for continuous optimization and feature enhancements.",
      deliverables: ["Design Specifications", "Asset Library", "Optimization Recommendations"],
      duration: "Ongoing",
    },
  ],
  research: {
    methods: ["User Interviews", "Workflow Analysis", "Competitive Analysis", "Contextual Inquiry"],
    insights: [
      "Administrators needed a unified view of all operations.",
      "Customizable dashboards were highly valued for different roles.",
      "Real-time data was crucial for timely decision-making.",
      "Complex data needed simplified visualization for quick insights.",
    ],
    participants: 25,
    duration: "4 weeks",
  },
  design: {
    tools: ["Figma", "Tableau", "Miro", "Adobe XD"],
    iterations: 6,
    screens: 50,
    components: 80,
  },
  testimonial: {
    quote:
      "The Zark Admin Dashboard has revolutionized our operations. It's incredibly powerful yet so easy to use, giving our team the insights they need at a glance. A truly impactful design!",
    author: "David Lee",
    position: "Operations Director, Zark Solutions",
  },
}

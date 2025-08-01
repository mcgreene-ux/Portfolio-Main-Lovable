import type { ProjectData } from "@/lib/types"

export const zumoExchangeFeature: ProjectData = {
  title: "Zumo Enterprise Dashboard",
  subtitle: "FINTECH",
  year: "2024",
  client: "Zumo",
  location: "Edinburgh, UK",
  services: ["Product Design", "UX Research", "Design Systems", "B2B Dashboard Design"],
  overview:
    "Leading the complete redesign of Zumo's Enterprise dashboard for B2B clients, introducing fiat infrastructure, conducting foundational research, and establishing the company's first comprehensive design system.",
  challenge:
    "As the sole product designer at Zumo, I needed to transform a complex cryptocurrency platform into an intuitive enterprise solution. The existing dashboard lacked user research foundation, had no design system, and struggled to serve the diverse needs of B2B clients managing digital assets and fiat transactions.",
  solution:
    "I conducted comprehensive user research with enterprise clients, redesigned the entire dashboard architecture, introduced fiat payment infrastructure, and created Zumo's first design system. The solution focused on simplifying complex financial operations while maintaining the security and compliance standards required for enterprise cryptocurrency management.",
  results:
    "User testing with enterprise clients validated the simplified dashboard architecture and fiat integration flows. Stakeholders praised the comprehensive research approach and strategic design decisions. The design system I established became the foundation for all future Zumo products, ensuring consistency and scalability across the platform.",
  figmaUrl:
    "https://www.figma.com/design/UIZbmewoSvPosU4lC2O5OZ/Marie-Greene-Zumo-Assignment?node-id=353-382&p=f&t=vAHoAxMGffdShR4U-0",
  websiteUrl: "https://zumo.money",
  color: "45 93% 47%", // Gold/Yellow
  headerImage: "/placeholder.svg?height=400&width=600",
  inProgress: true,
  slug: "zumo-exchange-feature",
  stats: [
    { value: "Design System", label: "Established Foundation" },
    { value: "User Research", label: "Informed Design Decisions" },
    { value: "Dashboard Redesign", label: "Improved Usability" },
  ],
  process: [
    {
      name: "Discovery & Research",
      description: "Understanding enterprise client needs and current pain points",
      longDescription:
        "As the first designer at Zumo, I started with comprehensive user research to understand how enterprise clients currently managed their digital assets. I conducted live interviews with existing B2B clients, analyzed support tickets, and performed competitive analysis of enterprise fintech platforms. This research revealed critical gaps in the current dashboard and informed our strategic direction.",
      deliverables: [
        "User Interview Findings",
        "Competitive Analysis Report",
        "Pain Point Analysis",
        "Opportunity Mapping",
      ],
      duration: "4 weeks",
    },
    {
      name: "Strategic Planning",
      description: "Defining product direction and feature prioritization",
      longDescription:
        "Working closely with product and engineering teams, I developed Lean Canvases and strategic curves to align design decisions with business objectives. We prioritized features based on user impact and technical feasibility, focusing on the most critical enterprise workflows first. This phase established the foundation for both the dashboard redesign and the new fiat infrastructure.",
      deliverables: ["Lean Canvas", "Feature Prioritization Matrix", "User Journey Maps", "Technical Requirements"],
      duration: "3 weeks",
    },
    {
      name: "Design System Foundation",
      description: "Creating Zumo's first comprehensive design system",
      longDescription:
        "Recognizing the need for scalable design practices, I initiated and built Zumo's first design system from scratch. This included establishing design principles, creating a component library, defining typography and color systems, and setting up design tokens. The system was designed to support both the current dashboard redesign and future product development.",
      deliverables: ["Design System Documentation", "Component Library", "Design Tokens", "Usage Guidelines"],
      duration: "6 weeks",
    },
    {
      name: "Dashboard Redesign",
      description: "Redesigning the enterprise dashboard for improved usability",
      longDescription:
        "I completely reimagined the dashboard architecture, focusing on the most critical enterprise workflows. The new design simplified complex cryptocurrency operations, introduced clear information hierarchy, and provided better visibility into transaction status and account management. Special attention was paid to compliance requirements and security features that enterprise clients demanded.",
      deliverables: ["Wireframes", "High-fidelity Mockups", "Interactive Prototypes", "User Flow Diagrams"],
      duration: "8 weeks",
    },
    {
      name: "Fiat Infrastructure Integration",
      description: "Designing the interface for new fiat payment capabilities",
      longDescription:
        "A major component of the project involved designing interfaces for Zumo's new fiat infrastructure. This required understanding complex financial regulations, designing secure payment flows, and ensuring seamless integration between cryptocurrency and traditional banking operations. The design needed to accommodate various currencies and payment methods while maintaining security standards.",
      deliverables: [
        "Payment Flow Designs",
        "Compliance Interface Mockups",
        "Multi-currency Support Designs",
        "Security Feature Specifications",
      ],
      duration: "5 weeks",
    },
    {
      name: "Testing & Iteration",
      description: "Validating designs with enterprise clients and stakeholders",
      longDescription:
        "I conducted multiple rounds of usability testing with existing enterprise clients to validate the new dashboard design. Feedback sessions included both moderated user testing and stakeholder reviews. The insights gathered led to several important iterations, particularly around transaction monitoring and reporting features that were critical for enterprise compliance requirements.",
      deliverables: [
        "Usability Test Reports",
        "Iteration Documentation",
        "Stakeholder Feedback Analysis",
        "Final Design Specifications",
      ],
      duration: "4 weeks",
    },
  ],
  research: {
    methods: [
      "User Interviews",
      "Competitive Analysis",
      "Stakeholder Workshops",
      "Support Ticket Analysis",
      "Journey Mapping",
    ],
    insights: [
      "Enterprise clients needed better visibility into transaction status and compliance reporting",
      "The lack of fiat integration was a major barrier to adoption for traditional financial institutions",
      "Complex cryptocurrency operations needed to be simplified without losing functionality",
      "A consistent design system was essential for building trust with enterprise clients",
      "Real-time monitoring and alerting capabilities were critical for enterprise risk management",
    ],
    participants: 12,
    duration: "4 weeks",
  },
  design: {
    tools: ["Figma", "Miro", "Principle", "Adobe Creative Suite"],
    iterations: 8,
    screens: 75,
    components: 120,
  },
  testimonial: {
    quote:
      "The dashboard redesign has transformed how our team manages digital assets. The new interface is intuitive, comprehensive, and gives us the visibility we need for enterprise-level operations. The design system foundation will serve us well as we continue to scale.",
    author: "Product Team",
    position: "Zumo",
  },
}

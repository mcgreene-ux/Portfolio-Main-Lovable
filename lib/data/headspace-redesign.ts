import type { ProjectData } from "@/lib/types"

export const headspaceRedesign: ProjectData = {
  title: "Headspace Redesign",
  subtitle: "REDESIGN",
  year: "",
  client: "Headspace Inc.",
  location: "Santa Monica, USA",
  services: ["UX/UI Design", "Mobile App Design", "User Research"],
  overview:
    "A redesign of the Headspace meditation app focusing on improving user engagement and retention by creating a more personalised experience.",
  challenge:
    "The existing app had high download rates but low retention. Users found it difficult to maintain consistent meditation habits and felt overwhelmed by the amount of content available.",
  solution:
    "We developed a more intuitive navigation system with personalized content recommendations and simplified onboarding. The redesign focused on habit formation and progress tracking to encourage daily use.",
  results:
    "User testing revealed improved task completion rates and positive feedback on the simplified meditation flows. The personalized onboarding approach tested well with both new and existing users. Stakeholders praised the comprehensive research approach and evidence-based design decisions.",
  figmaUrl: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  websiteUrl: "https://example.com/headspace-redesign",
  color: "25 85% 53%", // Orange/meditation color
  headerImage: "/images/behance and website lead image.png",
  slug: "headspace-redesign",
  stats: [
    { value: "Improved Onboarding", label: "Enhances User Experience" },
    { value: "Habit Features", label: "Supports User Engagement" },
    { value: "Clear Navigation", label: "Reduces User Confusion" },
  ],
  process: [
    {
      name: "Research",
      description: "User interviews and behavioral analysis",
      longDescription:
        "We conducted extensive user interviews with existing Headspace users to understand their meditation habits and pain points. This was complemented by behavioral analysis of app usage patterns to identify where users were dropping off.",
      deliverables: ["User Interview Findings", "Behavioral Analysis Report", "User Personas", "Journey Maps"],
      duration: "3 weeks",
    },
    {
      name: "Strategy",
      description: "Content architecture and habit formation",
      longDescription:
        "Based on research insights, we restructured the content architecture to prioritize habit formation and personalization. We designed user flows that would encourage daily engagement and make meditation feel more accessible to beginners.",
      deliverables: ["Content Architecture", "Habit Formation Framework", "Personalization Strategy"],
      duration: "2 weeks",
    },
    {
      name: "Design",
      description: "Interface design and interaction patterns",
      longDescription:
        "We created a calming, intuitive interface that reduced cognitive load and made meditation sessions easy to start. The visual design focused on creating a sense of peace and mindfulness while maintaining clear navigation and progress indicators.",
      deliverables: ["UI Design System", "High-fidelity Mockups", "Interactive Prototype", "Animation Guidelines"],
      duration: "4 weeks",
    },
    {
      name: "Testing",
      description: "Usability testing and meditation session validation",
      longDescription:
        "We conducted usability testing with both existing users and meditation newcomers to validate our design decisions. Special attention was paid to testing the meditation session experience and onboarding flow.",
      deliverables: ["Usability Test Report", "Feedback Analysis", "Design Iteration Documentation"],
      duration: "3 weeks",
    },
    {
      name: "Implementation",
      description: "Development support and launch preparation",
      longDescription:
        "We worked closely with the development team to ensure the meditative quality of the experience was maintained during implementation. This included detailed specifications for animations, transitions, and audio integration.",
      deliverables: ["Design Specifications", "Development Handoff Documentation", "Launch Guidelines"],
      duration: "6 weeks",
    },
  ],
  research: {
    methods: ["User Interviews", "Behavioral Analytics", "Competitive Analysis", "Meditation Expert Consultation"],
    insights: [
      "Users struggled to maintain consistent meditation habits without proper guidance",
      "The overwhelming amount of content made it difficult for users to choose what to practice",
      "Beginners needed more structured onboarding and progress tracking",
      "Users valued personalized recommendations based on their mood and goals",
    ],
    participants: 32,
    duration: "3 weeks",
  },
  design: {
    tools: ["Figma", "Principle", "Adobe After Effects", "Lottie"],
    iterations: 5,
    screens: 42,
    components: 68,
  },
  testimonial: {
    quote:
      "The redesigned app has transformed how our users engage with meditation. The personalized approach and improved habit formation features have significantly increased user retention and satisfaction.",
    author: "Emily Chen",
    position: "Head of Product, Headspace",
  },
}

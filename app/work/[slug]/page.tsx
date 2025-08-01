"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin, Briefcase, ChevronDown, Users, Target, Heart, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import CursorFollower from "@/components/cursor-follower"
import type { ProjectData } from "@/lib/types" // Import the ProjectData type

// Import individual project data
import { mcgCinemas } from "@/lib/data/mcg-cinemas"
import { takeTheCity } from "@/lib/data/take-the-city"
import { smallshop } from "@/lib/data/smallshop"
import { headspaceRedesign } from "@/lib/data/headspace-redesign"
import { zarkAdminDashboard } from "@/lib/data/zark-admin-dashboard"
import { zumoExchangeFeature } from "@/lib/data/zumo-exchange-feature"
import { waifind } from "@/lib/data/waifind"

// Create the projects data mapping with the correct slugs that match the work page
const projectsData: { [key: string]: ProjectData } = {
  "financial-dashboard": { ...mcgCinemas, color: "0 84% 60%" }, // MCG Cinemas uses this slug with red color
  "take-the-city": { ...takeTheCity, color: "217 91% 45%" }, // Changed to match the darker blue color from take-the-city.ts
  smallshop: { ...smallshop, color: "142 71% 45%" },
  "headspace-redesign": { ...headspaceRedesign, color: "25 95% 53%" },
  "zark-admin-dashboard": { ...zarkAdminDashboard, color: "220 13% 18%" },
  "zumo-exchange-feature": { ...zumoExchangeFeature, color: "45 93% 47%" },
  waifind: { ...waifind, color: "271 81% 56%" },
}

// Generate static params for all valid slugs
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
}

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [project, setProject] = useState<ProjectData | null>(null)
  const [loading, setLoading] = useState(true)
  const [nextProject, setNextProject] = useState<string | null>(null)
  const [prevProject, setPrevProject] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("overview")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [expandedProcess, setExpandedProcess] = useState<number | null>(null)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [slug]) // Re-run when slug changes (when navigating between case studies)

  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const overviewRef = useRef<HTMLDivElement>(null)
  const challengeRef = useRef<HTMLDivElement>(null)
  const solutionRef = useRef<HTMLDivElement>(null)
  const researchRef = useRef<HTMLDivElement>(null)
  const designRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const { scrollYProgress } = useScroll()

  const opacity = useTransform(heroScrollProgress, [0, 1], [1, 0])
  const scale = useTransform(heroScrollProgress, [0, 1], [1, 0.8])
  const y = useTransform(heroScrollProgress, [0, 1], [0, 100])

  useEffect(() => {
    if (slug && projectsData[slug]) {
      setProject(projectsData[slug])
      setLoading(false)

      // Set up next and previous projects
      const projectSlugs = Object.keys(projectsData)
      const currentIndex = projectSlugs.indexOf(slug)

      if (currentIndex > 0) {
        setPrevProject(projectSlugs[currentIndex - 1])
      } else {
        setPrevProject(null)
      }

      if (currentIndex < projectSlugs.length - 1) {
        setNextProject(projectSlugs[currentIndex + 1])
      } else {
        setNextProject(null)
      }

      // Set CSS variable for project color
      const projectColor = projectsData[slug].color
      // Remove the blue color darkening logic and use the original color
      if (projectColor) {
        document.documentElement.style.setProperty("--project-color", projectColor)
      }
    } else {
      // If project not found, stop loading to show error state
      setLoading(false)
    }

    return () => {
      // Reset CSS variable
      document.documentElement.style.removeProperty("--project-color")
    }
  }, [slug])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.body.scrollHeight - windowHeight

      setScrollProgress(scrollPosition / fullHeight)

      // Determine active section based on scroll position
      const sections = [
        { ref: overviewRef, id: "overview" },
        { ref: challengeRef, id: "challenge" },
        { ref: solutionRef, id: "solution" },
        { ref: processRef, id: "process" },
        { ref: designRef, id: "design" },
        { ref: resultsRef, id: "results" },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= windowHeight / 2) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      const yOffset = -100 // Adjust this value as needed
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const toggleProcessExpand = (index: number) => {
    if (expandedProcess === index) {
      setExpandedProcess(null)
    } else {
      setExpandedProcess(index)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium mb-4">Project not found</h1>
        <Button asChild variant="outline">
          <Link href="/work">Return to Projects</Link>
        </Button>
      </div>
    )
  }

  // Scroll Progress Indicator
  const ScrollProgressIndicator = () => (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-background/20">
      <motion.div
        className="h-full bg-[hsl(var(--project-color))]"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />
    </div>
  )

  // Navigation Sidebar
  const NavigationSidebar = () => (
    <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-40 hidden xl:block"></div>
  )

  // Full-screen hero section
  const HeroSection = () => (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
        <motion.div style={{ scale, opacity }} className="w-full h-full">
          <div className="w-full h-full">
            {/* Abstract background pattern */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--project-color)/30%) 0%, transparent 50%), 
                                 radial-gradient(circle at 70% 60%, hsl(var(--project-color)/20%) 0%, transparent 50%),
                                 radial-gradient(circle at 40% 80%, hsl(var(--project-color)/10%) 0%, transparent 40%)`,
              }}
            />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[hsl(var(--project-color)/10%)] blur-3xl" />
            <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-[hsl(var(--project-color)/5%)] blur-3xl" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-20 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block py-1 px-3 rounded-full bg-[hsl(var(--project-color)/10%)] backdrop-blur-sm text-sm mb-4"
            >
              <span className="text-[hsl(var(--project-color))] font-medium">{project.subtitle}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--project-color))] to-[hsl(var(--project-color)/70%)]"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-12"
            >
              {project.overview}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--project-color)/10%)] flex items-center justify-center mr-3">
                <Calendar className="h-5 w-5 text-[hsl(var(--project-color))]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">1 month</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--project-color)/10%)] flex items-center justify-center mr-3">
                <Briefcase className="h-5 w-5 text-[hsl(var(--project-color))]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium">Lead Product Designer</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--project-color)/10%)] flex items-center justify-center mr-3">
                <MapPin className="h-5 w-5 text-[hsl(var(--project-color))]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Team</p>
                <p className="font-medium">Solo Designer</p>
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToContent}
            className="flex flex-col items-center justify-center mx-auto group"
          >
            <span className="text-sm text-muted-foreground mb-2 group-hover:text-foreground transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              className="w-10 h-10 rounded-full bg-[hsl(var(--project-color)/10%)] flex items-center justify-center group-hover:bg-[hsl(var(--project-color)/20%)] transition-colors"
            >
              <ChevronDown className="h-5 w-5 text-[hsl(var(--project-color))]" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )

  // Content sections
  const ContentSections = () => (
    <div ref={contentRef} className="bg-background">
      {/* Only show full case study layout for Zumo, simplified for others */}
      {slug === "zumo-exchange-feature" ? (
        <>
          {/* Project Overview */}
          <section className="py-32 bg-white">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">Project Overview</h2>
                  <div className="h-1 w-24 bg-[hsl(var(--project-color))] mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--project-color))]">Challenge</h3>
                    <p className="text-foreground/80">{project.challenge}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--project-color))]">Solution</h3>
                    <p className="text-foreground/80">{project.solution}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--project-color))]">Results</h3>
                    <p className="text-foreground/80">{project.results}</p>
                  </motion.div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {project.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--project-color))] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Research & Brainstorm Process */}
          <section className="py-32 bg-background">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">Research & Discovery</h2>
                  <div className="h-1 w-24 bg-[hsl(var(--project-color))] mx-auto mb-8"></div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Understanding the problem space through comprehensive research and stakeholder alignment.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--project-color)/10%)] flex items-center justify-center mb-6">
                      <Users className="h-8 w-8 text-[hsl(var(--project-color))]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Internal Research</h3>

                    {/* Internal Research image placeholder */}
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[200px]">
                      <span className="text-gray-500 text-sm">Stakeholder Workshop Images</span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      Stakeholder interviews, business requirements analysis, and internal system audits to understand
                      current state and constraints.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Stakeholder workshops and interviews</li>
                      <li>• Business requirements gathering</li>
                      <li>• Technical constraints analysis</li>
                      <li>• Current system audit</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--project-color)/10%)] flex items-center justify-center mb-6">
                      <Target className="h-8 w-8 text-[hsl(var(--project-color))]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">External Research</h3>

                    {/* External Research image placeholder */}
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[200px]">
                      <span className="text-gray-500 text-sm">Competitive Analysis Board</span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      Market analysis, competitive research, and industry best practices to identify opportunities and
                      benchmarks.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Competitive analysis</li>
                      <li>• Market research</li>
                      <li>• Industry best practices</li>
                      <li>• Technology trends analysis</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--project-color)/10%)] flex items-center justify-center mb-6">
                      <Heart className="h-8 w-8 text-[hsl(var(--project-color))]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">User Research</h3>

                    {/* User Research image placeholder */}
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[200px]">
                      <span className="text-gray-500 text-sm">User Interview & Journey Maps</span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      Direct user feedback through interviews, usability testing, and behavioral analysis to understand
                      real needs.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• User interviews ({project.research.participants} participants)</li>
                      <li>• Usability testing sessions</li>
                      <li>• Journey mapping</li>
                      <li>• Pain point analysis</li>
                    </ul>
                  </motion.div>
                </div>

                {/* Research Insights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">Key Research Insights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.research.insights.map((insight, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-foreground/80">{insight}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="py-32 bg-white">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">Design Process</h2>
                  <div className="h-1 w-24 bg-[hsl(var(--project-color))] mx-auto mb-8"></div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    From initial concepts to final implementation, following a structured design methodology.
                  </p>
                </motion.div>

                <div className="space-y-16">
                  {/* Ideation */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--project-color))] text-white flex items-center justify-center font-bold mr-4">
                          1
                        </div>
                        <h3 className="text-3xl font-bold">Ideation</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Collaborative brainstorming sessions to generate creative solutions based on research insights.
                        We explored multiple approaches and evaluated them against user needs and business constraints.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Brainstorming workshops</li>
                        <li>• Concept sketching</li>
                        <li>• Solution prioritization</li>
                        <li>• Feasibility assessment</li>
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[400px]">
                        <span className="text-gray-500 text-sm">Brainstorming & Concept Sketches</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Information Architecture */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl lg:order-1">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[400px]">
                        <span className="text-gray-500 text-sm">Site Maps & User Flows</span>
                      </div>
                    </div>
                    <div className="lg:order-2">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--project-color))] text-white flex items-center justify-center font-bold mr-4">
                          2
                        </div>
                        <h3 className="text-3xl font-bold">Information Architecture</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Structuring content and functionality to create intuitive navigation paths. We mapped out user
                        flows and organized information hierarchy to support key tasks.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Site mapping</li>
                        <li>• User flow diagrams</li>
                        <li>• Content organization</li>
                        <li>• Navigation structure</li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Wireframing */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--project-color))] text-white flex items-center justify-center font-bold mr-4">
                          3
                        </div>
                        <h3 className="text-3xl font-bold">Wireframing</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Creating low-fidelity layouts to establish structure and functionality before visual design.
                        This allowed for rapid iteration and validation of core concepts.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Low-fidelity wireframes</li>
                        <li>• Layout exploration</li>
                        <li>• Component definition</li>
                        <li>• Interaction patterns</li>
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[400px]">
                        <span className="text-gray-500 text-sm">Low-Fidelity Wireframes</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* High Fidelity */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl lg:order-1">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 min-h-[400px]">
                        <span className="text-gray-500 text-sm">High-Fidelity Designs & Prototypes</span>
                      </div>
                    </div>
                    <div className="lg:order-2">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--project-color))] text-white flex items-center justify-center font-bold mr-4">
                          4
                        </div>
                        <h3 className="text-3xl font-bold">High Fidelity Design</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Developing polished visual designs with final typography, colors, and imagery. Created
                        interactive prototypes for stakeholder review and developer handoff.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Visual design system</li>
                        <li>• Interactive prototypes</li>
                        <li>• Design specifications</li>
                        <li>• Asset preparation</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Considerations & Outcomes */}
          <section className="py-32 bg-background">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">Considerations & Outcomes</h2>
                  <div className="h-1 w-24 bg-[hsl(var(--project-color))] mx-auto mb-8"></div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Key factors that influenced design decisions and the measurable impact of the final solution.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--project-color))]">Design Considerations</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium mb-1">Accessibility</h4>
                          <p className="text-sm text-muted-foreground">
                            Ensuring WCAG compliance and inclusive design practices
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium mb-1">Scalability</h4>
                          <p className="text-sm text-muted-foreground">
                            Designing systems that can grow with business needs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium mb-1">Performance</h4>
                          <p className="text-sm text-muted-foreground">
                            Optimizing for fast load times and smooth interactions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium mb-1">Security</h4>
                          <p className="text-sm text-muted-foreground">
                            Implementing secure design patterns for sensitive data
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--project-color))]">Project Outcomes</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium mb-1">User Satisfaction</h4>
                          <p className="text-sm text-muted-foreground">
                            Improved user experience metrics and positive feedback
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium mb-1">Business Impact</h4>
                          <p className="text-sm text-muted-foreground">
                            Measurable improvements in key business metrics
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium mb-1">Team Efficiency</h4>
                          <p className="text-sm text-muted-foreground">
                            Streamlined workflows and reduced development time
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[hsl(var(--project-color))] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium mb-1">Future Foundation</h4>
                          <p className="text-sm text-muted-foreground">
                            Established design system for continued growth
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-[hsl(var(--project-color)/5%)] p-12 rounded-xl text-center"
                  >
                    <div className="max-w-4xl mx-auto">
                      <div className="w-16 h-16 rounded-full bg-[hsl(var(--project-color)/20%)] flex items-center justify-center mx-auto mb-8">
                        <Quote className="h-8 w-8 text-[hsl(var(--project-color))]" />
                      </div>
                      <blockquote className="text-2xl md:text-3xl font-normal mb-8 text-foreground">
                        "{project.testimonial.quote}"
                      </blockquote>
                      <div>
                        <cite className="text-lg font-medium not-italic">{project.testimonial.author}</cite>
                        <p className="text-muted-foreground">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Simplified layout for all other case studies - just header content and Figma embed */
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Project Overview</h2>
                <div className="h-1 w-24 bg-[hsl(var(--project-color))] mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">{project.overview}</p>

                {/* Stats Section */}
                {project.stats && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                  >
                    {project.stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--project-color))] mb-2">
                          {stat.value}
                        </div>
                        <div className="text-muted-foreground text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* Figma Embed */}
              {project.figmaUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[hsl(var(--project-color)/5%)] p-8 rounded-xl"
                >
                  <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={project.figmaUrl}
                      width="100%"
                      height="100%"
                      allowFullScreen
                      className="border-0"
                      title={`${project.title} Interactive Prototype`}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )

  return (
    <>
      <CursorFollower />
      <ScrollProgressIndicator />
      <NavigationSidebar />
      <HeroSection />
      <ContentSections />
    </>
  )
}
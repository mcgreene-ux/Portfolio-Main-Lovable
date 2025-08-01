"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"
import { ChevronDown, PenTool, Users, Compass, Layers, Lightbulb, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ParallaxText from "@/components/parallax-text"

// Import individual project data
import { mcgCinemas } from "@/lib/data/mcg-cinemas"
import { takeTheCity } from "@/lib/data/take-the-city"
import { smallshop } from "@/lib/data/smallshop"
import { headspaceRedesign } from "@/lib/data/headspace-redesign"
import { zarkAdminDashboard } from "@/lib/data/zark-admin-dashboard"
import { zumoExchangeFeature } from "@/lib/data/zumo-exchange-feature"
import { waifind } from "@/lib/data/waifind"

// Project data for the homepage - consistent with work page
const projects = [
  {
    title: mcgCinemas.title,
    category: mcgCinemas.subtitle,
    description: mcgCinemas.overview,
    slug: "financial-dashboard", // Use the consistent slug
    color: mcgCinemas.color,
    image: mcgCinemas.headerImage || "/placeholder.svg",
  },
  {
    title: takeTheCity.title,
    category: takeTheCity.subtitle,
    description: takeTheCity.overview,
    slug: takeTheCity.slug,
    color: takeTheCity.color,
    image: takeTheCity.headerImage || "/placeholder.svg",
  },
  {
    title: smallshop.title,
    category: smallshop.subtitle,
    description: smallshop.overview,
    slug: smallshop.slug,
    color: smallshop.color,
    image: smallshop.headerImage || "/placeholder.svg",
  },
  {
    title: headspaceRedesign.title,
    category: headspaceRedesign.subtitle,
    description: headspaceRedesign.overview,
    slug: headspaceRedesign.slug,
    color: headspaceRedesign.color,
    image: headspaceRedesign.headerImage, // Placeholder as it's not in data
  },
  {
    title: zarkAdminDashboard.title,
    category: zarkAdminDashboard.subtitle,
    description: zarkAdminDashboard.overview,
    slug: zarkAdminDashboard.slug,
    color: zarkAdminDashboard.color,
    image: zarkAdminDashboard.headerImage || "/placeholder.svg",
  },
  {
    title: zumoExchangeFeature.title,
    category: zumoExchangeFeature.subtitle,
    description: zumoExchangeFeature.overview,
    slug: zumoExchangeFeature.slug,
    color: zumoExchangeFeature.color,
    image: zumoExchangeFeature.headerImage || "/placeholder.svg",
    inProgress: zumoExchangeFeature.inProgress,
  },
  {
    title: waifind.title,
    category: waifind.subtitle,
    description: waifind.overview,
    slug: waifind.slug,
    color: waifind.color,
    image: waifind.headerImage || "/placeholder.svg",
    inProgress: waifind.inProgress,
  },
]

const services = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Product & UX/UI Design",
    description:
      "Crafting intuitive and engaging user experiences from concept to launch, including robust design systems and interface design.",
  },
   {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Product Strategy",
    description: "Using business and product objectives to drive data-informed design.",
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: "User Research",
    description: "Conducting research to understand user needs, behaviors, and pain points to inform design decisions.",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "AI Tools for Design",
    description: "Leveraging AI tools to enhance design velocity, research synthesis, and documentation processes.",
  },
 
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "V-Shaped Designer",
    description:
      "With my broad range of complimentary design skills, you get a true all-rounder who excels at performing multiple roles at once.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Stakeholder Alignment",
    description:
      "Building internal alignment and facilitating collaboration between design, product, and business teams.",
  },
]

const stats = [
  { value: 8, label: "Years Experience" },
  { value: 120, label: "Projects Completed" },
  { value: 42, label: "Happy Clients" },
  { value: 12, label: "Design Awards" },
]

const testimonials = [
  {
    quote:
      "Working with this designer transformed our product. The attention to detail and user-centered approach resulted in a significant increase in user engagement and satisfaction.",
    author: "Sarah Johnson",
    position: "Product Manager at TechCorp",
    image: "/professional-woman-portrait.png",
  },
  {
    quote:
      "The design process was collaborative and insightful. We received not just beautiful designs, but strategic solutions that addressed our business challenges.",
    author: "Michael Chen",
    position: "CEO at StartupX",
    image: "/professional-man-portrait.png",
  },
  {
    quote:
      "Our app redesign exceeded all expectations. The intuitive interface and thoughtful interactions have received overwhelmingly positive feedback from our users.",
    author: "Emily Rodriguez",
    position: "Head of Product at AppWorks",
    image: "/professional-woman-portrait-business.png",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business, users, and objectives through research and collaboration.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a strategic approach to design that aligns with your goals and user needs.",
  },
  {
    number: "03",
    title: "Design",
    description: "Creating intuitive, engaging, and visually appealing solutions through iterative design.",
  },
  {
    number: "04",
    title: "Implementation",
    description: "Bringing designs to life with clean code and attention to detail.",
  },
  {
    number: "05",
    title: "Evaluation",
    description: "Testing and refining the solution based on user feedback and performance metrics.",
  },
]

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeProcess, setActiveProcess] = useState(0)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        const fullHeight = document.body.scrollHeight - windowHeight
        setScrollProgress(scrollPosition / (fullHeight - windowHeight))
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const springScrollProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <div ref={scrollRef} className="fixed top-0 left-0 right-0 h-1 z-50">
        <motion.div className="h-full bg-foreground" style={{ scaleX: springScrollProgress, transformOrigin: "0%" }} />
      </div>

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 pt-24 relative z-10">
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter mb-6"
            >
              Product Designer
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-normal mb-8 max-w-xl"
            >
              I'm a Senior Product & UX/UI designer with 10+ years' of creative experience, skilled at delivering
              impactful products solo or in small teams.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                <Link href="/work">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-foreground text-foreground hover:bg-foreground/10"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Device frame */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                {/* Main design showcase container */}
                <div className="relative w-[480px] h-[480px] mx-auto">
                  {/* Left screen - Mobile mockup */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute top-[100px] left-[40px] w-[170px] h-[340px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[28px] shadow-2xl overflow-hidden border border-gray-600 z-20 transform rotate-[-5deg]"
                  >
                    {/* Mobile screen */}
                    <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 rounded-[24px] m-1 p-4">
                      {/* Status indicators */}
                      <div className="flex justify-between items-center mb-6 pt-2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-blue-400 rounded-sm"></div>
                          <div className="w-1 h-2 bg-gray-300 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App content - Analytics Dashboard */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="space-y-4"
                      >
                        {/* Header with profile */}
                        <div className="flex items-center space-x-3 pb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
                          <div className="space-y-2 flex-1">
                            <div className="h-2 w-20 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"></div>
                            <div className="h-1.5 w-16 bg-gray-400 rounded-full"></div>
                          </div>
                        </div>

                        {/* Analytics cards */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + i * 0.2, duration: 0.4 }}
                            className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-xl shadow-sm border border-gray-100"
                          >
                            <div className="flex items-center space-x-3 mb-3">
                              <div
                                className={`w-8 h-8 rounded-lg shadow-sm ${
                                  i === 0
                                    ? "bg-gradient-to-br from-blue-400 to-blue-500"
                                    : i === 1
                                      ? "bg-gradient-to-br from-blue-300 to-blue-400"
                                      : "bg-gradient-to-br from-gray-400 to-gray-500"
                                }`}
                              ></div>
                              <div className="flex-1 space-y-1">
                                <div className="h-2 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full w-3/4"></div>
                                <div className="h-1.5 bg-gray-300 rounded-full w-1/2"></div>
                              </div>
                            </div>
                            {/* Chart representation */}
                            <div className="space-y-2">
                              <div className="flex items-end space-x-1 h-8">
                                <div className="w-2 bg-blue-300 rounded-t" style={{ height: "60%" }}></div>
                                <div className="w-2 bg-blue-400 rounded-t" style={{ height: "80%" }}></div>
                                <div className="w-2 bg-blue-500 rounded-t" style={{ height: "100%" }}></div>
                                <div className="w-2 bg-blue-400 rounded-t" style={{ height: "70%" }}></div>
                                <div className="w-2 bg-blue-300 rounded-t" style={{ height: "50%" }}></div>
                              </div>
                            </div>
                          </motion.div>
                        ))}

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2, duration: 0.5 }}
                          className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mt-6 shadow-lg"
                        >
                          <div className="w-6 h-6 bg-white/90 rounded-full shadow-sm"></div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Center screen - Desktop mockup */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute top-[40px] left-1/2 transform -translate-x-1/2 w-[300px] h-[190px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-600 z-10"
                  >
                    {/* Desktop screen */}
                    <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 p-4 rounded-lg m-1">
                      {/* Browser chrome */}
                      <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-100">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-sm"></div>
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm"></div>
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-sm"></div>
                        <div className="flex-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md h-6 ml-4 shadow-inner"></div>
                      </div>

                      {/* Website content - Portfolio/Dashboard */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="space-y-4"
                      >
                        <div className="h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg w-3/4 shadow-sm"></div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full w-full"></div>
                          <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full w-5/6"></div>
                          <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full w-4/6"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-4">
                          <div className="h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm border border-gray-200 p-2">
                            <div className="w-full h-3 bg-blue-200 rounded mb-1"></div>
                            <div className="w-2/3 h-2 bg-gray-300 rounded"></div>
                          </div>
                          <div className="h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm border border-blue-200 p-2">
                            <div className="w-full h-3 bg-blue-400 rounded mb-1"></div>
                            <div className="w-2/3 h-2 bg-blue-300 rounded"></div>
                          </div>
                          <div className="h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm border border-gray-200 p-2">
                            <div className="w-full h-3 bg-gray-300 rounded mb-1"></div>
                            <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg w-2/3 mt-4 shadow-lg"></div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Right screen - Design tool interface */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="absolute top-[120px] right-[40px] w-[180px] h-[240px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-600 z-30 transform rotate-[5deg]"
                  >
                    <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 rounded-lg m-1 p-3">
                      {/* Design tool header */}
                      <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-500"></div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                        <div className="flex-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-sm h-3 ml-2"></div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.5 }}
                        className="space-y-4"
                      >
                        {/* Tool palette */}
                        <div className="flex space-x-2">
                          <div className="w-7 h-7 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-sm border border-gray-200"></div>
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-sm border border-blue-300"></div>
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg shadow-sm border border-blue-400"></div>
                          <div className="w-7 h-7 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-sm border border-gray-400"></div>
                        </div>

                        {/* Design canvas - Wireframe */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 shadow-inner">
                          <div className="space-y-3">
                            <div className="h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg w-2/3 shadow-sm"></div>
                            <div className="space-y-2">
                              <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full w-full"></div>
                              <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full w-4/5"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <div className="h-10 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 shadow-sm p-1">
                                <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="w-2/3 h-1 bg-gray-100 rounded"></div>
                              </div>
                              <div className="h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-sm p-1">
                                <div className="w-full h-2 bg-blue-300 rounded mb-1"></div>
                                <div className="w-2/3 h-1 bg-blue-200 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Properties panel */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="h-2 w-12 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
                            <div className="w-8 h-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded border border-blue-200"></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="h-2 w-10 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
                            <div className="w-6 h-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded border border-gray-200"></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="h-2 w-14 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
                            <div className="w-10 h-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded border border-blue-200"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Floating design elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    className="absolute top-[20px] left-[30px] w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center border border-blue-400 z-40 shadow-lg"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    className="absolute bottom-[30px] right-[50px] w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl rotate-45 border border-gray-500 z-40 shadow-lg"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl transform rotate-45 shadow-inner"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                    className="absolute top-[280px] left-[20px] w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full border border-blue-500 z-40 shadow-lg"
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full m-1.5 shadow-sm"></div>
                  </motion.div>

                  {/* Additional floating elements for polish */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4, duration: 0.6 }}
                    className="absolute top-[60px] right-[20px] w-6 h-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg rotate-12 border border-gray-400 z-40 shadow-md"
                  ></motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.6, duration: 0.6 }}
                    className="absolute bottom-[80px] left-[60px] w-4 h-4 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full border border-blue-400 z-40 shadow-md"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute top-20 right-0 w-20 h-20 rounded-full bg-primary/10 z-0"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
                className="absolute bottom-40 left-0 w-16 h-16 rounded-full bg-primary/20 z-0"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.8 }}
                className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-primary/15 z-0"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <ChevronDown className="h-6 w-6 text-foreground" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-white pointer-events-none" />
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-normal mb-4">What I Bring to the Table</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core design capabilities that drive product success and user satisfaction across teams and organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-8 rounded-lg shadow-sm group hover:shadow-md transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-6 text-foreground"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={targetRef} className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div style={{ opacity, scale }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-normal mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent projects showcasing my approach to product design, user experience, and creative
              problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-background pointer-events-none" />
        <div className="relative">
          <ParallaxText baseVelocity={-5}>design • innovation • creativity • excellence • </ParallaxText>
          <ParallaxText baseVelocity={5}>strategy • user experience • interface • product • </ParallaxText>
        </div>
      </section>
    </>
  )
}

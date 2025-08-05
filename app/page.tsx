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
          {/* Large, very subtle background blob */}
<motion.div
  className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
  animate={{ y: [0, -30, 0], x: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
  transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
/>
{/* Medium, slightly more defined blob */}
<motion.div
  className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
  animate={{ y: [0, 40, 0], x: [0, -40, 0], opacity: [0.15, 0.25, 0.15] }}
  transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 1 }}
/>
{/* Smaller, faster moving element */}
<motion.div
  className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-xl bg-secondary/10 blur-2xl rotate-45"
  animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
/>
{/* Another medium blob, different position */}
<motion.div
  className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
  animate={{ y: [0, -25, 0], x: [0, -25, 0], opacity: [0.05, 0.15, 0.05] }}
  transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
/>
{/* A more elongated, subtle shape */}
<motion.div
  className="absolute top-1/2 left-1/2 w-60 h-30 rounded-full bg-secondary/5 blur-xl"
  animate={{ x: [0, 50, 0], y: [0, -20, 0], opacity: [0.08, 0.18, 0.08] }}
  transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", delay: 3 }}
/>

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
                <div className="relative w-[500px] h-[500px] mx-auto perspective-1000">
                  {/* 3D Isometric Workspace Scene */}
                  
                  {/* Main Desk Surface */}
                  <motion.div
                    initial={{ opacity: 0, rotateX: 45, rotateY: -15 }}
                    animate={{ opacity: 1, rotateX: 45, rotateY: -15 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Desk shadow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300/50 to-slate-400/50 rounded-2xl transform translate-y-2 translate-x-2 -z-10"></div>
                  </motion.div>

                  {/* Floating Laptop */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: 0 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, -10, 0], 
                      rotateX: [-5, 5, -5],
                      rotateY: [0, 2, 0]
                    }}
                    transition={{ 
                      delay: 0.5, 
                      duration: 2,
                      y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                      rotateX: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                      rotateY: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                    }}
                    className="absolute top-[120px] left-[120px] w-[260px] h-[180px] transform-gpu"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Laptop Base */}
                    <div className="absolute bottom-0 w-full h-[20px] bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg shadow-xl transform rotateX-75"></div>
                    
                    {/* Laptop Screen */}
                    <div className="absolute top-0 w-full h-[160px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-lg shadow-2xl border border-slate-600 overflow-hidden">
                      {/* Screen Content */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-t-lg m-1">
                        {/* Browser Chrome */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          <div className="flex-1 bg-white/60 rounded h-4 ml-2"></div>
                        </div>
                        
                        {/* Dynamic Code Editor */}
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1, duration: 0.5 }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.random() * 80 + 20}%` }}
                              transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
                              className={`h-2 rounded ${
                                i % 3 === 0 ? 'bg-blue-400' : 
                                i % 3 === 1 ? 'bg-purple-400' : 'bg-gray-400'
                              }`}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Mobile Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -100, rotateZ: -15 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      y: [0, -15, 0],
                      rotateZ: [-15, -10, -15]
                    }}
                    transition={{ 
                      delay: 0.8, 
                      duration: 1,
                      y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
                      rotateZ: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    className="absolute top-[80px] left-[20px] w-[120px] h-[240px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[24px] shadow-2xl border border-slate-600 overflow-hidden z-30"
                  >
                    {/* Phone Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 rounded-[20px] m-1 p-3">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="w-6 h-2 bg-green-400 rounded-sm"></div>
                      </div>
                      
                      {/* App Interface */}
                      <motion.div className="space-y-3">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                            className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-2 rounded-lg"
                          >
                            <div className={`w-6 h-6 rounded-lg ${
                              i % 2 === 0 ? 'bg-blue-400' : 'bg-purple-400'
                            }`}></div>
                            <div className="flex-1 space-y-1">
                              <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
                              <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Floating Tablet */}
                  <motion.div
                    initial={{ opacity: 0, x: 100, rotateZ: 10 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      y: [0, -8, 0],
                      rotateZ: [10, 15, 10]
                    }}
                    transition={{ 
                      delay: 1.2, 
                      duration: 1,
                      y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
                      rotateZ: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
                    }}
                    className="absolute top-[200px] right-[30px] w-[180px] h-[240px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 overflow-hidden z-20"
                  >
                    {/* Tablet Screen */}
                    <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-xl m-1 p-4">
                      {/* Design Canvas */}
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 relative overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                      >
                        {/* Design Elements */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{ 
                              scale: 1, 
                              rotate: [0, 360],
                              x: [0, Math.sin(i) * 20, 0],
                              y: [0, Math.cos(i) * 15, 0]
                            }}
                            transition={{ 
                              delay: 2.2 + i * 0.1, 
                              duration: 0.8,
                              rotate: { repeat: Infinity, duration: 8 + i, ease: "linear" },
                              x: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" },
                              y: { repeat: Infinity, duration: 3 + i, ease: "easeInOut" }
                            }}
                            className={`absolute w-4 h-4 rounded-full ${
                              i % 3 === 0 ? 'bg-purple-400' : 
                              i % 3 === 1 ? 'bg-pink-400' : 'bg-blue-400'
                            }`}
                            style={{
                              left: `${20 + (i % 3) * 30}%`,
                              top: `${20 + Math.floor(i / 3) * 40}%`
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Floating Design Elements */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.3, 0.8, 0.3], 
                        scale: [0.5, 1.2, 0.5],
                        rotate: [0, 360],
                        x: [0, Math.sin(i * 0.5) * 50, 0],
                        y: [0, Math.cos(i * 0.5) * 30, 0]
                      }}
                      transition={{ 
                        delay: 2.5 + i * 0.2, 
                        duration: 1,
                        opacity: { repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" },
                        scale: { repeat: Infinity, duration: 4 + i * 0.3, ease: "easeInOut" },
                        rotate: { repeat: Infinity, duration: 10 + i, ease: "linear" },
                        x: { repeat: Infinity, duration: 6 + i * 0.5, ease: "easeInOut" },
                        y: { repeat: Infinity, duration: 5 + i * 0.3, ease: "easeInOut" }
                      }}
                      className={`absolute w-3 h-3 z-40 ${
                        i % 4 === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600 rounded-full' :
                        i % 4 === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg rotate-45' :
                        i % 4 === 2 ? 'bg-gradient-to-br from-pink-400 to-pink-600 rounded-full' :
                        'bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg'
                      } shadow-lg`}
                      style={{
                        left: `${10 + (i % 4) * 25}%`,
                        top: `${10 + Math.floor(i / 4) * 30}%`
                      }}
                    />
                  ))}

                  {/* Ambient Light Effects */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ 
                      delay: 1, 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.05, 0.2, 0.05] }}
                    transition={{ 
                      delay: 2, 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-radial from-pink-400/15 via-indigo-400/8 to-transparent rounded-full blur-2xl transform rotate-45"
                  />
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

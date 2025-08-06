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
]

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Product Design",
    description: "End-to-end product design from concept to launch, focusing on user needs and business goals."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User Research",
    description: "In-depth user research and testing to inform design decisions and validate solutions."
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Strategy",
    description: "Design strategy and planning to align creative solutions with business objectives."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Design Systems",
    description: "Scalable design systems and component libraries for consistent user experiences."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Creative problem-solving and innovative approaches to complex design challenges."
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Digital Products",
    description: "Web and mobile applications designed for optimal user engagement and conversion."
  }
]

export default function HomePage() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-background z-50">
        <motion.div className="h-full bg-foreground" style={{ scaleX: springScrollProgress, transformOrigin: "0%" }} />
      </div>

      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight"
            >
              Senior Product & UX/UI Designer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-normal mb-8 max-w-xl"
            >
              I'm a Senior Product & UX/UI designer with 10+ years' of creative experience, skilled at delivering
              user-centered design solutions that drive business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/work">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
                <div className="relative w-[700px] h-[700px] mx-auto">
                  {/* UX/UI Design Process Visualization */}
                  
                  {/* Central Design Canvas */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-20"
                  >
                    {/* Canvas Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-12 flex items-center px-6">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-white text-sm font-medium">Design System</span>
                      </div>
                    </div>
                    
                    {/* Design Grid */}
                    <div className="p-6 space-y-4">
                      {/* Color Palette */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex space-x-3"
                      >
                        {['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-cyan-500'].map((color, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                            className={`w-8 h-8 ${color} rounded-lg shadow-md`}
                          />
                        ))}
                      </motion.div>
                      
                      {/* Component Library */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="space-y-3"
                      >
                        {/* Buttons */}
                        <div className="flex space-x-2">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-medium">Primary</div>
                          <div className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg text-xs font-medium">Secondary</div>
                        </div>
                        
                        {/* Form Elements */}
                        <div className="space-y-2">
                          <div className="bg-gray-100 h-8 rounded-md border border-gray-200"></div>
                          <div className="bg-gray-100 h-6 rounded-md border border-gray-200 w-3/4"></div>
                        </div>
                        
                        {/* Cards */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg border border-gray-200">
                          <div className="h-2 bg-gray-300 rounded w-2/3 mb-2"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-full mb-1"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Floating Wireframe Elements */}
                  <motion.div
                    initial={{ opacity: 0, x: -100, rotate: -10 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      y: [0, -10, 0],
                      rotate: [-10, -5, -10]
                    }}
                    transition={{ 
                      delay: 0.5, 
                      duration: 1,
                      y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                    }}
                    className="absolute top-20 left-10 w-48 h-64 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-30"
                  >
                    {/* Wireframe Header */}
                    <div className="bg-gray-100 h-8 flex items-center px-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Wireframe Content */}
                    <div className="p-4 space-y-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="h-4 bg-gray-200 rounded"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                        className="h-3 bg-gray-200 rounded"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ delay: 1.9, duration: 0.8 }}
                        className="h-3 bg-gray-200 rounded"
                      />
                      
                      {/* Wireframe Boxes */}
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2 + i * 0.2, duration: 0.5 }}
                            className="h-12 bg-gray-100 rounded border-2 border-dashed border-gray-300"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* User Journey Flow */}
                  <motion.div
                    initial={{ opacity: 0, x: 100, rotate: 8 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      y: [0, -8, 0],
                      rotate: [8, 12, 8]
                    }}
                    transition={{ 
                      delay: 0.8, 
                      duration: 1,
                      y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
                    }}
                    className="absolute top-32 right-8 w-56 h-72 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-25"
                  >
                    {/* Flow Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-10 flex items-center px-4">
                      <span className="text-white text-sm font-medium">User Journey</span>
                    </div>
                    
                    {/* Flow Steps */}
                    <div className="p-4 space-y-4">
                      {['Discovery', 'Research', 'Design', 'Test', 'Launch'].map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.8 + i * 0.3, duration: 0.5 }}
                          className="flex items-center space-x-3"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2 + i * 0.3, duration: 0.3 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                              i === 0 ? 'bg-blue-500' :
                              i === 1 ? 'bg-purple-500' :
                              i === 2 ? 'bg-pink-500' :
                              i === 3 ? 'bg-indigo-500' : 'bg-green-500'
                            }`}
                          >
                            {i + 1}
                          </motion.div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-800">{step}</div>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 2.2 + i * 0.3, duration: 0.8 }}
                              className="h-1 bg-gray-200 rounded mt-1"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Floating UI Elements */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -15 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      rotate: [-15, -10, -15],
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      delay: 1.2, 
                      duration: 1,
                      rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                      x: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    className="absolute bottom-16 left-16 w-40 h-48 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-15"
                  >
                    {/* Mobile UI Mockup */}
                    <div className="bg-gray-50 h-6 flex items-center justify-center">
                      <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    <div className="p-3 space-y-3">
                      {/* Navigation */}
                      <div className="flex justify-between items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      </div>
                      
                      {/* Content Cards */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 2.5 + i * 0.2, duration: 0.5 }}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg"
                        >
                          <div className="h-2 bg-gray-300 rounded w-3/4 mb-1"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Floating Design Tokens */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.4, 0.8, 0.4], 
                        scale: [0.8, 1.2, 0.8],
                        rotate: [0, 180, 360],
                        x: [0, Math.sin(i * 0.8) * 30, 0],
                        y: [0, Math.cos(i * 0.8) * 20, 0]
                      }}
                      transition={{ 
                        delay: 3 + i * 0.1, 
                        duration: 1,
                        opacity: { repeat: Infinity, duration: 3 + i * 0.3, ease: "easeInOut" },
                        scale: { repeat: Infinity, duration: 4 + i * 0.2, ease: "easeInOut" },
                        rotate: { repeat: Infinity, duration: 8 + i, ease: "linear" },
                        x: { repeat: Infinity, duration: 5 + i * 0.4, ease: "easeInOut" },
                        y: { repeat: Infinity, duration: 4 + i * 0.3, ease: "easeInOut" }
                      }}
                      className={`absolute w-3 h-3 z-40 ${
                        i % 5 === 0 ? 'bg-blue-500 rounded-full' :
                        i % 5 === 1 ? 'bg-purple-500 rounded-sm rotate-45' :
                        i % 5 === 2 ? 'bg-pink-500 rounded-full' :
                        i % 5 === 3 ? 'bg-indigo-500 rounded-sm' :
                        'bg-cyan-500 rounded-full'
                      } shadow-lg`}
                      style={{
                        left: `${15 + (i % 4) * 25}%`,
                        top: `${15 + Math.floor(i / 4) * 30}%`
                      }}
                    />
                  ))}

                  {/* Connecting Lines Animation */}
                  <svg className="absolute inset-0 w-full h-full z-10" style={{ pointerEvents: 'none' }}>
                    {[...Array(6)].map((_, i) => (
                      <motion.path
                        key={i}
                        d={`M${100 + i * 100},${150 + i * 50} Q${200 + i * 80},${200 + i * 30} ${300 + i * 60},${250 + i * 40}`}
                        stroke={i % 2 === 0 ? '#3B82F6' : '#8B5CF6'}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ delay: 2 + i * 0.3, duration: 2, ease: "easeInOut" }}
                      />
                    ))}
                  </svg>

                  {/* Ambient Glow Effects */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ 
                      delay: 1, 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.05, 0.25, 0.05] }}
                    transition={{ 
                      delay: 2, 
                      duration: 5,
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
                className="absolute top-20 right-0 w-28 h-28 rounded-full bg-primary/10 z-0"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
                className="absolute bottom-40 left-0 w-22 h-22 rounded-full bg-primary/20 z-0"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.8 }}
                className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
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
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-normal mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating meaningful digital experiences through strategic design thinking and user-centered
              approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6"
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

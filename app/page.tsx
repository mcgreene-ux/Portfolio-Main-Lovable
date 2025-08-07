"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Heart, 
  Star, 
  Circle, 
  Triangle, 
  Square,
  Play,
  Pause,
  Volume2,
  VolumeX
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Import project data
import { mcgCinemas } from "@/lib/data/mcg-cinemas"
import { takeTheCity } from "@/lib/data/take-the-city"
import { smallshop } from "@/lib/data/smallshop"
import { headspaceRedesign } from "@/lib/data/headspace-redesign"

const projects = [
  {
    title: mcgCinemas.title,
    category: mcgCinemas.subtitle,
    description: mcgCinemas.overview,
    slug: "financial-dashboard",
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
    image: headspaceRedesign.headerImage || "/placeholder.svg",
  },
]

const skills = [
  { name: "Product Design", level: 95, icon: <Circle className="w-4 h-4" /> },
  { name: "User Research", level: 90, icon: <Triangle className="w-4 h-4" /> },
  { name: "Prototyping", level: 92, icon: <Square className="w-4 h-4" /> },
  { name: "Design Systems", level: 88, icon: <Star className="w-4 h-4" /> },
  { name: "Frontend Dev", level: 75, icon: <Zap className="w-4 h-4" /> },
  { name: "Strategy", level: 85, icon: <Heart className="w-4 h-4" /> },
]

const testimonials = [
  {
    quote: "Marie's design thinking transformed our entire product approach. Her ability to balance user needs with business goals is exceptional.",
    author: "Sarah Chen",
    role: "Product Manager, TechCorp",
    avatar: "SC"
  },
  {
    quote: "Working with Marie was a game-changer. She brought clarity to complex problems and delivered solutions that exceeded expectations.",
    author: "David Rodriguez",
    role: "CEO, StartupXYZ",
    avatar: "DR"
  },
  {
    quote: "Marie's research-driven approach and attention to detail resulted in a 40% increase in user engagement for our platform.",
    author: "Emily Johnson",
    role: "Head of Design, InnovateLab",
    avatar: "EJ"
  }
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const skillsRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const { scrollYProgress: skillsScrollProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"]
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, -200])
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0])
  const skillsY = useTransform(skillsScrollProgress, [0, 1], [100, -100])

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <>
      {/* Animated Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: springScrollProgress }}
      />

      {/* Interactive Cursor Follower */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80" />
      </motion.div>

      {/* Hero Section - Completely Reimagined */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Geometric Shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0
            }}
            animate={{
              x: Math.random() * (window.innerWidth || 1200),
              y: Math.random() * (window.innerHeight || 800),
              rotate: 360,
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            {i % 4 === 0 && <Circle className="w-4 h-4 text-blue-400" />}
            {i % 4 === 1 && <Triangle className="w-4 h-4 text-purple-400" />}
            {i % 4 === 2 && <Square className="w-4 h-4 text-pink-400" />}
            {i % 4 === 3 && <Star className="w-4 h-4 text-cyan-400" />}
          </motion.div>
        ))}

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 md:px-8 h-screen flex items-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Available for new projects
                  </span>
                </div>

                <motion.h1 
                  className="text-6xl md:text-8xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    Marie
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Greene
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="space-y-4"
                >
                  <p className="text-2xl text-gray-300 font-light">
                    Senior Product & UX/UI Designer
                  </p>
                  <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                    Crafting exceptional digital experiences through research-driven design, 
                    strategic thinking, and user-centered innovation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg rounded-full"
                    asChild
                  >
                    <Link href="/work" className="flex items-center">
                      View My Work
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                    asChild
                  >
                    <Link href="/contact">Let's Talk</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Interactive Design Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative"
            >
              {/* Main Canvas */}
              <div className="relative w-full h-[600px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
                {/* Canvas Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white/70 text-sm">Design Canvas</span>
                </div>

                {/* Animated Design Elements */}
                <div className="relative p-8 h-full">
                  {/* Floating Cards */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-white/10 p-4"
                      style={{
                        width: 120 + Math.random() * 80,
                        height: 80 + Math.random() * 60,
                        left: `${10 + Math.random() * 60}%`,
                        top: `${10 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    >
                      <div className="space-y-2">
                        <div className="h-2 bg-white/30 rounded w-3/4"></div>
                        <div className="h-1.5 bg-white/20 rounded w-full"></div>
                        <div className="h-1.5 bg-white/20 rounded w-1/2"></div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Central Design System */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="text-center space-y-4">
                      <div className="text-white font-semibold">Design System</div>
                      <div className="grid grid-cols-3 gap-2">
                        {['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-cyan-500', 'bg-indigo-500', 'bg-violet-500'].map((color, i) => (
                          <motion.div
                            key={i}
                            className={`w-6 h-6 ${color} rounded-lg`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.path
                        key={i}
                        d={`M${50 + i * 60},${100 + i * 40} Q${150 + i * 30},${150 + i * 20} ${250 + i * 40},${200 + i * 30}`}
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="4,4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Visualization */}
      <section ref={skillsRef} className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <motion.div style={{ y: skillsY }} className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A decade of experience across the full spectrum of product design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-purple-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                    </div>
                    <span className="text-2xl font-bold text-purple-600">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Project Showcase */}
      <section className="py-32 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Featured Work
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transforming complex problems into elegant, user-centered solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-105">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <div className="absolute bottom-6 left-6 z-20 text-white">
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold mt-3">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      <div className="flex items-center mt-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="font-medium">View Project</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Testimonials */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              What People Say
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <blockquote className="text-3xl md:text-4xl font-light text-gray-800 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-2 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Let's collaborate on your next project and bring your vision to life through thoughtful, user-centered design.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl rounded-full font-semibold"
                asChild
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-12 py-6 text-xl rounded-full backdrop-blur-sm"
                asChild
              >
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
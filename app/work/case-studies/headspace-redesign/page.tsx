"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Calendar, MapPin, Briefcase, ArrowLeft } from "lucide-react"
import CursorFollower from "@/components/cursor-follower"
import { headspaceRedesign } from "@/lib/data/headspace-redesign"

export default function HeadspaceRedesignPage() {
  const project = headspaceRedesign
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(heroScrollProgress, [0, 1], [1, 0])
  const scale = useTransform(heroScrollProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <CursorFollower />
      <style jsx global>{`
        :root {
          --project-color: ${project.color || "210 50% 50%"};
        }
      `}</style>

      {/* Full-screen hero section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
          <motion.div style={{ scale, opacity }} className="w-full h-full">
            <div className="w-full h-full">
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
            <Link href="/work" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to work
            </Link>

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
                  <p className="font-medium">6 months</p>
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
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <div className="bg-background">
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
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">{project.overview}</p>

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
      </div>
    </>
  )
}

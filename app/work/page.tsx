"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Filter, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import CursorFollower from "@/components/cursor-follower"
import ProjectCard from "@/components/project-card" // Import the new ProjectCard

// Import individual project data
import { mcgCinemas } from "@/lib/data/mcg-cinemas"
import { takeTheCity } from "@/lib/data/take-the-city"
import { smallshop } from "@/lib/data/smallshop"
import { headspaceRedesign } from "@/lib/data/headspace-redesign"
import { zarkAdminDashboard } from "@/lib/data/zark-admin-dashboard"
import { zumoExchangeFeature } from "@/lib/data/zumo-exchange-feature"
import { waifind } from "@/lib/data/waifind"

// Project data - Consistent with projectsData in [slug]/page.tsx
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
    image: headspaceRedesign.headerImage,
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

export default function WorkPage() {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true })

  return (
    <>
      <CursorFollower />
      <div className="pt-24 pb-16">
        {/* Header section */}
        <section ref={headerRef} className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-white -z-10" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-foreground/[0.02] rounded-bl-full -z-10" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-foreground/[0.02] rounded-tr-full -z-10" />

          <div className="container mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <div className="inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-foreground/[0.05] flex items-center justify-center mx-auto">
                  <Briefcase className="h-8 w-8 text-foreground/70" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 leading-tight pb-2">
                Some of my work
              </h1>
              <p className="text-xl text-muted-foreground">
                A curated selection of my recent projects showcasing my approach to product design, user experience, and
                creative problem-solving.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-8">
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-foreground/[0.05] flex items-center justify-center mx-auto mb-6">
                  <Filter className="h-8 w-8 text-foreground/50" />
                </div>
                <p className="text-xl text-muted-foreground mb-6">No projects found matching your criteria.</p>
                <Button onClick={() => {}} className="rounded-full">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />

          <div className="container mx-auto px-6 md:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Let's work together on your next project
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground mb-10"
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg"
                >
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

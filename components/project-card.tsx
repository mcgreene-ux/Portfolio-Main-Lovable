"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  category: string
  description: string
  image: string
  slug: string
  color: string
  inProgress?: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  // Define which projects should not be clickable
  const nonClickableProjects = ["zumo-exchange-feature", "waifind"]
  const isClickable = !nonClickableProjects.includes(project.slug)

  const cardContent = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/images/ux-in-progress.png"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {project.inProgress && (
          <div className="absolute top-0 right-4 bg-purple-500/20 backdrop-blur-md border border-purple-300/30 text-purple-900 py-1 rounded-full text-sm font-medium my-4 text-left px-3.5">
            In Progress
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs py-1 px-3 rounded-full bg-[var(--card-color)]/10 text-[var(--card-color)]">
            {project.title === "Zark Admin Dashboard" ? "SAAS INTERNAL + B2B" : project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-black transition-colors pl-3">{project.title}</h3>

        <p className="text-muted-foreground mb-6 line-clamp-2 pl-3 text-sm">
          {project.inProgress ? "Current project, coming soon." : project.description}
        </p>

        {project.inProgress && (
          <div className="flex items-center text-muted-foreground pl-3">
            <span className="mr-2 font-medium text-sm">Coming Soon</span>
          </div>
        )}
      </div>
    </>
  )

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-md ${
        isClickable ? "cursor-pointer" : "cursor-default"
      }`}
      style={
        {
          "--card-color": `hsl(${project.color})`,
        } as React.CSSProperties
      }
    >
      {isClickable ? (
        <Link href={`/work/${project.slug}`} className="block">
          {cardContent}
        </Link>
      ) : (
        <div className="block">{cardContent}</div>
      )}
    </motion.div>
  )
}

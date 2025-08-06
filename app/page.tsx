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
                {/* Floating Design Elements Around MacBook */}
                {[...Array(8)].map((_, i) => (
        <motion.div className="h-full bg-foreground" style={{ scaleX: springScrollProgress, transformOrigin: "0%" }} />
      </div>

      <section className="relative min-h-screen flex items-center">
                      opacity: [0.3, 0.7, 0.3], 
                      scale: [0.9, 1.1, 0.9],
                      rotate: [0, 360],
                      x: [0, Math.sin(i * 1.2) * 40, 0],
                      y: [0, Math.cos(i * 1.2) * 30, 0]
  transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
/>
                      delay: 2 + i * 0.2, 
<motion.div
                      opacity: { repeat: Infinity, duration: 4 + i * 0.5, ease: "easeInOut" },
                      scale: { repeat: Infinity, duration: 3 + i * 0.3, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 10 + i * 2, ease: "linear" },
                      x: { repeat: Infinity, duration: 6 + i * 0.5, ease: "easeInOut" },
                      y: { repeat: Infinity, duration: 5 + i * 0.4, ease: "easeInOut" }
<motion.div
                    className={`absolute w-4 h-4 z-5 ${
                      i % 4 === 0 ? 'bg-blue-500 rounded-full' :
                      i % 4 === 1 ? 'bg-purple-500 rounded-sm rotate-45' :
                      i % 4 === 2 ? 'bg-pink-500 rounded-full' :
                      'bg-indigo-500 rounded-sm'
  className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
  animate={{ y: [0, -25, 0], x: [0, -25, 0], opacity: [0.05, 0.15, 0.05] }}
                      left: `${10 + (i % 4) * 30}%`,
                      top: `${20 + Math.floor(i / 4) * 40}%`
{/* A more elongated, subtle shape */}
<motion.div
  className="absolute top-1/2 left-1/2 w-60 h-30 rounded-full bg-secondary/5 blur-xl"
  animate={{ x: [0, 50, 0], y: [0, -20, 0], opacity: [0.08, 0.18, 0.08] }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-normal mb-8 max-w-xl"
                  animate={{ opacity: [0.05, 0.2, 0.05] }}
              I'm a Senior Product & UX/UI designer with 10+ years' of creative experience, skilled at delivering
                    delay: 0.5, 
                    duration: 6,
            {/* MacBook Design Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-purple-400/5 to-transparent rounded-full blur-3xl"
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
                  {/* MacBook Screen */}
                  <div className="relative w-full h-[320px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl border-4 border-gray-700 shadow-2xl overflow-hidden">
                    {/* Screen Bezel */}
                    <div className="absolute inset-2 bg-black rounded-xl overflow-hidden">
                      {/* macOS Menu Bar */}
                      <div className="h-7 bg-gray-900 flex items-center px-4 border-b border-gray-700">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-white text-xs font-medium">Figma - Design Portfolio</span>
                        </div>
                      </div>

                      {/* Screen Content Area - This is where you'll add your images */}
                      <div className="relative h-[calc(100%-28px)] bg-gradient-to-br from-gray-100 to-gray-200">
                        {/* Layer 1 - Background Design */}
                        <motion.div
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, duration: 1 }}
                          className="absolute inset-0 bg-white m-4 rounded-lg shadow-lg overflow-hidden"
                        >
                          {/* Placeholder for your background design image */}
                          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                            <div className="text-center text-gray-400">
                              <div className="text-sm font-medium mb-2">Background Layer</div>
                              <div className="text-xs">Add your design image here</div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Layer 2 - Main Design */}
                        <motion.div
                          initial={{ opacity: 0, x: -50, rotate: -2 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            rotate: [0, 1, 0],
                            y: [0, -5, 0]
                          }}
                          transition={{ 
                            delay: 0.8, 
                            duration: 1,
                            rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                          }}
                          className="absolute top-8 left-8 w-[280px] h-[200px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-20"
                        >
                          {/* Placeholder for your main design image */}
                          <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
                            <div className="text-center text-gray-400">
                              <div className="text-sm font-medium mb-2">Main Design</div>
                              <div className="text-xs">Add your UI design here</div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Layer 3 - Mobile Design */}
                        <motion.div
                          initial={{ opacity: 0, x: 50, rotate: 3 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            rotate: [0, -2, 0],
                            y: [0, -8, 0]
                          }}
                          transition={{ 
                            delay: 1.1, 
                            duration: 1,
                            rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                            y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
                          }}
                          className="absolute top-12 right-12 w-[140px] h-[240px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden z-30"
                        >
                          {/* Mobile Screen */}
                          <div className="absolute inset-2 bg-white rounded-xl overflow-hidden">
                            {/* Mobile Status Bar */}
                            <div className="h-6 bg-gray-50 flex items-center justify-between px-3">
                              <div className="text-xs font-medium">9:41</div>
                              <div className="flex space-x-1">
                                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                              </div>
                            </div>
                            {/* Mobile Content Area */}
                            <div className="h-[calc(100%-24px)] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
                              <div className="text-center text-gray-400">
                                <div className="text-xs font-medium mb-1">Mobile Design</div>
                                <div className="text-[10px]">Add mobile UI here</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Layer 4 - Floating Design Elements */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            rotate: [0, 360],
                            x: [0, 20, 0],
                            y: [0, -15, 0]
                          }}
                          transition={{ 
                            delay: 1.4, 
                            duration: 1,
                            rotate: { repeat: Infinity, duration: 8, ease: "linear" },
                            x: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                            y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                          }}
                          className="absolute bottom-8 left-16 w-[100px] h-[100px] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden z-25"
                        >
                          {/* Placeholder for design component */}
                          <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                            <div className="text-center text-gray-400">
                              <div className="text-xs font-medium mb-1">Component</div>
                              <div className="text-[10px]">Design element</div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Layer 5 - Color Palette */}
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            x: [0, -10, 0],
                            rotate: [0, -1, 0]
                          }}
                          transition={{ 
                            delay: 1.7, 
                            duration: 1,
                            x: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                            rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" }
                          }}
                          className="absolute bottom-12 right-20 w-[120px] h-[60px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-25"
                        >
                          {/* Color swatches */}
                          <div className="p-3">
                            <div className="flex space-x-2 mb-2">
                              <div className="w-4 h-4 bg-blue-500 rounded"></div>
                              <div className="w-4 h-4 bg-purple-500 rounded"></div>
                              <div className="w-4 h-4 bg-pink-500 rounded"></div>
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium">Color Palette</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"

                  {/* MacBook Base/Keyboard */}
                  <div className="absolute bottom-0 w-full h-[80px] bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-3xl shadow-lg">
                    {/* Trackpad */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-200 rounded-lg border border-gray-300"></div>
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

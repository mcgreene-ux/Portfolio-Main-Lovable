"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Twitter,
  Github,
  MapPin,
  Calendar,
  Award,
  Users,
  Coffee,
  Heart,
  Lightbulb,
  Target,
  Zap,
  Star,
  BookOpen,
  Camera,
  Music,
  Plane,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = [
  { name: "UI/UX Design", level: 95, category: "Design" },
  { name: "Figma", level: 98, category: "Tools" },
  { name: "User Research", level: 90, category: "Research" },
  { name: "Prototyping", level: 92, category: "Design" },
  { name: "Design Systems", level: 88, category: "Design" },
  { name: "Frontend Development", level: 75, category: "Development" },
  { name: "Adobe Creative Suite", level: 85, category: "Tools" },
  { name: "Sketch", level: 80, category: "Tools" },
]

const experience = [
  {
    company: "Zumo",
    role: "Product Designer",
    period: "5 months",
    description:
      "Sole product designer leading a full redesign and feature augmentation of the Zumo Enterprise dashboard for B2B clients.",
    achievements: [
      "Leads user research including live interviews, snapshot summaries and opportunity mapping",
      "Conducts extensive competitor analysis to shape strategic research and product direction",
      "Initiating the first design system for the dashboard",
      "Uses AI tools to enhance design velocity, research synthesis, and documentation",
      "Leading the rebranding of the company's refucused B2B strategy, focusing on UX design",
    ],
  },
  {
    company: "Zark Parking Solutions",
    role: "Senior UX Designer",
    period: "1 year",
    description: "Led design across B2C apps, B2B dashboards, and internal tools across multiple product lines.",
    achievements: [
      "Designed and delivered scalable flows for new rentable product types",
      "Maintained and expanded the company's design system and branded map interfaces",
      "Promoted to Senior Designer based on strategic impact and leadership",
      "Used AI tools for wireframing, visual exploration, and research support",
      "Promoted to Senior UX Designer during employment",
    ],
  },
  {
    company: "Brown Thomas Arnotts",
    role: "Junior Web Designer",
    period: "1 year 3 months",
    description: "Contributed to award-winning UX and content strategy for mobile and web platforms.",
    achievements: [
      "Helped win 'Best App' and 'Best eCommerce Website' at Irish eCommerce and Spider Awards",
      "Advocated for accessibility, UX best practices, and user-first thinking across teams",
      "Created inclusive email marketing content and organised digital assets",
    ],
  },
  {
    company: "Oliverian School",
    role: "Marketing Coordinator",
    period: "1 year 6 months",
    description: "Redesigned sections of the school's website to improve structure and usability.",
    achievements: [
      "Created visual content and campaigns across digital channels",
      "Led internal content audits and developed SEO-focused outreach strategies",
      "Gained early experience in stakeholder interviews and journey-mapping content flows",
    ],
  },
  {
    company: "CHQ Dublin",
    role: "Marketing Administrator",
    period: "2 years 1 month",
    description: "Partnered with internal teams and tenants to create digital marketing materials.",
    achievements: [
      "Refreshed web content and visual storytelling across branded touchpoints",
      "Managed a digital asset archive used for internal and public-facing communications",
    ],
  },
]

const values = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "User-Centered",
    description: "Every design decision starts with understanding user needs and behaviors.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description: "Constantly exploring new emerging technologies, product discovery methods and design trends.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Data-Driven",
    description: "Creating designs that solve real problems and deliver measurable impact.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Empathy",
    description: "Building inclusive experiences that consider diverse perspectives and needs.",
  },
]

const interests = [
  { icon: <Camera className="h-6 w-6" />, name: "Photography" },
  { icon: <Music className="h-6 w-6" />, name: "Music Production" },
  { icon: <Plane className="h-6 w-6" />, name: "Travel" },
  { icon: <BookOpen className="h-6 w-6" />, name: "Reading" },
  { icon: <Coffee className="h-6 w-6" />, name: "Coffee Culture" },
]

export default function AboutPage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("All")
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const skillCategories = ["All", ...Array.from(new Set(skills.map((skill) => skill.category)))]
  const filteredSkills =
    activeSkillCategory === "All" ? skills : skills.filter((skill) => skill.category === activeSkillCategory)

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/3 blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
        />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Open to work</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Marie</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              >
                I'm a Senior Product & UX/UI designer with 10+ years' of creative experience, skilled at delivering
                impactful products solo or in small teams.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <span>Based in Edinburgh, UK</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <span>10+ Years Experience</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                  <Link href="/resume">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex space-x-6 mt-8"
              >
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ opacity, scale }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Profile image container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Marie Greene - Product Designer"
                    fill
                    className="object-cover"
                  />

                  {/* Floating badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Award Winner</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium">Top Rated</span>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <Zap className="h-12 w-12 text-primary" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center"
                >
                  <Heart className="h-10 w-10 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-background" />
        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">My Story</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-8" />
              <p className="text-xl text-muted-foreground">
                From marketing coordinator to senior product Designer - a journey of continuous learning and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-foreground/80 space-y-6"
            >
              <p>
                I'm a Senior Product Designer with a uniquely well-rounded foundation: I didn't just arrive at product
                design—I earned my way here through a decade of hands-on work in marketing, content, design, and digital
                storytelling. That diverse background gives me the ability to see problems from multiple perspectives:
                user, business, brand, and system.
              </p>

              <p>
                I specialise in being the first or only designer at early-stage companies, where I can establish design
                foundations from scratch. My expertise lies in navigating ambiguous environments, delivering high-impact
                work with limited resources and working cross functionally across teams.
              </p>

              <p>
                Where others specialise in one slice of the design process, I've led across the full spectrum: research,
                journey mapping, UI systems, stakeholder alignment, and implementation. I've worked solo, in small
                startup teams, and within large organizations—adapting quickly while holding onto the thread of what
                really matters: user needs and business goals.
              </p>

              <p>
                I thrive as the sole designer in early-stage environments where I can shape product direction from the
                ground up. My speciality is joining startups with low design maturity and establishing foundational
                systems and processes that scale with the business. I'm comfortable wearing multiple hats—from
                researcher to UI designer to design strategist—and enjoy the challenge of building comprehensive
                solutions with limited resources.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Values</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide my work and shape every design decision I make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-background" />
        <div className="container mx-auto px-6 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through different companies and roles, each contributing to my growth as a Product/UX designer.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 bg-primary rounded-full border-4 border-background" />

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="text-muted-foreground">{exp.period}</div>
                      </div>

                      <p className="text-muted-foreground mb-6">{exp.description}</p>

                      <div>
                        <h4 className="font-medium mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning & Growth */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-background" />
        <div className="container mx-auto px-6 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Continuous Learning & Growth</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Staying ahead of industry trends and continuously expanding my knowledge to deliver innovative solutions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-foreground/80 space-y-6 mb-12"
            >
              <p>
                The design industry evolves rapidly, and I believe in staying at the forefront of emerging trends,
                methodologies, and technologies. My approach to continuous learning ensures that I can bring fresh
                perspectives and innovative solutions to every project.
              </p>

              <p>
                Two key frameworks that recently transformed my approach to product innovation are{" "}
                <strong>Continuous Discovery Habits</strong> by Teresa Torres and <strong>Blue Ocean Strategy</strong>.
                Torres' methodology helps me maintain ongoing customer contact and evidence-based decision making, while
                Blue Ocean Strategy guides me in identifying uncontested market spaces and creating new demand rather
                than competing in existing markets.
              </p>
              <p>
                {" "}
                I constantly experiment with and learn about new and emerging products and design tools. v0 is a current
                favourite - I built and maintain my site with v0 and deploy it on Vercel.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {[
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: "Industry Research",
                  description:
                    "Regularly reading design publications, research papers, and following thought leaders to stay current with trends.",
                },
                {
                  icon: <Lightbulb className="h-8 w-8" />,
                  title: "Experimentation",
                  description:
                    "Testing new tools, techniques, and methodologies in personal projects to expand my skillset and capabilities.",
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Continuous Discovery",
                  description:
                    "Applying Teresa Torres' framework for ongoing customer research and evidence-based product decisions.",
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Innovation Strategy",
                  description:
                    "Using Blue Ocean Strategy principles to identify new market opportunities and create differentiated solutions.",
                },
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "Skill Development",
                  description:
                    "Pursuing certifications, courses, and training to deepen expertise in emerging design and research methodologies.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with passionate teams. Let's discuss how we
                can bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                  <Link href="/work">View My Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

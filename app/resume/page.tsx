"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, Mail, Phone, Globe, Linkedin, Award, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download delay
    setTimeout(() => {
      // Create a link to download the PDF
      const link = document.createElement("a")
      link.href = "/marie-greene-cv.pdf" // This would be your actual PDF file
      link.download = "Marie-Greene-CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setIsDownloading(false)
    }, 1500)
  }

  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-6 md:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-normal mb-4"
            >
              Curriculum Vitae
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground"
            >
              Download my full resume or view it online below
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              size="lg"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              {isDownloading ? (
                <>
                  <div className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin mr-2"></div>
                  Preparing PDF...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </>
              )}
            </Button>
          </motion.div>

          {/* Online Resume Preview */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-primary/10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Marie Greene"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">Marie Greene</h2>
                  <p className="text-xl text-primary mb-4">Senior Product Designer | Early-Stage Specialist</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-6">
                    <a
                      href="mailto:mariecgreene@gmail.com"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">mariecgreene@gmail.com</span>
                    </a>
                    <a href="tel:+447474048392" className="flex items-center hover:text-primary transition-colors">
                      <Phone className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">+44 (0)7474 048 392</span>
                    </a>
                    <a
                      href="https://mariegreene.design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <Globe className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">mariegreene.design</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/marie-greene"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">linkedin.com/in/marie-greene</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Career Narrative */}
              <div className="mb-10">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </span>
                  Career Narrative
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a Senior Product Designer with a uniquely well-rounded foundation: I didn't just arrive at
                    product design— I earned my way here through a decade of hands-on work in marketing, content,
                    design, and digital storytelling.
                  </p>
                  <p>
                    Where others specialize in one slice of the design process, I've led across the full spectrum:
                    research, journey mapping, UI systems, stakeholder alignment, and implementation. I've worked solo,
                    in small startup teams, and within large organisations—adapting quickly while holding onto the
                    thread of what really matters: user needs and business goals.
                  </p>
                  <p>
                    I thrive as the sole designer in early-stage environments where I can shape product direction from
                    the ground up. My speciality is joining startups with low design maturity and establishing
                    foundational systems and processes that scale with the business. I'm comfortable wearing multiple
                    hats—from researcher to UI designer to design strategist—and enjoy the challenge of building
                    comprehensive solutions with limited resources.
                  </p>
                  <p>
                    I'm especially comfortable in ambiguous, early-stage environments where design maturity is low. At
                    Zumo, I was the only product designer, leading the overhaul of the enterprise dashboard, introducing
                    fiat infrastructure, conducting foundational research, and initiating a brand-new design system from
                    scratch. At Zark, I scaled the product to support entirely new business models. At Brown Thomas, I
                    helped elevate the experience of a luxury retail app, resulting in award-winning recognition. Across
                    these roles, I've integrated AI tools to supercharge everything from research synthesis to rapid
                    ideation—helping teams move faster, without compromising depth.
                  </p>
                  <p>
                    I don't just design solutions—I uncover the right problems, build internal alignment, and set up
                    systems that make good design repeatable.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-10">
                <h3 className="text-xl font-medium mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </span>
                  Experience
                </h3>

                <div className="space-y-8">
                  {/* Zumo */}
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                    <h4 className="text-lg font-medium">Product Designer</h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-primary">Zumo</p>
                      <p className="text-sm text-muted-foreground">Feb - Now</p>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1">
                      <li>
                        Sole product designer leading a full redesign of the Zumo Enterprise dashboard for B2B clients.
                      </li>
                      <li>
                        Leads user research including live interviews, snapshot summaries and opportunity mapping.
                      </li>
                      <li>Conducts extensive competitor analysis to shape strategic research and product direction.</li>
                      <li>
                        Collaborates on lean canvases and strategic curves to align design with product and business
                        goals.
                      </li>
                      <li>Initiated the first design system for the dashboard.</li>
                      <li>Works cross-functionally with product and engineering to deliver iterative improvements.</li>
                      <li>Uses AI tools to enhance design velocity, research synthesis, and documentation.</li>
                      <li>Leads the visual rebranding of the company (due to restructuring)</li>
                    </ul>
                  </div>

                  {/* Zark */}
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                    <h4 className="text-lg font-medium">Senior UX Designer</h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-primary">Zark Parking Solutions</p>
                      <p className="text-sm text-muted-foreground">1 year</p>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1">
                      <li>Led design as the sole designer across B2C apps, B2B dashboards, and internal tools.</li>
                      <li>Designed and delivered scalable flows for new rentable product types.</li>
                      <li>Visualised internal data to streamline internal decision-making and customer support.</li>
                      <li>Maintained and expanded the company's design system and branded map interfaces.</li>
                      <li>Promoted to Senior Designer based on strategic impact and leadership.</li>
                      <li>Used AI tools for wireframing, visual exploration, and research support.</li>
                    </ul>
                  </div>

                  {/* Brown Thomas */}
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                    <h4 className="text-lg font-medium">Junior Web Designer (Fixed Term)</h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-primary">Brown Thomas Arnotts</p>
                      <p className="text-sm text-muted-foreground">1 year 2 months</p>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1">
                      <li>Contributed to award-winning UX and content strategy for mobile and web platforms.</li>
                      <li>Helped win 'Best App' and 'Best eCommerce Website' at Irish eCommerce and Spider Awards.</li>
                      <li>Advocated for accessibility, UX best practices, and user-first thinking across teams.</li>
                      <li>Created inclusive email marketing content and organised digital assets.</li>
                    </ul>
                  </div>

                  {/* Oliverian School */}
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                    <h4 className="text-lg font-medium">Marketing Coordinator</h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-primary">Oliverian School</p>
                      <p className="text-sm text-muted-foreground">1 year 6 months</p>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1">
                      <li>Redesigned sections of the school's website to improve structure and usability.</li>
                      <li>Created visual content and campaigns across digital channels (web, social, email).</li>
                      <li>Led internal content audits and developed SEO-focused outreach strategies.</li>
                      <li>Gained early experience in stakeholder interviews and journey-mapping content flows.</li>
                    </ul>
                  </div>

                  {/* Earlier roles - collapsed for brevity */}
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                    <h4 className="text-lg font-medium">Earlier Roles</h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-primary">CHQ Dublin & Dogpatch Labs</p>
                      <p className="text-sm text-muted-foreground">6 years total</p>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1">
                      <li>Marketing Administrator at CHQ Dublin (Mar 2018 – Apr 2020)</li>
                      <li>Marketing Assistant & Photographer at CHQ & Dogpatch Labs (Sep 2014 – Sep 2015)</li>
                      <li>Managed digital assets, updated website architecture, and created user-focused content</li>
                      <li>Developed promotional materials and conducted competitive research</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="mb-10">
                <h3 className="text-xl font-medium mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </span>
                  Education & Certifications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h4 className="font-medium mb-1">MSc, Digital Media Design</h4>
                    <p className="text-muted-foreground mb-2">University of Edinburgh</p>
                    <p className="text-sm text-primary">Distinction</p>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h4 className="font-medium mb-1">BA (Hons), Visual Culture</h4>
                    <p className="text-muted-foreground mb-2">NCAD Dublin</p>
                    <p className="text-sm text-primary">First Class Honours</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span>Google UX Design Certificate</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span>Adobe Certified in Photoshop</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span>Certified Digital Marketing Professional</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-medium mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </span>
                  Tools & Skills
                </h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Figma",
                    "Design Systems",
                    "UX Research",
                    "AI Tools for Design",
                    "Adobe Photoshop",
                    "Accessibility",
                    "Early-Stage Startup Experience",
                    "Journey Mapping",
                    "Solo Designer Leadership",
                    "Stakeholder Alignment",
                    "User Research",
                    "Digital Marketing",
                  ].map((skill) => (
                    <div key={skill} className="bg-primary/10 px-4 py-2 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-sm text-muted-foreground">
                  <p>• References available upon request</p>
                  <p>• Volunteer experience available upon request</p>
                  <p>• UK/EU/USA Work Rights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

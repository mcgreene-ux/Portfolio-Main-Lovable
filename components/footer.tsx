"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/marie-greene", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github }, // Replace with actual username
  { name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter }, // Replace with actual username
  { name: "Email", href: "mailto:mariecgreene@gmail.com", icon: Mail },
]

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Work", href: "/work" },
      { name: "About", href: "/about" },
      // { name: "Blog", href: "/blog" }, // Keep blog commented out
      { name: "Contact", href: "/contact" }, // Ensure this line is present and correct
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              Portfolio
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              I'm a Senior Product & UX/UI designer with 10+ years' of creative experience, skilled at delivering
              impactful products solo or in small teams.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    
                  </Link>
                )
              })}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

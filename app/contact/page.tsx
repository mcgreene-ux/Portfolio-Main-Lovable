"use client"

import { useActionState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Send, User, Type, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitContactForm, type ContactFormState } from "./actions"

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/marie-greene", icon: Linkedin, user: "/marie-greene" },
  { name: "Email", href: "mailto:mariecgreene@gmail.com", icon: Mail, user: "mariecgreene@gmail.com" },
]

const initialFormState: ContactFormState = {
  message: "",
  type: null,
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialFormState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.type === "success") {
      formRef.current?.reset()
    }
  }, [state.type])

  return (
    <div className="pt-24 pb-16">
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-white">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/[0.02] rounded-bl-full -z-10" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/[0.02] rounded-tr-full -z-10" />
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/[0.05] flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-primary/70" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 leading-tight pb-2">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind, a question, or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background p-8 md:p-10 rounded-xl shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-8">Send me a message</h2>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="flex items-center mb-2">
                    <User className="h-4 w-4 mr-2 text-primary" /> Name
                  </Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                  {state.errors?.name && (
                    <p className="text-sm text-red-500 mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {state.errors.name[0]}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center mb-2">
                    <Mail className="h-4 w-4 mr-2 text-primary" /> Email
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  {state.errors?.email && (
                    <p className="text-sm text-red-500 mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {state.errors.email[0]}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject" className="flex items-center mb-2">
                    <Type className="h-4 w-4 mr-2 text-primary" /> Subject (Optional)
                  </Label>
                  <Input id="subject" name="subject" placeholder="Regarding..." />
                  {state.errors?.subject && (
                    <p className="text-sm text-red-500 mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {state.errors.subject[0]}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="flex items-center mb-2">
                    <MessageSquare className="h-4 w-4 mr-2 text-primary" /> Message
                  </Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." rows={6} required />
                  {state.errors?.message && (
                    <p className="text-sm text-red-500 mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {state.errors.message[0]}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  {isPending ? (
                    <>
                      <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>

                {state.type === "success" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    {state.message}
                  </div>
                )}
                {state.type === "error" && state.message && !state.errors && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    {state.message}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
                <p className="text-muted-foreground mb-6">
                  Alternatively, you can reach out to me directly through email or connect with me on social media.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <span className="font-medium">{link.name}</span>
                          <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            {link.user}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

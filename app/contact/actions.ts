"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
})

export interface ContactFormState {
  message: string
  type: "success" | "error" | null
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      type: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, subject, message } = validatedFields.data

  // Simulate sending an email or saving to a database
  console.log("Contact form submission received:")
  console.log({ name, email, subject, message })

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, you would send an email here.
  // For example, using a service like Resend or Nodemailer.

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    type: "success",
  }
}

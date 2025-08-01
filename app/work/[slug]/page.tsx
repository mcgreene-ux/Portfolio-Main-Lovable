import { notFound, redirect } from "next/navigation"

// Define the correct slug mapping
const validSlugs = [
  "financial-dashboard", // MCG Cinemas
  "take-the-city", // TTC
  "smallshop", // Smallshop
  "headspace-redesign", // Headspace
  "zark-admin-dashboard", // Zark Admin
  "zumo-exchange-feature", // Zumo Exchange
  "waifind", // Waifind
]

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const slug = params.slug

  if (!validSlugs.includes(slug)) {
    notFound()
  }

  // Redirect to the specific case study page
  redirect(`/work/case-studies/${slug}`)
}

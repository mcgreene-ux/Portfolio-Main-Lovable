import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Product Design in the Digital Age",
    excerpt:
      "Exploring how product design has transformed with the rise of digital platforms and changing user expectations.",
    content: `
      <p>Product design has undergone a remarkable transformation in the digital age. What once was primarily focused on physical form and function has evolved into a complex discipline that encompasses user experience, digital interfaces, and seamless integration across multiple touchpoints.</p>
      
      <h2>The Shift from Physical to Digital</h2>
      <p>The transition from traditional product design to digital-first thinking has fundamentally changed how we approach problem-solving. Designers now must consider not just how something looks and feels, but how it behaves, responds, and adapts to user needs in real-time.</p>
      
      <h2>User-Centered Design Philosophy</h2>
      <p>Modern product design places the user at the center of every decision. This shift has led to more intuitive, accessible, and meaningful digital experiences that truly serve user needs rather than just business objectives.</p>
    `,
    date: "May 10, 2023",
    readTime: "8 min read",
    category: "Design Trends",
    image: "/placeholder-13slw.png",
    slug: "evolution-product-design",
  },
  // Add other blog posts here...
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-normal mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </header>

          <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  )
}

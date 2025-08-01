"use client"

interface FigmaEmbedProps {
  url: string
  title: string
  height?: number
}

export default function FigmaEmbed({ url, title, height = 600 }: FigmaEmbedProps) {
  // Extract the file ID from the Figma URL
  const getEmbedUrl = (figmaUrl: string) => {
    try {
      const urlParts = figmaUrl.split("/")
      const fileIndex = urlParts.findIndex((part) => part === "file")
      if (fileIndex !== -1 && urlParts[fileIndex + 1]) {
        const fileId = urlParts[fileIndex + 1]
        return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`
      }
    } catch (error) {
      console.error("Error parsing Figma URL:", error)
    }
    return null
  }

  const embedUrl = getEmbedUrl(url)

  if (!embedUrl) {
    return (
      <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center" style={{ height: `${height}px` }}>
        <div className="text-center p-8">
          <p className="text-gray-600 mb-4">Unable to embed Figma file</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            View in Figma
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-sm">
      <iframe src={embedUrl} title={title} width="100%" height={height} allowFullScreen className="border-0" />
    </div>
  )
}

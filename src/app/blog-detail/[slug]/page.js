// ✅ this file is still a Server Component by default
// But your BlogDetailPage inside is marked as "use client"
import axios from "axios"
import BlogDetailPageClient from "./BlogDetailPageClient"  // move your client code here
// import { useRouter } from "next/navigation"

// --- Metadata for SEO ---
export async function generateMetadata({ params }) {
  try {
    const res = await axios.get(
      `https://dashboard.digitalnawab.com/api/blogdetail`,
      { params: { url: params.slug } }
    )

    const data = res?.data?.data

    if (!data) {
      return {
        title: "Blog | Digital Nawab",
        description: "Read the latest blogs from Digital Nawab.",
      }
    }

    return {
      title: data.meta_key || data.title,
      description:
        data.meta_desc ||
        (data.description ? data.description.replace(/<[^>]+>/g, "").slice(0, 160) : ""),
      keywords: Array.isArray(data.keyword)
        ? data.keyword.filter(Boolean).join(", ")
        : "",
      alternates: {
        canonical: `https://www.digitalnawab.com/blog/${data.url}`,
      },
      openGraph: {
        title: data.meta_key || data.title,
        description: data.meta_desc,
        url: `https://www.digitalnawab.com/blog/${data.url}`,
        type: "article",
        authors: [data.author],
        publishedTime: data.published,
        images: [
          {
            url: `https://www.digitalnawab.com/${data.banner_img}`,
            width: 1200,
            height: 630,
            alt: data.meta_key || data.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: data.meta_key || data.title,
        description: data.meta_desc,
        images: [`https://www.digitalnawab.com/${data.card_img}`],
      },
    }
  } catch (error) {
    console.error("Failed to fetch blog metadata:", error)
    return {
      title: "Blog | Digital Nawab",
      description: "Read the latest blogs from Digital Nawab.",
    }
  }
}

// --- Page Component (Client Side) ---
export default function BlogDetailWrapper({ params }) {

  return <BlogDetailPageClient params={params.slug} />
}


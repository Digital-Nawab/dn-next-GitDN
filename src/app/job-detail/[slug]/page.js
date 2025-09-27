// app/career/[slug]/page.js
import JobDetailPageClient from "./JobDetailPageClient"

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `https://dashboard.digitalnawab.com/api/careerdetail/${params.slug}`,
      { next: { revalidate: 60 } } // cache & revalidate every 60s
    )
    const response = await res.json()
    const job = response?.data

    if (!job) {
      return {
        title: "Career Opportunities | Digital Nawab",
        description: "Explore exciting job opportunities at Digital Nawab.",
      }
    }

    return {
      title: job.title || job.desig,
      description:
        job.about_role?.slice(0, 160) ||
        `Apply now for ${job.desig} at Digital Nawab in ${job.city}.`,
      alternates: {
        canonical: `https://www.digitalnawab.com/career/${params.slug}`,
      },
      openGraph: {
        title: job.title || job.desig,
        description:
          job.about_role?.slice(0, 160) ||
          `Apply now for ${job.desig} at Digital Nawab in ${job.city}.`,
        url: `https://www.digitalnawab.com/career/${params.slug}`,
        type: "website",
        locale: "en_US",
        siteName: "Digital Nawab",
      },
      twitter: {
        card: "summary_large_image",
        title: job.title || job.desig,
        description:
          job.about_role?.slice(0, 160) ||
          `Apply now for ${job.desig} at Digital Nawab in ${job.city}.`,
      },
    }
  } catch (err) {
    console.error("Error fetching job metadata:", err)
    return {
      title: "Career Opportunities | Digital Nawab",
      description: "Explore exciting job opportunities at Digital Nawab.",
    }
  }
}

export default function JobDetailWrapper({ params }) {
  return <JobDetailPageClient slug={params.slug} />
}

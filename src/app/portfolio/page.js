import Image from 'next/image'
import PortfolioShowcase from '@/components/portfolio/PortfolioShowcase'
import React from 'react'
export const metadata = {
  title: 'Digital Marketing Portfolio | SEO, PPC, Social Media & Web Projects',
  description:
    'Explore the portfolio of Digital Nawab, a leading digital marketing agency in Lucknow. See our successful SEO, PPC, Social Media, Web Design & Development & Graphic Design projects. See how we grow brands online.',
  alternates: {
    canonical: 'https://digitalnawab.vercel.app/portfolio',
  },
}
const page = () => {
  return (
    <div>
        <PortfolioShowcase/>
    </div>
  )
}

export default page
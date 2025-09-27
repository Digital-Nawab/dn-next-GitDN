import Image from 'next/image'
import { BlogPage } from '@/components/Blog/Blog'
import React from 'react'
export const metadata = {
  title: 'Digital Marketing Blogs | Tips & Strategies to Grow Your Business Online',
  description:
    'Explore Digital Nawab’s expert blogs on SEO, Social Media, PPC & Web Marketing. Learn actionable strategies to increase website traffic, improve ROI, and grow your business online.',
  alternates: {
    canonical: 'https://www.digitalnawab.com/blog',
  },
}
const page = () => {
  return (
    <div>
        <BlogPage/>
    </div>
  )
}

export default page
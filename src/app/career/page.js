import Image from 'next/image'
import Career from '@/components/carrer/Career'
import React from 'react'
export const metadata = {
  title: 'Digital Marketing Jobs in Lucknow | SEO, PPC, Social Media & Web Careers',
  description:
    'Build your career in digital marketing with Digital Nawab – Lucknow’s top agency. Apply now for SEO, PPC, Social Media & Web development jobs. Send your resume today!',
  alternates: {
    canonical: 'https://www.digitalnawab.com/career',
  },
}
const page = () => {
  return (
    <div>
        <Career/>
    </div>
  )
}

export default page
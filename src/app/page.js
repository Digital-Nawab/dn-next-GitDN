// "use client";
import Image from 'next/image'
import React from 'react'
import './globals.css'
import Home from '@/components/Home/Home';
export const metadata = {
  title: 'Best Digital Marketing Company in Lucknow | SEO, PPC, SMM & Web Solutions',
  description:
    'Digital Nawab is a leading digital marketing agency in Lucknow, India. We deliver expert SEO, SMO, PPC, E-commerce, and web solutions to grow your business online. We craft innovative and results-driven digital marketing strategies to grow your business online and maximize ROI. Trusted by 250+ clients. Get your free business analysis.',
  alternates: {
    canonical: 'https://www.digitalnawab.com/',
  },
}
const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page
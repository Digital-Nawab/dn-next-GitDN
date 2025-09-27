import Image from 'next/image'

import SocialMarketing from '@/components/SocialMarketing/SocialMarketing'
import React from 'react'
export const metadata = {
  title: 'Social Media Marketing Agency Lucknow, India | SMO & SMM Expert Services',
  description:
    'Boost your brand awareness, generate leads & increase sales with the best social media marketing agency in Lucknow, India. Boost your brand & drive leads from social media with Digital Nawab.',
  alternates: {
    canonical: 'https://www.digitalnawab.com/service/social-media-marketing',
  },
}
const page = () => {
  return (
    <div>
      <SocialMarketing/>
    </div>
  )
}

export default page
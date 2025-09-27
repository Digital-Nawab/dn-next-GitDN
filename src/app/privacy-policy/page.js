import PrivacyPolicy from '@/components/policy/PrivacyPolicy'
import React from 'react'
export const metadata = {
  title: 'Privacy Policy | Digital Nawab – Digital Marketing Agency',
  description:
    'Read the Privacy Policy of Digital Nawab, a leading digital marketing agency in Lucknow. Learn how we protect client data and ensure safe online interactions.',
  alternates: {
    canonical: 'https://www.digitalnawab.com/privacy-policy',
  },
}
const page = () => {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  )
}

export default page
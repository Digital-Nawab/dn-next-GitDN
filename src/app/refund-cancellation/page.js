import RefundCancellationPolicy from '@/components/policy/Refund'
import React from 'react'
export const metadata = {
  title: 'Refund & Cancellation Policy | Digital Nawab – Digital Marketing Agency',
  description:
    'Read the Refund & Cancellation Policy of Digital Nawab, a leading digital marketing agency in Lucknow. Learn about our client-friendly policies and secure services.',
  alternates: {
    canonical: 'https://www.digitalnawab.com/refund-cancellation',
  },
}
const page = () => {
  return (
    <div>
      <RefundCancellationPolicy/>
    </div>
  )
}

export default page
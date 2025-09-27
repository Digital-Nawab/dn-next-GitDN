import Image from 'next/image'

import About from "@/components/About/About";
import React from "react";
export const metadata = {
  title: 'About Digital Nawab | Best Digital Marketing & Advertising Agency in Lucknow',
  description:
    'Digital Nawab is a leading digital marketing & advertising agency in Lucknow, trusted by 250+ clients. We deliver SEO, PPC, Social Media & Web solutions to grow your business.',
  alternates: {
    canonical: 'https://www.digitalnawab.com/about-us',
  },
}
const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;

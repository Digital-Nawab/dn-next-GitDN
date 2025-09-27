import Image from 'next/image'
import Design from "@/components/Design/Design";
import React from "react";
export const metadata = {
  title: 'Graphic Designing Company in Lucknow, India | Graphic Design Agency',
  description:
    'Best graphic designing company in Lucknow for logo design, brochures, packaging & branding solutions. Creative, modern & professional design solutions that grow your brand identity. Get a free consultation today!',
  alternates: {
    canonical: 'https://www.digitalnawab.com/service/graphic-designing-services',
  },
}
const page = () => {
  return <div>
    <Design/>
  </div>;
};

export default page;

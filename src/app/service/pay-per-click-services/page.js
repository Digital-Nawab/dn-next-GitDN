import Image from "next/image";
import BrandPerformanceHero from "@/components/BrandPerformance/Hero";
import MediaBuyingSection from "@/components/BrandPerformance/MediaBuying";
import PPC from "@/components/BrandPerformance/PPC";
import PPCServicesSection from "@/components/BrandPerformance/PPcSection";
import ABTestingSection from "@/components/BrandPerformance/Testing";
// import BrandPerformance from '@/components/BrandPerformance/BrandPerformance'
import React from "react";
export const metadata = {
  title: "PPC Services in Lucknow | Google Ads & Paid Campaign Experts",
  description:
    "Maximize ROI with expert PPC services in Lucknow. Target quality leads, appear on Google’s 1st page, and achieve cost-effective results with our paid marketing solutions.",
  alternates: {
    canonical: "https://www.digitalnawab.com/service/pay-per-click-services",
  },
};
const page = ({ params }) => {
  console.log("Params received:", params);
  return (
    <div>
      {/* <BrandPerformance/> */}
      <BrandPerformanceHero />
      <PPC />
      <PPCServicesSection />
    </div>
  );
};

export default page;

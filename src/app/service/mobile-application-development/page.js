import Image from 'next/image'

import AppDevelopmentPlatform from "@/components/mobile/AppDevelopmentPlatform";
import MobileBanner from "@/components/mobile/MobileBanner";
import MobileAppDevelopment from "@/components/mobile/MobileAppDevelopment ";
import TechServicesSection from "@/components/mobile/TechServicesSection ";
import ToolsAndTechnologies from "@/components/TechWeUse";
import React from "react";
export const metadata = {
  title: 'Mobile App Development Company in Lucknow, India | Android & iOS Experts',
  description:
    'Best mobile app development company in Lucknow for Android, iOS & Web apps. Get custom, scalable & user-friendly apps built by expert developers. Trusted by 250+ clients. Free consultation today!',
  alternates: {
    canonical: 'https://www.digitalnawab.com/service/mobile-application-development',
  },
}
const page = () => {
  return (
    <div>
      <>
        <MobileBanner />
        <section id="mobile-app-development">
          <MobileAppDevelopment />
        </section>
        <section id="tools-and-technologies">
          <ToolsAndTechnologies />
        </section>
        <section id="app-development-process">
          <AppDevelopmentPlatform />
        </section>
        <section id="tech-services">
          <TechServicesSection />
        </section>
      </>
    </div>
  );
};

export default page;

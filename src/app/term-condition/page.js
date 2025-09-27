import TermsAndConditions from "@/components/policy/TandC";
import React from "react";
export const metadata = {
  title: 'Terms & Conditions | Digital Nawab – Digital Marketing Agency',
  description:
    'Read the Terms & Conditions of Digital Nawab, a leading digital marketing agency in Lucknow. Understand our policies, services, and client agreements clearly.',
  alternates: {
    canonical: 'https://www.digitalnawab.com/term-condition',
  },
}
const page = () => {
  return (
    <div>
      <TermsAndConditions />
    </div>
  );
};

export default page;

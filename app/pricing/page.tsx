import React from 'react';
import { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';
import PricingComparison from '@/components/sections/PricingComparison';

export const metadata: Metadata = {
  title: 'Pricing | Crevoe',
  description: 'Choose the perfect plan for your online course business. Start free and scale as you grow.',
};

const Pricing = () => {
  return (
    <>
      <PricingSection />
      <PricingComparison />
    </>
  );
};

export default Pricing;
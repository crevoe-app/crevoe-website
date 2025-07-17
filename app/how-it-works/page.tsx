import React from 'react';
import HowItWorksHero from '@/components/sections/HowItWorksHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Crevoe',
  description: 'Learn how Crevoe helps you teach, learn, and grow with our all-in-one platform.',
};

const HowItWorks = () => {
  const heroContent = {
    title: "Lorem ipsum Lorem ipsum",
    subtitle: "Lorem ipsum",
    description: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    ctaText: "Start Creating",
    ctaLink: "#",
    images: [
      {
        src: "/HowToVideo.png",
        alt: "How to video demonstration"
      },
      {
        src: "/MoreInsight.png",
        alt: "More insight analytics dashboard"
      }
    ]
  };

  return (
    <>
      <HowItWorksHero {...heroContent} />

      {/* How it works content sections will go here */}

      {/* Call to action section will go here */}
    </>
  );
};

export default HowItWorks;
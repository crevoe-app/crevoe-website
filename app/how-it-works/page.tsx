import React from 'react';
import HowItWorksHero from '@/components/sections/HowItWorksHero';
import HowItWorksSteps from '@/components/sections/HowItWorksSteps';
import HowItWorksCTA from '@/components/sections/HowItWorksCTA';
import { Metadata } from 'next';
import Faq from '@/components/sections/Faq';

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

  const stepsContent = {
    title: "How it works",
    subtitle: "Everything you need to teach, learn, and grow — built into one beautiful platform.",
    steps: [
      {
        number: "1",
        title: "Create Your Course",
        description: "Build engaging courses with our intuitive course builder. Add videos, quizzes, assignments, and interactive content to create a comprehensive learning experience for your students.",
        imageSrc: "/SectionOne.png",
        imageAlt: "Course creation interface showing video upload and content organization"
      },
      {
        number: "2",
        title: "Engage Your Students",
        description: "Connect with your students through live sessions, discussions, and personalized feedback. Track their progress and provide support when they need it most.",
        imageSrc: "/SectionTwo.png",
        imageAlt: "Student engagement dashboard with live session and discussion features"
      },
      {
        number: "3",
        title: "Grow Your Business",
        description: "Scale your teaching business with powerful analytics, marketing tools, and automated workflows. Turn your knowledge into a thriving online education business.",
        imageSrc: "/SectionThree.png",
        imageAlt: "Business growth analytics showing revenue and student enrollment metrics"
      }
    ]
  };

  return (
    <>
      <HowItWorksHero {...heroContent} />
      <HowItWorksSteps {...stepsContent} />
      <HowItWorksCTA />
      <Faq />
    </>
  );
};

export default HowItWorks;
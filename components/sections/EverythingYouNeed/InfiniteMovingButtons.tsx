"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const InfiniteCards = () => {
  const containerRef = useRef(null) as any;
  const scrollerRef = useRef(null) as any;
  const [start, setStart] = useState(false);

  const cards = [
    {
      label: "LMS",
    },
    {
      label: "Video  Conferencing",
    },
    {
      label: "Community",
    },
    {
      label: "Courses creation and management",
    },
    {
      label: "LMS",
    },
    {
      label: "Video  Conferencing",
    },
    {
      label: "Community",
    },
    {
      label: "Courses creation and management",
    },
    {
      label: "LMS",
    },
    {
      label: "Video  Conferencing",
    },
    {
      label: "Community",
    },
    {
      label: "Courses creation and management",
    },
  ];

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children) as any;
      scrollerContent.forEach((item: any) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-[70%] ml-[15%] mt-10"
    >
      <div
        className="flex overflow-hidden [--duration:40s] [--gap:1rem] [gap:var(--gap)]"
        style={{ '--animation-direction': 'forwards' } as React.CSSProperties}
      >
        <motion.ul
          ref={scrollerRef}
          className={cn(
            'flex shrink-0 justify-around [gap:var(--gap)]',
            start && 'animate-marquee'
          )}
          animate={start ? { x: ['0%', '-50%'] } : { x: '0%' }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {cards.map((card, index) => (
            <li
              key={index}
              className="flex-none text-white border border-gray-600 px-4 py-2 rounded-full hover:bg-white hover:text-black cursor-pointer"
            >
              {card.label}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default InfiniteCards;
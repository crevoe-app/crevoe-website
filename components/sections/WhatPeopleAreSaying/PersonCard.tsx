import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Person {
  id: number;
  name: string;
  image: string;
  rotation: string;
  description: string;
}

interface PersonCardProps {
  person: Person;
  index: number;
  onClick: () => void;
}

export default function PersonCard({ person, index, onClick }: PersonCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`
        relative group cursor-pointer transition-all duration-300 ease-out
        ${person.rotation}
        hover:rotate-0 hover:scale-105 hover:z-10
      `}
      style={{
        animationDelay: `${index * 100}ms`
      }}
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap">
            <span className="text-gray-900 font-medium">{person.name}</span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      )}

      <div className="relative overflow-hidden rounded shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="w-56 h-72 bg-white">
          <div className="w-full h-full rounded overflow-hidden bg-[#FEF2F2]">
            <motion.img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
      </div>
      <div className={`absolute inset-0 bg-black/10 rounded-2xl blur-sm -z-10 ${person.rotation} transition-all duration-300 group-hover:opacity-50`}
        style={{ transform: 'translateY(8px) translateX(4px)' }} />
    </div>
  );
}
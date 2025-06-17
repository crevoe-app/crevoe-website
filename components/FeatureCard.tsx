import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  backgroundColor,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`${backgroundColor} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group cursor-pointer`}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <Image
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-xl"
            width={600}
            height={300}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/10 rounded-full"
      />
    </motion.div>
  );
};

export default FeatureCard;
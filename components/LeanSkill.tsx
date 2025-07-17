import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface LearnSkillProps {
  children: React.ReactNode;
  initial: { top: string; left?: string; right?: string };
  style: {
    top: MotionValue<string>;
    left?: MotionValue<string>;
    right?: MotionValue<string>;
  };
  transition: { duration: number };
}

const LearnSkill: React.FC<LearnSkillProps> = ({
  children,
  initial,
  style,
  transition
}) => {
  return (
    <motion.div
      className="absolute z-10"
      initial={initial}
      style={style}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default LearnSkill;
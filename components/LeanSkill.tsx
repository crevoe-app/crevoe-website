// "use client"
// import React from 'react'
// import { motion } from 'framer-motion'

// interface LearnSkillProps {
//   children: React.ReactNode
//   className?: string
//   initial?: any
//   animate?: any
//   custom?: number
//   variants?: any
//   transition?: any
//   style?: any
// }

// const LearnSkill: React.FC<LearnSkillProps> = ({
//   children,
//   className = '',
//   initial,
//   animate,
//   custom,
//   variants,
//   transition,
//   style
// }) => {
//   return (
//     <motion.div
//       className={`absolute ${className}`}
//       initial={initial}
//       animate={animate}
//       custom={custom}
//       variants={variants}
//       transition={transition}
//       style={style}
//     >
//       <motion.div>
//         {children}
//       </motion.div>
//     </motion.div>
//   )
// }

// export default LearnSkill

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
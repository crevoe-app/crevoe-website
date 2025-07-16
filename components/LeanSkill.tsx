"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface LearnSkillProps {
  children: React.ReactNode
  className?: string
  initial?: any
  animate?: any
  custom?: number
  variants?: any
  transition?: any
  style?: any
}

const LearnSkill: React.FC<LearnSkillProps> = ({
  children,
  className = '',
  initial,
  animate,
  custom,
  variants,
  transition,
  style
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={initial}
      animate={animate}
      custom={custom}
      variants={variants}
      transition={transition}
      style={style}
    >
      <motion.div>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default LearnSkill
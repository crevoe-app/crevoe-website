// import React, { useRef } from 'react';
// import LearnSkill from '@/components/LeanSkill';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const LearnTerms = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const positions = [
//     {
//       top: useTransform(scrollYProgress, [0, 0.5], ["300px", "0px"]),
//       left: useTransform(scrollYProgress, [0, 0.5], ["700px", "306px"]),
//     },
//     {
//       top: useTransform(scrollYProgress, [0, 0.5], ["300px", "288px"]),
//       left: useTransform(scrollYProgress, [0, 0.5], ["700px", "40px"]),
//     },
//     {
//       top: useTransform(scrollYProgress, [0, 0.5], ["300px", "520px"]),
//       left: useTransform(scrollYProgress, [0, 0.5], ["700px", "160px"]),
//     },
//     {
//       top: useTransform(scrollYProgress, [0, 0.5], ["300px", "700px"]),
//       left: useTransform(scrollYProgress, [0, 0.5], ["700px", "450px"]),
//     },
//     {
//       top: useTransform(scrollYProgress, [0, 0.5], ["300px", "520px"]),
//       right: useTransform(scrollYProgress, [0, 0.5], ["700px", "250px"]),
//     },
//     {
//       top: useTransform(scrollYProgress, [0, 0.5], ["300px", "700px"]),
//       right: useTransform(scrollYProgress, [0, 0.5], ["700px", "16px"]),
//     },
//     {
//       top: useTransform(scrollYProgress, [0, 0.5], ["300px", "220px"]),
//       right: useTransform(scrollYProgress, [0, 0.5], ["700px", "16px"]),
//     },
//     {
//       top: useTransform(scrollYProgress, [0, 0.5], ["300px", "0px"]),
//       right: useTransform(scrollYProgress, [0, 0.5], ["700px", "400px"]),
//     },
//   ];

//   const initialPosition = { top: "300px", left: "700px" };
//   const initialPositionRight = { top: "300px", right: "700px" };

//   return (
//     <div
//       ref={ref}
//       className="relative bg-white flex items-center justify-center pt-20 mt-0 h-screen"
//     >
//       <motion.div
//         className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//       >
//         <h2 className="text-5xl font-semibold mb-6">Learn on your terms.</h2>
//         <p className="w-8/12 my-8 mx-auto flex items-center justify-center text-center">
//           From skill-building to soul-growing, discover courses that meet you where you are.
//         </p>
//         <motion.button
//           whileTap={{ scale: 0.98 }}
//           className="w-4/12 bg-primary-600 font-semibold text-white py-3 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors"
//         >
//           Explore All Categories
//         </motion.button>
//       </motion.div>

//       <LearnSkill
//         initial={initialPosition}
//         style={positions[0]}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative">
//           <motion.img src="/assets/learnTerms/entertainment.png" className="w-40 h-52" />
//           <div className="absolute -bottom-2 bg-yellow-200 rounded-full w-[90%] ml-[5%] px-4 py-2 text-xs text-center">
//             Entertainment
//           </div>
//         </div>
//       </LearnSkill>

//       <LearnSkill
//         initial={initialPosition}
//         style={positions[1]}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative">
//           <motion.img src="/assets/learnTerms/culinary-subscription.png" className="h-32 w-32" />
//           <div className="absolute -left-4 -bottom-2 bg-[#E8F9DD] rounded-full w-full px-2 py-2 text-xs text-left">
//             <p>Culinary</p>
//             <p>Subscriptions</p>
//           </div>
//         </div>
//       </LearnSkill>

//       <LearnSkill
//         initial={initialPosition}
//         style={positions[2]}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative">
//           <motion.img src="/assets/learnTerms/active-life.png" className="h-52 w-40" />
//           <div className="absolute -top-2 bg-[#D9F4F7] w-[60%] ml-[20%] rounded-full px-2 py-2 text-xs text-center">
//             <p>Active Life</p>
//           </div>
//         </div>
//       </LearnSkill>

//       <LearnSkill
//         initial={initialPosition}
//         style={positions[3]}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative">
//           <motion.img src="/assets/learnTerms/dental-care.png" className="h-32 w-32" />
//           <div className="absolute -left-2 -bottom-2 bg-[#FFDCEA] rounded-full w-10/12 px-2 py-2 text-xs text-center">
//             <p>Dental Care</p>
//           </div>
//         </div>
//       </LearnSkill>

//       <LearnSkill
//         initial={initialPositionRight}
//         style={positions[4]}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative">
//           <motion.img src="/assets/learnTerms/training.png" className="h-52 w-40" />
//           <div className="absolute -left-2 -bottom-2 bg-[#FFF4D9] rounded-full w-6/12 px-2 py-2 text-xs text-center">
//             <p>Training</p>
//           </div>
//         </div>
//       </LearnSkill>

//       <LearnSkill
//         initial={initialPositionRight}
//         style={positions[5]}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative">
//           <motion.img src="/assets/learnTerms/personal-care.png" className="h-32 w-32" />
//           <div className="absolute -right-2 -top-2 bg-[#E8F9DD] rounded-full w-full px-2 py-2 text-xs text-center">
//             <p>Personal Care</p>
//           </div>
//         </div>
//       </LearnSkill>

//       <LearnSkill
//         initial={initialPositionRight}
//         style={positions[6]}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative">
//           <motion.img src="/assets/learnTerms/mental-health.png" className="h-52 w-40" />
//           <div className="absolute -bottom-2 bg-[#FFDCEA] rounded-full w-[80%] ml-[10%] px-2 py-2 text-xs text-center">
//             <p>Mental Health</p>
//           </div>
//         </div>
//       </LearnSkill>

//       <LearnSkill
//         initial={initialPositionRight}
//         style={positions[7]}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative">
//           <motion.img src="/assets/learnTerms/pets.png" className="h-32 w-32" />
//           <div className="absolute -left-2 -top-2 bg-[#D9F4F7] rounded-full w-5/12 px-2 py-2 text-xs text-center">
//             <p>Pets</p>
//           </div>
//         </div>
//       </LearnSkill>
//     </div>
//   );
// };

// export default LearnTerms;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LearnSkill from '@/components/LeanSkill';
import { useIsMobile } from '@/hooks/useIsMobile';

const LearnTerms = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const skills = [
    {
      image: "/assets/learnTerms/entertainment.png",
      label: "Entertainment",
      bgColor: "bg-skill-entertainment",
      size: "tall"
    },
    {
      image: "/assets/learnTerms/culinary-subscription.png",
      label: "Culinary Subscriptions",
      bgColor: "bg-skill-culinary",
      size: "square"
    },
    {
      image: "/assets/learnTerms/active-life.png",
      label: "Active Life",
      bgColor: "bg-skill-active",
      size: "tall"
    },
    {
      image: "/assets/learnTerms/dental-care.png",
      label: "Dental Care",
      bgColor: "bg-skill-dental",
      size: "square"
    },
    {
      image: "/assets/learnTerms/training.png",
      label: "Training",
      bgColor: "bg-skill-training",
      size: "tall"
    },
    {
      image: "/assets/learnTerms/personal-care.png",
      label: "Personal Care",
      bgColor: "bg-skill-personal",
      size: "square"
    },
    {
      image: "/assets/learnTerms/mental-health.png",
      label: "Mental Health",
      bgColor: "bg-skill-mental",
      size: "tall"
    },
    {
      image: "/assets/learnTerms/pets.png",
      label: "Pets",
      bgColor: "bg-skill-pets",
      size: "square"
    },
  ];

  const desktopPositions = [
    {
      top: useTransform(scrollYProgress, [0, 0.5], ["300px", "0px"]),
      left: useTransform(scrollYProgress, [0, 0.5], ["700px", "306px"]),
    },
    {
      top: useTransform(scrollYProgress, [0, 0.5], ["300px", "288px"]),
      left: useTransform(scrollYProgress, [0, 0.5], ["700px", "40px"]),
    },
    {
      top: useTransform(scrollYProgress, [0, 0.5], ["300px", "520px"]),
      left: useTransform(scrollYProgress, [0, 0.5], ["700px", "160px"]),
    },
    {
      top: useTransform(scrollYProgress, [0, 0.5], ["300px", "700px"]),
      left: useTransform(scrollYProgress, [0, 0.5], ["700px", "450px"]),
    },
    {
      top: useTransform(scrollYProgress, [0, 0.5], ["300px", "520px"]),
      right: useTransform(scrollYProgress, [0, 0.5], ["700px", "250px"]),
    },
    {
      top: useTransform(scrollYProgress, [0, 0.5], ["300px", "700px"]),
      right: useTransform(scrollYProgress, [0, 0.5], ["700px", "16px"]),
    },
    {
      top: useTransform(scrollYProgress, [0, 0.5], ["300px", "220px"]),
      right: useTransform(scrollYProgress, [0, 0.5], ["700px", "16px"]),
    },
    {
      top: useTransform(scrollYProgress, [0, 0.5], ["300px", "0px"]),
      right: useTransform(scrollYProgress, [0, 0.5], ["700px", "400px"]),
    },
  ];

  const initialPositionLeft = { top: "300px", left: "700px" };
  const initialPositionRight = { top: "300px", right: "700px" };

  if (isMobile) {
    return (
      <div
        ref={ref}
        className="relative bg-background flex flex-col items-center justify-center px-4 py-16 min-h-screen"
      >
        <motion.div
          className="max-w-lg mx-auto text-center mb-12 z-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-foreground">
            Learn on your terms.
          </h2>
          <p className="text-muted-foreground mb-8 text-sm sm:text-base leading-relaxed">
            From skill-building to soul-growing, discover courses that meet you where you are.
          </p>
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 bg-primary-500 font-semibold text-white py-3 rounded-full hover:bg-primary-500 border border-primary-400 transition-colors"
          >
            Explore All Categories
          </motion.button>
        </motion.div>

        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto relative z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="relative">
                <motion.img
                  src={skill.image}
                  alt={skill.label}
                  className={`w-full ${skill.size === 'tall' ? 'h-32 sm:h-36' : 'h-24 sm:h-28'} object-cover rounded-lg`}
                />
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${skill.bgColor} rounded-full px-3 py-1 shadow-sm`}>
                  <p className="text-xs font-medium text-center whitespace-nowrap">
                    {skill.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="relative bg-background flex items-center justify-center pt-20 mt-0 min-h-screen overflow-hidden"
    >
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-5xl font-semibold mb-6 text-foreground">
          Learn on your terms.
        </h2>
        <p className="w-8/12 my-8 mx-auto flex items-center justify-center text-center text-muted-foreground">
          From skill-building to soul-growing, discover courses that meet you where you are.
        </p>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-5/12 bg-primary-500 font-semibold text-white py-3 rounded-full hover:bg-primary-600 border border-primary-400 transition-colors"
        >
          Explore All Categories
        </motion.button>
      </motion.div>

      {skills.map((skill, index) => {
        const isRightSide = index >= 4;
        const position = desktopPositions[index];
        const initial = isRightSide ? initialPositionRight : initialPositionLeft;

        return (
          <LearnSkill
            key={skill.label}
            initial={initial}
            style={position}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.img
                src={skill.image}
                alt={skill.label}
                className={skill.size === 'tall' ? "w-40 h-52 object-cover rounded-lg" : "h-32 w-32 object-cover rounded-lg"}
              />
              <div
                className={`absolute ${index === 0 ? '-bottom-2' :
                  index === 1 ? '-left-4 -bottom-2' :
                    index === 2 ? '-top-2' :
                      index === 3 ? '-left-2 -bottom-2' :
                        index === 4 ? '-left-2 -bottom-2' :
                          index === 5 ? '-right-2 -top-2' :
                            index === 6 ? '-bottom-2' :
                              '-left-2 -top-2'
                  } ${skill.bgColor} rounded-full px-4 py-2 text-xs text-center font-medium shadow-sm`}
                style={{
                  width: index === 1 || index === 3 ? '120%' :
                    index === 2 || index === 4 || index === 7 ? '60%' :
                      '90%',
                  marginLeft: index === 0 || index === 6 ? '5%' :
                    index === 2 || index === 7 ? '20%' :
                      'auto'
                }}
              >
                <p className='text-center'>{skill.label}</p>
              </div>
            </div>
          </LearnSkill>
        );
      })}
    </div>
  );
};

export default LearnTerms;
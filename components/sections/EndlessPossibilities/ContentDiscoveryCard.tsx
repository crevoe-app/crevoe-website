
import React from 'react';
import { motion } from 'framer-motion';

const ContentDiscoveryCard = () => {
  const userData = [
    {
      id: 1,
      name: 'Adarabioyo Joseph',
      email: 'johnadeyo@crevoe.com',
      avatar: '👨🏿‍💼'
    },
    {
      id: 2,
      name: 'Adarabioyo Joseph',
      email: 'johnadeyo@crevoe.com',
      avatar: '👨🏿‍💼'
    },
    {
      id: 3,
      name: 'Adarabioyo Joseph',
      email: 'johnadeyo@crevoe.com',
      avatar: '👨🏿‍💼'
    },
    {
      id: 4,
      name: 'Adarabioyo Joseph',
      email: 'johnadeyo@crevoe.com',
      avatar: '👨🏿‍💼'
    }
  ];

  return (
    <motion.div
      className="bg-[#F9A474] rounded-3xl p-8 pb-0 pr-0 relative overflow-hidden flex flex-col sm:flex-row gap-4 items-end h-full"
      whileHover="hover"
      initial="initial"
    >
      <div className="relative z-10 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:text-xl sm:mb-2">
          Content Discovery
        </h2>
        <p className="text-gray-700 leading-relaxed sm:text-sm">
          Find content and creators that match your interests and goals.
        </p>
      </div>

      <div className="relative z-10 w-full">
        <motion.div
          className="bg-white rounded-t-2xl rounded-r-none p-6 shadow-lg relative sm:p-4"
        >
          <motion.img
                         src={"/content.svg"}
                         alt='co-host'
                         className='object-fill w-full h-full'
                         variants={{
                         }}
                       />
        </motion.div>
        <motion.img
          className="absolute -left-6 -top-6 w-12 h-12 object-cover sm:-left-4 sm:-top-4 sm:w-8 sm:h-8"
          src="./assets/GreenStar.svg"
          alt="Content Discovery Background"
          variants={{
            initial: { opacity: 0, scale: 0.8, x: 0 },
            hover: { opacity: 1, scale: 1.8 }
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />

        <motion.img
          className="absolute -right-10 -top-28 w-32 h-32 object-cover -z-50 sm:-right-6 sm:-top-16 sm:w-20 sm:h-20"
          src="./assets/PinkStar.svg"
          alt="Content Discovery Background"
          variants={{
            initial: { opacity: 0, scale: 0.8, x: 0, y: 0 },
            hover: { opacity: 1, scale: 1.5, y: -40 }
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

export default ContentDiscoveryCard;
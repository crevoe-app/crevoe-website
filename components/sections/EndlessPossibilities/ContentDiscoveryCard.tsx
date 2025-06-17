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
    }
  ];

  return (
    <motion.div
      className="bg-[#F9A474] rounded-3xl p-8 pb-0 pr-0 relative overflow-hidden flex gap-4 items-end h-full"
      whileHover="hover"
      initial="initial"
    >

      <div className="relative z-10 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Content Discovery
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Find content and creators that match your interests and goals.
        </p>
      </div>

      <div className="relative z-10">
        <motion.div
          className="bg-white rounded-t-2xl rounded-r-none p-6 shadow-lg relative"
        >
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 mb-4">
            <div className="col-span-1 text-sm font-medium text-gray-600">S/N</div>
            <div className="col-span-5 text-sm font-medium text-gray-600">Name</div>
            <div className="col-span-6 text-sm font-medium text-gray-600">Email Address</div>
          </div>

          <div className="space-y-4">
            {userData.map((user, index) => (
              <div key={user.id} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{user.avatar}</span>
                  </div>
                </div>
                <div className="col-span-5 ml-2">
                  <span className="text-gray-800 font-medium text-xs">{user.name}</span>
                </div>
                <div className="col-span-6">
                  <span className="text-gray-600 text-xs">{user.email}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.img
          className="absolute -left-6 -top-6 w-12 h-12 object-cover"
          src="./assets/GreenStar.svg"
          alt="Content Discovery Background"
          variants={{
            initial: { opacity: 0, scale: 0.8, x: 0 },
            hover: { opacity: 1, scale: 1, }
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />

        <motion.img
          className="absolute -right-10 -top-28 w-32 h-32 object-cover -z-50"
          src="./assets/PinkStar.svg"
          alt="Content Discovery Background"
          variants={{
            initial: { opacity: 0, scale: 0.8, x: 0, y: 0 },
            hover: { opacity: 1, scale: 1, y: -40 }
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

export default ContentDiscoveryCard;
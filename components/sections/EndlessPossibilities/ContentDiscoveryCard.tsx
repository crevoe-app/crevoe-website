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
      className="bg-[#F9A474] rounded-3xl p-4 sm:p-6 lg:p-8 pb-0 pr-0 relative overflow-hidden flex flex-col lg:flex-row gap-2 sm:gap-4 lg:items-end h-full min-h-[400px] lg:min-h-0"
      whileHover="hover"
      initial="initial"
    >

      <div className="relative z-10 mb-4 sm:mb-6 lg:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          Content Discovery
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Find content and creators that match your interests and goals.
        </p>
      </div>

      <div className="relative z-10 flex-1">
        <motion.div
          className="bg-white rounded-t-2xl rounded-r-none p-3 sm:p-4 lg:p-6 shadow-lg relative"
        >
          {/* Mobile Layout - Stack format */}
          <div className="block sm:hidden space-y-3">
            <div className="text-sm font-medium text-gray-600 border-b border-gray-200 pb-2">
              User Directory
            </div>
            {userData.map((user, index) => (
              <div key={user.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{user.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-800 font-medium text-sm truncate">{user.name}</div>
                  <div className="text-gray-600 text-xs truncate">{user.email}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet and Desktop Layout - Table format */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-12 gap-2 lg:gap-4 pb-2 lg:pb-4 border-b border-gray-200 mb-2 lg:mb-4">
              <div className="col-span-1 text-xs lg:text-sm font-medium text-gray-600">S/N</div>
              <div className="col-span-5 text-xs lg:text-sm font-medium text-gray-600">Name</div>
              <div className="col-span-6 text-xs lg:text-sm font-medium text-gray-600">Email Address</div>
            </div>

            <div className="space-y-2 lg:space-y-4">
              {userData.map((user, index) => (
                <div key={user.id} className="grid grid-cols-12 gap-2 lg:gap-4 items-center">
                  <div className="col-span-1">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-lg lg:text-2xl">{user.avatar}</span>
                    </div>
                  </div>
                  <div className="col-span-5 ml-1 lg:ml-2">
                    <span className="text-gray-800 font-medium text-xs lg:text-xs">{user.name}</span>
                  </div>
                  <div className="col-span-6">
                    <span className="text-gray-600 text-xs">{user.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decorative elements - hidden on mobile for cleaner look */}
        <motion.img
          className="hidden sm:block absolute -left-4 lg:-left-6 -top-4 lg:-top-6 w-8 h-8 lg:w-12 lg:h-12 object-cover"
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
          className="hidden lg:block absolute -right-10 -top-28 w-32 h-32 object-cover -z-50"
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
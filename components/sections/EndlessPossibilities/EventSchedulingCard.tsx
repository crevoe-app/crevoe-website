import React from 'react';
import { motion } from 'framer-motion';

const EventSchedulingCard = () => {
  const scheduleData = [
    { month: 'July', day: '18', time: '3:00 AM' },
    { month: 'August', day: '19', time: '4:00 AM' },
    { month: 'September', day: '20', time: '5:00 AM' }
  ];

  return (
    <motion.div
      className="bg-[#B8CEDC] rounded-3xl p-8 pb-0 pr-1 cursor-pointer overflow-hidden relative"
      whileHover="hover"
      initial="initial"
    >

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Event Scheduling
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Plan and automate your class timelines, reminders, and launches.
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="bg-white rounded-t-2xl p-4 shadow-lg relative overflow-hidden"
          variants={{
            initial: { x: 0 },
            hover: { x: 20 }
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        >

          <div className="text-center mb-6">
            <p className="text-gray-600 font-medium text-xs">
              When should we deliver this card?
            </p>
          </div>

          <div className="space-y-4">
            {scheduleData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className={`text-xs font-medium ${index === 2 ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                    {item.month}
                  </span>
                  <span className={`text-lg font-bold ${index === 2 ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                    {item.day}
                  </span>
                </div>
                <span className={`text-xs font-medium ${index === 2 ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventSchedulingCard;
import React from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Person {
  id: number;
  name: string;
  image: string;
  rotation: string;
  description: string;
}

interface PersonModalProps {
  person: Person;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PersonModal({ person, isOpen, onClose, onNext, onPrevious }: PersonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-end cursor-pointer" onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-48 sm:w-48 sm:h-64 bg-orange-100 rounded-xl overflow-hidden shadow-md">
                <motion.img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">{person.name}</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {person.description}
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6 sm:mt-8">
            <div className='border border-primary-200 p-0.5 rounded-full'>
              <button
                onClick={onPrevious}
                className="p-2 sm:p-3 hover:bg-gray-100 bg-gray-200 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
            <div className='border border-primary-200 p-0.5 rounded-full'>
              <button
                onClick={onNext}
                className="p-2 sm:p-3 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client"
import React, { useState } from 'react'
import PersonCard from './PersonCard';
import PersonModal from './PersonModal';

interface Person {
  id: number;
  name: string;
  image: string;
  rotation: string;
  description: string;
}

const people: Person[] = [
  {
    id: 1,
    name: "Adewale Ogunyebi",
    image: "/people1.png",
    rotation: "-rotate-2",
    description: "Find the perfect course with advanced filters and recommendations. Find the perfect course with advanced filters and recommendations."
  },
  {
    id: 2,
    name: "Marcus Johnson",
    image: "/people2.png",
    rotation: "rotate-1",
    description: "Transforming education through innovative teaching methods and personalized learning experiences that adapt to every student's needs."
  },
  {
    id: 3,
    name: "David Thompson",
    image: "/people3.png",
    rotation: "-rotate-1",
    description: "Creating engaging content that helps students achieve their goals while building confidence in their abilities and skills."
  },
  {
    id: 4,
    name: "Michael Brown",
    image: "/people4.png",
    rotation: "rotate-2",
    description: "Empowering learners with cutting-edge tools and resources that make complex topics accessible and enjoyable to master."
  },
  {
    id: 5,
    name: "Amara Williams",
    image: "/people5.png",
    rotation: "-rotate-1",
    description: "Bridging the gap between traditional education and modern learning through interactive experiences and community building."
  },
  // {
  //   id: 6,
  //   name: "Jordan Davis",
  //   image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  //   rotation: "rotate-1",
  //   description: "Fostering creativity and critical thinking through collaborative learning environments that inspire lifelong learning habits."
  // }
];

const People = () => {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedPersonIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPersonIndex(null);
  };

  const handleNext = () => {
    if (selectedPersonIndex !== null) {
      setSelectedPersonIndex((selectedPersonIndex + 1) % people.length);
    }
  };

  const handlePrevious = () => {
    if (selectedPersonIndex !== null) {
      setSelectedPersonIndex(selectedPersonIndex === 0 ? people.length - 1 : selectedPersonIndex - 1);
    }
  };


  return (
    <div className="flex items-center justify-center p-4 sm:p-8">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0 w-full mx-auto">
        {people.map((person, index) => (
          <PersonCard
            key={person.id}
            person={person}
            index={index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {selectedPersonIndex !== null && (
        <PersonModal
          person={people[selectedPersonIndex]}
          isOpen={selectedPersonIndex !== null}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  )
}

export default People
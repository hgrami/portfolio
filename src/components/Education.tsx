import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCalendarAlt, FaBriefcase, FaHandsHelping, FaCogs } from 'react-icons/fa';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  icon: React.ElementType;
}

const educations: Education[] = [
  {
    degree: "MBA (current)",
    institution: "Universidad Da Vinci de Guatemala",
    year: "Expected: Aug 2025",
    description: "Broadening business acumen with a focus on strategic management and leadership in diverse industries.",
    icon: FaBriefcase
  },
  {
    degree: "Master in Project Assessment",
    institution: "Universidad de San Carlos",
    year: "2016",
    description: "Specialized in evaluating and optimizing projects for social impact, enhancing skills in project management and social responsibility.",
    icon: FaHandsHelping
  },
  {
    degree: "Bachelor of Science in Mechanical Engineering",
    institution: "Universidad del Valle de Guatemala",
    year: "2011",
    description: "Developed a strong foundation in engineering principles, problem-solving, and analytical thinking, which has been invaluable in my tech career.",
    icon: FaCogs
  }
];

const EducationCard: React.FC<{ edu: Education; index: number }> = ({ edu, index }) => {
  return (
    <motion.div 
      className="mb-16 relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-lg shadow-lg">
        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <edu.icon className="text-4xl text-blue-400 mr-4" />
            <h3 className="text-2xl font-bold text-blue-400">{edu.degree}</h3>
          </div>
          <div className="flex items-center mb-2 text-gray-300">
            <FaUniversity className="mr-2" />
            <span>{edu.institution}</span>
          </div>
          <div className="flex items-center mb-4 text-gray-400">
            <FaCalendarAlt className="mr-2" />
            <span>{edu.year}</span>
          </div>
          <p className="text-gray-300">{edu.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Diverse Educational Journey
          </span>
        </motion.h1>
        
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
          {educations.map((edu, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <EducationCard edu={edu} index={index} />
              </div>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl text-gray-300 mb-8">
            My diverse educational background has equipped me with a unique perspective in the tech industry, 
            blending business acumen, social impact awareness, and engineering problem-solving skills.
          </p>
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore My Journey
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
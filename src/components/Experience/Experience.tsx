import React from 'react';
import { motion } from 'framer-motion';
import { linkedInUrl } from '../../constants';
import ExperienceCard from './ExperienceCard';
import { jobs } from '../../constants/jobs';


const Experience: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 flex-grow"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h1>
          <div className="relative">
            {jobs.map((job, index) => (
              <ExperienceCard key={index} job={job} index={index} />
            ))}
          </div>
        </div>
        <motion.div 
          className="text-center mt-8 md:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href={linkedInUrl} 
            target='_blank'
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out transform hover:scale-105 text-sm md:text-base"
          >
            Explore My Journey
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;

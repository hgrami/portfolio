import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaMobileAlt } from 'react-icons/fa';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <img 
            src="/images/profile.png" 
            alt="Hector Ramirez" 
            className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-blue-400 shadow-lg"
          />
          <h2 className="text-2xl font-semibold mb-2">Senior Software Engineer</h2>
          <p className="text-gray-300">Full Stack Developer | Cloud Expert</p>
        </motion.div>

        <motion.p className="text-lg mb-8 text-gray-300 leading-relaxed" variants={itemVariants}>
          With over 11 years of experience, I specialize in crafting scalable, high-performance applications 
          across diverse industries. As a polyglot programmer, I'm proficient in multiple languages and paradigms, 
          including JavaScript/TypeScript, Java, Python, and Ruby. My expertise spans full-stack development, 
          with a strong focus on web development, mobile solutions, and cloud technologies.
        </motion.p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <FaCode className="text-4xl mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Frontend Mastery</h3>
            <p className="text-gray-300">Expert in React.js, creating responsive and intuitive user interfaces.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <FaServer className="text-4xl mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Backend Proficiency</h3>
            <p className="text-gray-300">Skilled in Node.js, Spring Boot, and Ruby on Rails for robust server-side solutions.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <FaCloud className="text-4xl mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Cloud Expertise</h3>
            <p className="text-gray-300">Experienced with AWS and Docker for scalable cloud infrastructures.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <FaMobileAlt className="text-4xl mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-gray-300">Proficient in React Native for cross-platform mobile application development.</p>
          </div>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <a 
            href="https://www.linkedin.com/in/hgrami" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
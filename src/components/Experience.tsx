import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const jobs: Job[] = [
  {
    title: 'Senior Software Engineer (Contractor)',
    company: 'BENEFIT FLOW',
    period: 'May 2024 - Current',
    description: [
      'Spearheading the implementation of application-wide filters using Redux Saga and leading the migration to React Query for improved state management and data fetching.',
      'Optimized query performance, reducing payload size from 500MB to 150MB through efficient use of React Query and strategic caching, significantly improving application responsiveness.',
      'Developing with a modern tech stack: ReactJS (Frontend), AWS Serverless with Node.js (Backend), PostgreSQL and Elasticsearch (Databases).',
    ],
    technologies: [
      'React',
      'Redux Saga',
      'React Query',
      'AWS Serverless',
      'Node.js',
      'PostgreSQL',
      'Elasticsearch',
    ],
  },
  {
    title: 'Senior Software Engineer (Contractor)',
    company: 'BONUSLY',
    period: 'July 2023 - May 2024',
    description: [
      'Worked with Micro-Frontends architecture to improve scalability and maintainability of the application.',
      'Developed and shipped a bookmarking feature, enhancing user experience and content accessibility.',
      'Created a performance enablement feedback system, improving employee development processes.',
      'Built a comprehensive 1-on-1 meeting feature integrated with Tip-tap, facilitating better team communication.',
      "Integrated AI capabilities using ChatGPT API for generating recommendations, enhancing the product's intelligent features.",
    ],
    technologies: [
      'React.js',
      'Micro-Frontends',
      'Java',
      'Ruby',
      'MongoDB',
      'ChatGPT API',
    ],
  },
  {
    title: 'Software Engineer II (Contractor)',
    company: '7SHIFTS',
    period: 'April 2022 - July 2023',
    description: [
      'Designed and developed stream chat functionality for effective restaurant manager-employee communication.',
      'Implemented and maintained integrations with major payroll and POS providers (ADP, Toast, Square, Clover).',
      'Led the implementation of two new POS integrations (Lightspeed K and Oracle Micros Symphony), managing sales, labor, and tip data.',
    ],
    technologies: ['React.js', 'PHP', 'Apollo/GraphQL', 'MySQL'],
  },
  {
    title: 'Senior Software Engineer (Tech-Lead) / Solution Architect',
    company: 'TECH MAHINDRA',
    period: 'May 2018 - April 2022',
    description: [
      'Managed large-scale supply chain development program for AT&T, handling 10k+ concurrent users and 10k+ monthly orders.',
      'Designed and implemented inventory traceability solution using React.js, Java Spring Boot, and Oracle 12c.',
      "Developed a Reports Portal for AT&T's Board of Directors, integrating data from multiple systems (CRM, ERP, IMS) using React.js, Node.js, and Oracle 12c.",
    ],
    technologies: ['React.js', 'Java Spring Boot', 'Node.js', 'Oracle 12c'],
  },
];

const ExperienceCard: React.FC<{ job: Job; index: number }> = ({
  job,
  index,
}) => {
  return (
    <motion.div
      className="mb-12 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className={`flex flex-col md:flex-row ${
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-2">{job.title}</h3>
          <h4 className="text-xl text-gray-300 mb-4">{job.company}</h4>
          <div className="flex items-center text-gray-400 mb-4">
            <FaCalendar className="mr-2" />
            <span>{job.period}</span>
          </div>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {job.description.map((item, i) => (
              <li key={i} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-700 text-blue-300 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-full bg-blue-500 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <FaBriefcase className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
      </motion.div>
    </div>
  );
};

export default Experience;

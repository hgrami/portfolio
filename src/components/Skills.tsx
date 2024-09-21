import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJs,
  FaJava,
  FaPython,
  FaPhp,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRuby,
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiRedis,
  SiGraphql,
  SiRedux,
} from 'react-icons/si';

interface Skill {
  category: string;
  items: {
    name: string;
    icon: React.ElementType;
  }[];
}

const skills: Skill[] = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Java', icon: FaJava },
      { name: 'Ruby', icon: SiRuby },
      { name: 'Python', icon: FaPython },
      { name: 'PHP', icon: FaPhp },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: FaReact },
      { name: 'React Native', icon: FaReact },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Spring Boot', icon: SiSpring },
      { name: 'Ruby on Rails', icon: SiRuby },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Oracle', icon: SiOracle },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'Redux', icon: SiRedux },
      { name: 'React Query', icon: FaReact },
      { name: 'Elasticsearch', icon: FaDatabase },
    ],
  },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-blue-400">
        {skill.category}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {skill.items.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + itemIndex * 0.05,
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <item.icon className="text-4xl mb-2 text-gray-300" />
            <span className="text-sm text-center text-gray-400">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 flex-grow"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12 py-12"
        >
          <motion.h2
            className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;

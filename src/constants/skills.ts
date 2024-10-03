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
import { Skill } from '../types/types';


export const skills: Skill[] = [
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
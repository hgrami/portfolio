import { Education } from "../types/types";
import { FaBriefcase, FaHandsHelping, FaCogs } from 'react-icons/fa';

export const educations: Education[] = [
  {
    degree: 'MBA (current)',
    institution: 'Universidad Da Vinci de Guatemala',
    year: 'Expected: Aug 2025',
    description:
      'Broadening business acumen with a focus on strategic management and leadership in diverse industries.',
    icon: FaBriefcase,
  },
  {
    degree: 'Master in Project Assessment',
    institution: 'Universidad de San Carlos',
    year: '2016',
    description:
      'Specialized in evaluating and optimizing projects for social impact, enhancing skills in project management and social responsibility.',
    icon: FaHandsHelping,
  },
  {
    degree: 'Bachelor of Science in Mechanical Engineering',
    institution: 'Universidad del Valle de Guatemala',
    year: '2011',
    description:
      'Developed a strong foundation in engineering principles, problem-solving, and analytical thinking, which has been invaluable in my tech career.',
    icon: FaCogs,
  },
];

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import { Job } from '../../types/types';

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
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
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

export default ExperienceCard;
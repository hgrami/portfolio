import { motion } from "framer-motion";
import { Education } from "../../types/types";
import { FaUniversity, FaCalendarAlt } from 'react-icons/fa';
const EducationCard: React.FC<{ edu: Education; index: number }> = ({ edu, index }) => {
    return (
      <motion.div 
        className="mb-8 md:mb-16 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-lg shadow-lg">
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <edu.icon className="text-3xl md:text-4xl text-blue-400 mr-3 md:mr-4 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-blue-400">{edu.degree}</h3>
            </div>
            <div className="flex items-center mb-2 text-gray-300 text-sm md:text-base">
              <FaUniversity className="mr-2 flex-shrink-0" />
              <span>{edu.institution}</span>
            </div>
            <div className="flex items-center mb-4 text-gray-400 text-sm md:text-base">
              <FaCalendarAlt className="mr-2 flex-shrink-0" />
              <span>{edu.year}</span>
            </div>
            <p className="text-gray-300 text-sm md:text-base">{edu.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  export default EducationCard;
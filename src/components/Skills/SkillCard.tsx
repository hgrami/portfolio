import { motion } from "framer-motion";
import { Skill } from "../../types/types";

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

  export default SkillCard;
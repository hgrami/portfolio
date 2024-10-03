import { motion } from "framer-motion";
import { Project } from "../../types/types";

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
    project,
    onClick,
  }) => {

    const previewMedia = project.mediaItems.find((item) => item.type === 'image') || project.mediaItems[0];

    return (
      <motion.div
        layoutId={`project-${project.title}`}
        onClick={onClick}
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
        whileHover={{ y: -5 }}
      >
        <img
            src={previewMedia.url}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 line-clamp-3">{project.description}</p>
        </div>
      </motion.div>
    );
  };

export default ProjectCard;
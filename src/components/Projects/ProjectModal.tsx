import { motion } from "framer-motion";
import { Project } from "../../types/types";
import { X } from 'lucide-react';
import MediaCarousel from "./MediaCarousel";


interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={onClose}
        >
            <motion.div
                layoutId={`project-${project.title}`}
                className="bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    <MediaCarousel mediaItems={project.mediaItems} />
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-opacity"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2 text-white">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-sm"
                        >
                            View Project
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};


export default ProjectModal;
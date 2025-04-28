import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectImageCarousel from "./ProjectImageCarousel";
import ProjectLightbox from "./ProjectLightbox";
import { RiGlobalLine } from "react-icons/ri";


const ProjectCard = ({ 
  project, 
  index,
  carouselHeight = "h-48 md:h-56",
  className = ""
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = () => {
    setLightboxIndex(currentImageIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLightboxNavigation = (index) => {
    setLightboxIndex(index);
  };

  const lightboxNext = () => {
    setLightboxIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const lightboxPrev = () => {
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <motion.div
        className={`bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl h-full flex flex-col ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <ProjectImageCarousel
          images={project.images}
          currentIndex={currentImageIndex}
          onNext={nextImage}
          onPrev={prevImage}
          onNavigate={(idx) => setCurrentImageIndex(idx)}
          onExpand={openLightbox}
          className={carouselHeight}
        />
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs md:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4 mt-auto pt-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub className="mr-1" />
                <span className="text-sm">Code</span>
              </a>
            )}
            {project.client && (
              <a
                href={project.client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaExternalLinkAlt className="mr-1" />
                <span className="text-sm">Client</span>
              </a>
            )}
            {project.server && (
              <a
                href={project.server}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaExternalLinkAlt className="mr-1" />
                <span className="text-sm">Server</span>
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <RiGlobalLine className="mr-1" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <ProjectLightbox
        images={project.images}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={lightboxNext}
        onPrev={lightboxPrev}
        onNavigate={handleLightboxNavigation}
      />
    </>
  );
};

export default ProjectCard;
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
} from "react-icons/fa";
import biccbd from "../assets/projects/biccbd.png";
import xhti from "../assets/projects/xhitbd.png";
import scoutsss from "../assets/projects/scouts-poll.vercel.app_auth.png";
import trendHavens from "../assets/projects/Trendhaven.png";

const projects = [
  {
    title: "Bangabandhu International Conference Center",
    description:
      "A comprehensive event management website designed for the Bangabandhu International Conference Center. Users can browse upcoming events, book tickets, and access detailed venue information.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Firebase",
      "React Router",
      "PHP",
      "MySQL",
      "Cloudinary",
      "Google Map",
    ],
    githubLink: "",
    liveLink: "https://bicc-bd.com",
    images: [biccbd, biccbd, biccbd], // Multiple images for carousel
  },
  // ... other projects with images array
];

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl p-2"
        aria-label="Close lightbox"
      >
        <FaTimes />
      </button>

      <div className="relative max-w-5xl w-full max-h-[90vh]">
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
          aria-label="Previous image"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] mx-auto object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
          aria-label="Next image"
        >
          <FaChevronRight className="text-xl" />
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === idx ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
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

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
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
        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {/* Image Carousel */}
        <div className="relative h-48 md:h-56 w-full overflow-hidden group">
          <button
            onClick={() => openLightbox(currentImageIndex)}
            className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Expand image"
          >
            <FaExpand className="text-sm" />
          </button>

          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover cursor-pointer"
            loading="lazy"
            onClick={() => openLightbox(currentImageIndex)}
          />

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === idx ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Content */}
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
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <FaExternalLinkAlt className="mr-1" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={project.images}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={lightboxNext}
            onPrev={lightboxPrev}
            onNavigate={handleLightboxNavigation}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of my professional work showcasing innovative solutions
            and modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

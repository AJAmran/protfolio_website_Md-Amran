import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ 
  projects, 
  title = "Featured Projects", 
  description = "A collection of my professional work showcasing innovative solutions and modern technologies.",
  className = "",
  gridClass = "grid-cols-1 md:grid-cols-2",
  cardClass = ""
}) => {
  return (
    <section id="projects" className={`py-12 md:py-16 lg:py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <div className={`grid ${gridClass} gap-6 lg:gap-8`}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              className={cardClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
ProjectsSection.propTypes = {
  projects: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  gridClass: PropTypes.string,
  cardClass: PropTypes.string,
};

export default ProjectsSection;
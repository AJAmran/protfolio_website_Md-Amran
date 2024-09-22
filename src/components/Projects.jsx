import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Project 1',
    description: 'A web application built with React, Node.js, and MongoDB.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/project1',
    liveLink: 'https://liveproject1.com',
    image: '/project1.jpg'
  },
  {
    title: 'Project 2',
    description: 'A full-stack eCommerce platform built with MERN stack.',
    techStack: ['MERN Stack'],
    githubLink: 'https://github.com/project2',
    liveLink: 'https://liveproject2.com',
    image: '/project2.jpg'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-mutedText mb-4">{project.description}</p>
                <div className="flex space-x-4 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <FaGithub className="text-xl text-primary" />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="text-xl text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

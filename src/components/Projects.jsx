import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
    image: "/bicc-project.jpg",
  },
  {
    title: "Xinxian Hospitality Training Institute",
    description:
      "A platform developed for the Xinxian Hospitality Training Institute (XHTI), enabling course registration, student management, and efficient communication for a government-approved hospitality institute.",
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Vite",
      "Framer Motion",
      "Firebase",
      "PHP",
      "MySQL",
      "Google Apps Script",
      "Swiper",
    ],
    githubLink: "",
    liveLink: "https://xhti-bd.com",
    image: "/xhti-project.jpg",
  },
  {
    title: "Scouts Poll",
    description:
      "A single-page application for conducting polls, with full admin control. The platform allows users to vote, view poll history, and see results in real time.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "Recharts",
    ],
    githubLink: "https://github.com/scoutspoll",
    liveLink: "https://scoutspoll.com",
    image: "/scouts-poll-project.jpg",
  },
  {
    title: "TrendHaven",
    description:
      "A fully functional e-commerce platform that provides users with a seamless online shopping experience.",
    techStack: [
      "React",
      "Tailwind CSS",
      "@tanstack/react-query",
      "Firebase",
      "Express",
      "MongoDB",
      "Sweetalert2",
      "Framer Motion",
    ],
    githubLink: "https://github.com/trendhaven-client",
    liveLink: "https://trendhaven.com",
    image: "/trendhaven-project.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Projects
        </h2>
        <p className="text-lg text-mutedText mb-10 text-center">
          A showcase of some of the professional projects I've worked on,
          utilizing a wide range of modern technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-800">
                  {project.title}
                </h3>
                <p className="text-mutedText mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="text-xl text-primary" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt className="text-xl text-primary" />
                    </a>
                  )}
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

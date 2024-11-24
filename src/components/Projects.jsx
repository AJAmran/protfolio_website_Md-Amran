import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import biccbd from "../assets/projects/biccbd.png"
import xhti from "../assets/projects/xhitbd.png"
import scoutsss from "../assets/projects/scouts-poll.vercel.app_auth.png"
import trendHavens from "../assets/projects/Trendhaven.png"

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
    image: biccbd,
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
    image: xhti,
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
    githubLink: "https://github.com/UpalBarua/scouts-poll.git",
    liveLink: "https://scouts-poll.vercel.app/auth",
    image: scoutsss,
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
    image: trendHavens,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="md:py-8 lg:py-16 py-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-bold text-center">
          My Projects
        </h2>
        <p className="text-lg text-mutedText mb-10 text-center max-w-2xl mx-auto">
          A showcase of some of the professional projects I have worked on,
          utilizing a wide range of modern technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy" // Lazy loading for performance
              />
              <div className="p-6">
                <h3 className="text-sm md:text-base lg:text-lg font-bold mb-2 text-slate-800">
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
                      rel="noopener noreferrer"
                      aria-label={`View the GitHub repository for ${project.title}`}
                    >
                      <FaGithub className="text-xl text-primary" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit the live demo of ${project.title}`}
                    >
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

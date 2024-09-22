import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: FaJs },
    { name: "ES6", icon: FaJs },
    { name: "React.js", icon: FaReact },
    { name: "Redux", icon: SiRedux },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: FaDatabase },
    { name: "Mongoose", icon: FaDatabase },
    { name: "Firebase", icon: SiFirebase },
    { name: "REST APIs", icon: FaNodeJs },
    { name: "JWT", icon: FaGitAlt },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "ShadcnUI", icon: FaReact },
  ];

  return (
    <section id="skills" className="bg-background py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">
          My Skills
        </h2>
        <p className="text-lg text-mutedText mb-10 text-center">
          A collection of technologies and tools I use to create efficient and
          scalable web applications.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-5">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <skill.icon className="text-5xl text-primary mb-2" />
              <span className="text-lg font-semibold text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

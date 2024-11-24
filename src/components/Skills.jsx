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
  SiFirebase,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="bg-background md:py-8 lg:py-16 py-6">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl text-primary font-bold text-center"
        >
          My Skills
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg text-mutedText mb-10 text-center max-w-2xl mx-auto"
        >
          A collection of technologies and tools I use to create efficient and
          scalable web applications.
        </motion.p>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
              variants={cardVariants}
            >
              <skill.icon className="text-5xl text-primary mb-2" />
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

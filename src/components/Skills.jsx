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

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Controls the delay between each skill appearing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="bg-background py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Animated title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }} // Ensures it animates every time this section comes into view
          className="text-4xl font-bold text-primary mb-2 text-center"
        >
          My Skills
        </motion.h2>

        {/* Animated subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }} // Repeated animation on scroll into view
          className="text-lg text-mutedText mb-10 text-center"
        >
          A collection of technologies and tools I use to create efficient and
          scalable web applications.
        </motion.p>

        {/* Skill icons with scroll animation */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center transition-transform transform hover:scale-110"
              variants={itemVariants}
              aria-label={`${skill.name} icon`}
            >
              <skill.icon className="text-5xl text-primary mb-2" />
              <span className="text-lg font-semibold text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

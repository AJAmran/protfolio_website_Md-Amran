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
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";
import { IoRocketSharp } from "react-icons/io5";

// Organized skills by category
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: FaNodeJs },
      { name: "JWT", icon: FaGitAlt },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: FaDatabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    name: "Tools",
    skills: [{ name: "Git", icon: FaGitAlt }],
  },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)`,
                boxShadow: `0 0 10px rgba(59, 130, 246, 0.2)`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white mb-4 shadow-md">
            <IoRocketSharp className="mr-2 h-5 w-5" />
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            My Development Toolkit
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge technologies to craft efficient, scalable, and modern web applications.
          </p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-xl sm:text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4"
              >
                {category.name}
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center"
                  >
                    <motion.div
                      className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="font-semibold text-gray-900 text-center text-sm sm:text-base">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-200 shadow-md"
        >
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Passionate about staying ahead in web development by continuously mastering new tools and frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
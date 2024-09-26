import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="" className="bg-gray-50 min-h-screen flex items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:py-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-xl font-bold tracking-tight sm:text-xl lg:text-2xl text-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Md Amran Hossen
            <strong className="block text-primary mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Full Stack Developer
            </strong>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl max-w-xl lg:text-2xl leading-relaxed text-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            Specializing in crafting scalable and efficient web solutions using
            React, Node.js, and modern tools.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-medium bg-primary text-white rounded hover:bg-primary-dark"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-medium border border-primary text-primary rounded hover:bg-primary hover:text-white"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

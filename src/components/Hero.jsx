import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:py-32 lg:flex lg:h-screen lg:items-center">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Md Amran Hossen
            <strong className="block font-bold text-primary mt-2 sm:text-4xl lg:text-5xl">
              Full Stack Developer
            </strong>
          </motion.h1>

          <motion.p
            className="mt-6 text-sm sm:text-lg lg:text-xl leading-relaxed text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            I specialize in crafting scalable and efficient web solutions. With
            expertise in React, Node.js, and modern development tools, I help
            businesses grow and achieve their digital goals.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <motion.a
              className="block w-full rounded bg-primary px-12 py-4 text-base font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              href="#"
              whileHover={{ scale: 1.05 }}
            >
              Download Resume
            </motion.a>

            <motion.a
              className="block w-full rounded px-12 py-4 text-base font-medium text-primary shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
              href="#"
              whileHover={{ scale: 1.05 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

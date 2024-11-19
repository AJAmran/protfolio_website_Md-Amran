import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h1
            className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Md Amran Hossen
            <strong className="block mt-2 text-primary text-lg sm:text-xl lg:text-2xl font-extrabold">
              Full Stack Developer
            </strong>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-4 sm:mt-5 text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            Specializing in crafting scalable and efficient web solutions using
            React, Node.js, and modern tools to deliver professional,
            high-quality applications tailored to your needs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="px-5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-medium bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-medium border border-primary text-primary rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
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

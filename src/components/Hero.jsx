import { motion } from "framer-motion";
import heroImage from "../assets/2148430879.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-16 flex flex-col justify-center items-center text-center py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10"
        >
          {/* Heading */}
          <motion.h1
            className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Md Amran Hossen
            <strong className="block mt-2 text-primary text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              Full Stack Developer
            </strong>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
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
            className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="px-6 py-3 text-sm lg:text-base font-medium bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-sm lg:text-base font-medium border border-white text-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
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

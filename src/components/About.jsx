import React from "react";
import myPhoto from "../assets/mdamranhossen.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">
          About Me
        </h2>
        <div className="flex items-center justify-center">
          <motion.img
            src={myPhoto}
            alt="Profile"
            className="w-44 h-44 rounded-full shadow-lg mb-6 lg:mb-0 lg:mr-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="max-w-xl">
            <motion.p
              className="text-lg text-mutedText mb-4 text-justify"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              I am a passionate MERN Stack Developer with a keen interest in
              building scalable web applications.
            </motion.p>
            <motion.p
              className="text-lg text-mutedText"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              With expertise in React, Node.js, MongoDB, and Tailwind CSS, I aim
              to create clean, efficient, and user-friendly solutions that meet
              real-world needs.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";

const codeSnippet = `import React from 'react';

const App = () => {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <p>Welcome to my portfolio</p>
    </div>
  );
};

export default App;`;

const CodeEditor = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeSnippet[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedCode("");
        setIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl h-56 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden border-2 border-gray-700 shadow-2xl bg-gray-900/90 mb-4"
    >
      <div className="flex items-center gap-2 p-3 bg-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="p-4 text-xs sm:text-sm md:text-base font-mono text-white overflow-auto h-[calc(100%-2.5rem)]">
        <code>{displayedCode}</code>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-blue-400"
        />
      </pre>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
    </motion.div>
  );
};

const Hero = () => {
  const [navbarHeight, setNavbarHeight] = useState(64); // Default: 4rem (64px)

  useEffect(() => {
    const updateNavbarHeight = () => {
      const mobile = window.innerWidth < 768;
      const scrolled = window.scrollY > 50;
      setNavbarHeight(mobile ? (scrolled ? 48 : 64) : scrolled ? 56 : 72);
    };
    updateNavbarHeight();
    window.addEventListener("scroll", updateNavbarHeight);
    window.addEventListener("resize", updateNavbarHeight);
    return () => {
      window.removeEventListener("scroll", updateNavbarHeight);
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
      style={{ paddingTop: `${navbarHeight + 16}px` }} // Dynamic padding to avoid overlap
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => {
            const colors = [
              "rgba(59, 130, 246, 0.5)", // Blue
              "rgba(147, 51, 234, 0.5)", // Purple
              "rgba(236, 72, 153, 0.5)", // Pink
              "rgba(255, 255, 255, 0.5)", // White
            ];
            const size = Math.random() * 20 + 10; // Reduced size range: 10-30px
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: colors[Math.floor(Math.random() * colors.length)],
                  boxShadow: `0 0 ${size / 2}px ${
                    colors[Math.floor(Math.random() * colors.length)]
                  }`,
                  filter: `blur(${Math.random() * 1.5}px)`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, Math.random() * 0.5 + 1.1, 1],
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Content */}
          <div className="text-center lg:text-left max-w-md sm:max-w-lg lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Md. Amran Hossen
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-400 mb-6"
              >
                MERN Stack Developer
              </motion.div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0">
                I build exceptional digital experiences with modern web
                technologies, specializing in React, Node.js, and cloud-native
                applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all shadow-md"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                aria-label="Contact Me"
              >
                Contact Me
                <HiArrowNarrowRight className="text-lg" />
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-medium rounded-lg transition-all shadow-md"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                aria-label="View Projects"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-6 sm:mt-8 flex justify-center lg:justify-start gap-4 sm:gap-6"
            >
              {[
                {
                  icon: FaGithub,
                  url: "https://github.com/AJAmran",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  url: "https://linkedin.com/in/md-amran-hossen-713574206",
                  label: "LinkedIn",
                },
                {
                  icon: FaTwitter,
                  url: "https://twitter.com/MdAmran29290306",
                  label: "Twitter",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Code Editor */}
          <CodeEditor />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-xs sm:text-sm text-gray-400 mb-2">
            Scroll down
          </span>
          <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

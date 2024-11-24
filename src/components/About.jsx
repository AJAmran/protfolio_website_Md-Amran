import { motion } from "framer-motion";
import profilePhoto from "../assets/mdamranhossen.jpeg";

const About = () => {
  return (
    <section id="about" className="py-6 md:py-10 lg:py-16 bg-background">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <motion.div
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={profilePhoto}
              alt="Md Amran Hossen"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-mutedText max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I am a passionate Full Stack Developer with extensive experience in creating responsive, high-performance web applications. My focus is on utilizing modern technologies and best practices to deliver efficient solutions.
            </motion.p>
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-mutedText max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              With a strong emphasis on user experience and functionality, I strive to create engaging digital experiences that meet both business objectives and user needs.
            </motion.p>

            {/* Call-to-Action Button */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 text-sm lg:text-base font-semibold bg-primary text-white rounded-full shadow-xl hover:bg-primary-dark transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

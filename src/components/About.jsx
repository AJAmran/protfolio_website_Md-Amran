import { motion } from "framer-motion";
import profilePhoto from "../assets/mdamranhossen.jpeg";

const About = () => {
  return (
    <section id="about" className="md:py-8 lg:py-16 py-6 bg-background">
      <div className="mx-auto max-w-screen-lg px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-48 h-48 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-lg border- border-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profilePhoto}
            alt="Md Amran Hossen"
            className="w-full h-full object-fill"
          />
        </motion.div>

        {/* Text Section */}
        <div className="text-center lg:text-left">
          {/* Heading */}
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-mutedText max-w-xl mb-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I am a passionate Full Stack Developer with experience in building
            responsive and high-performance web applications. My expertise lies
            in utilizing modern technologies and best practices to deliver
            efficient solutions.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-mutedText max-w-xl mb-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            With a focus on user experience and functionality, I strive to
            create engaging digital experiences that not only meet the needs of
            businesses but also resonate with users.
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
              className="px-5 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-medium bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

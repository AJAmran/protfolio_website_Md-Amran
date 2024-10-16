import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-primary mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-mutedText text-center max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I am a passionate Full Stack Developer with experience in building
          responsive and high-performance web applications. My expertise lies in
          utilizing modern technologies and best practices to deliver efficient
          solutions.
        </motion.p>
        <motion.p
          className="text-lg text-mutedText text-center max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          With a focus on user experience and functionality, I strive to create
          engaging digital experiences that not only meet the needs of
          businesses but also resonate with users.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-primary rounded-md shadow-md hover:bg-secondary transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center text-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl font-heading text-primary mb-4">
          Hello, I'm <span className="text-accent">Md. Amran Hossen</span>
        </h1>
        <p className="text-xl text-mutedText mb-6">MERN Stack Developer | Building Innovative Web Solutions</p>
        <a href="#projects" className="px-6 py-3 bg-accent text-white font-bold rounded-lg">
          View My Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsSection from "./components/projects/ProjectsSection";
import projects from "./data/projectData";

import Service from "./components/Service";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();
  
  return (
    <>
      <Helmet>
        <title>Md. Amran Hossen | Senior MERN Stack Developer</title>
        <meta
          name="description"
          content="Professional portfolio of Md. Amran Hossen, Senior MERN Stack Developer with 3+ years of experience building scalable web applications."
        />
        <meta property="og:image" content="/social-preview.jpg" />
        <meta name="theme-color" content="#3b82f6" />
      </Helmet>
      
      <ScrollToTop />
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
          <About />
          <Service />
          <Skills />
          <ProjectsSection
            projects={projects}
            title="Featured Projects"
            description="Selected case studies of professional work"
            gridClass="grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          />
          <Experience />
          <Education />
          <Contact />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </>
  );
}

export default App;
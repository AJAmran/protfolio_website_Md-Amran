import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Footer from "./components/Footer";
import ProjectsSection from "./components/projects/ProjectsSection";
import projects from "./data/projectData";

function App() {
  return (
    <>
      <Helmet>
        <title>Md. Amran Hossen | MERN Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of MERN Stack Developer Md. Amran Hossen."
        />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Service />
      <Skills />
      <ProjectsSection
        projects={projects}
        title="My Portfolio Projects"
        description="Check out my latest work and case studies."
        gridClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        cardClass="custom-card-class"
      />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

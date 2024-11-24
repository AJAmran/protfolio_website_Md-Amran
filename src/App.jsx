import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Footer from "./components/Footer";


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
      <Projects />
      <Experience />
      <Education />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;

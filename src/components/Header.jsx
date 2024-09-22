import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-heading">Md. Amran Hossen</h1>
        <nav className="flex space-x-6">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="mailto:mdamranhossen77@gmail.com">
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

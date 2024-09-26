import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaMillSign } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="mx-auto max-w-screen-xl px-4 flex flex-col items-center space-y-4">
        <p className="text-sm">&copy; 2024 Md. Amran Hossen. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/md-amran-hossen-713574206/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/AJAmran" target="_blank" rel="noreferrer">
            <FaMillSign className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-white md:py-8 lg:py-10 py-6">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        {/* Brand Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-lg font-semibold">Md. Amran Hossen</h2>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center lg:text-right space-y-2">
          <ul className="flex justify-center lg:justify-end space-x-6 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-secondary transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-secondary transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-secondary transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/AJAmran"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
            className="text-xl hover:text-secondary transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-amran-hossen-713574206/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-secondary transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-xl hover:text-secondary transition duration-300"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </div>

      {/* Optional Contact Info Section */}
      <div className="mt-8 text-center text-sm text-gray-300">
        <p>
          <a
            href="mailto:mdamranhossen77@gmail.com"
            className="hover:text-secondary transition duration-300"
          >
            mdamranhossen77@gmail.com
          </a>{" "}
          | +8801857692587 | Agargaon, Sher-E-Bangla Nagar, Dhaka-1207, Bangladesh
        </p>
      </div>
    </footer>
  );
};

export default Footer;

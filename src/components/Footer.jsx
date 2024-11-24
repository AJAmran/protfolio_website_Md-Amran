import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-bold">Md. Amran Hossen</h2>
            <p className="text-sm text-gray-300 mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center lg:text-right">
            <ul className="flex justify-center lg:justify-end space-x-6 text-sm font-medium">
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
          <div className="flex justify-center lg:justify-end space-x-6">
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

        {/* Contact Info */}
        <div className="mt-8 text-center text-sm text-gray-300">
          <p>
            <a
              href="mailto:mdamranhossen77@gmail.com"
              className="hover:text-secondary transition duration-300"
            >
              mdamranhossen77@gmail.com
            </a>{" "}
            | +8801857692587 | Agargaon, Sher-E-Bangla Nagar, Dhaka-1207,
            Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Header = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <h1 className="text-xl font-heading font-semibold">
              Md Amran Hossen
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-teal-500"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-teal-500"
                    href="#"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-teal-500"
                    href="#"
                  >
                    Skills
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-teal-500"
                    href="#"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-teal-500"
                    href="#"
                  >
                    Experience
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-teal-500"
                    href="#"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Download Resume Button */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                  href="#"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden">
            <ul className="mt-4 space-y-2 text-center text-sm text-white">
              <li>
                <a
                  className="block px-4 py-2 hover:text-teal-500"
                  href="#"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:text-teal-500"
                  href="#"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:text-teal-500"
                  href="#"
                  onClick={toggleMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:text-teal-500"
                  href="#"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:text-teal-500"
                  href="#"
                  onClick={toggleMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:text-teal-500"
                  href="#"
                  onClick={toggleMenu}
                >
                  Education
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

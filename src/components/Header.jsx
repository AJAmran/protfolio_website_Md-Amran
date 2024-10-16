import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const sections = [
  "about",
  "services",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections
        .map((section) => {
          const el = document.getElementById(section);
          return el ? { id: section, offset: el.offsetTop } : null;
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i].offset) {
          setActiveSection(sectionOffsets[i].id);
          return;
        }
      }

      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              to="/"
              className="text-xl font-heading font-semibold border p-[2px]"
            >
              Amran<span className="bg-white text-primary">Hossen</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {sections.map((section) => (
                  <li key={section}>
                    <Link
                      to={`#${section}`}
                      className={`text-white transition relative hover:text-teal-500 ${
                        activeSection === section ? "underline-active" : ""
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                      <span
                        className={`underline absolute bottom-0 left-0 h-0.5 w-full bg-teal-500 transition-transform duration-300 scale-x-0 ${
                          activeSection === section ? "scale-x-100" : ""
                        }`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Download Resume Button */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                  href="/Resume of Md. Amran Hossen.pdf"
                  download="Resume of Md. Amran Hossen.pdf"
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
                {isMenuOpen ? (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden shadow-lg rounded-md bg-[#2b6aa09e]">
            <ul className="mt-4 space-y-2 text-center text-sm text-white">
              {sections.map((section) => (
                <li key={section}>
                  <Link
                    to={`#${section}`}
                    className="block px-4 py-2 hover:text-teal-500"
                    onClick={toggleMenu}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

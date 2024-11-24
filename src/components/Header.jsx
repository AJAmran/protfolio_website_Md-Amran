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
    setIsMenuOpen((prev) => !prev);

    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
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

  useEffect(() => {
    return () => {
      // Reset overflow on unmount
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-lg sm:text-xl font-heading font-semibold border-2 px-[2px]"
          >
            Amran<span className="bg-white text-primary py-[3px]">Hossen</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm lg:text-base">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`relative text-white hover:text-teal-500 transition ${
                      activeSection === section ? "underline-active" : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full bg-teal-500 scale-x-0 transition-transform duration-300 ${
                        activeSection === section ? "scale-x-100" : ""
                      }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Download Resume */}
          <a
            href="/Resume of Md. Amran Hossen.pdf"
            download="Resume of Md. Amran Hossen.pdf"
            className="hidden sm:inline-block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary hover:bg-gray-200"
          >
            Download Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden rounded bg-gray-100 p-3 text-gray-600 hover:text-gray-700 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden mt-4 rounded bg-gray-800 p-4 shadow-lg"
          >
            <ul className="space-y-4 text-center text-sm text-white">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="block hover:text-teal-500"
                    onClick={toggleMenu}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
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

import { useState, useEffect } from "react";

// Sections for the navigation (ensure these IDs match your sections in the page)
const sections = [
  "about",
  "services",
  "skills",
  "projects", // Ensure the ID is correct
  "experience",
  "education",
  "contact", // Ensure the ID is correct
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scrolling and highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Only set active section if it's not the hero section
            if (sectionId !== "hero") {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is in view
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
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
                {sections.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
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
                    </a>
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
              {sections.map((section) => (
                <li key={section}>
                  <a
                    className="block px-4 py-2 hover:text-teal-500"
                    href={`#${section}`}
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

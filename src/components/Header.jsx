/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(64);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setNavbarHeight(mobile ? (isScrolled ? 48 : 64) : isScrolled ? 56 : 72); // Adjust for scrolled/unscrolled
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setNavbarHeight(isMobile ? (scrolled ? 48 : 64) : scrolled ? 56 : 72);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + (isMobile ? 100 : 150);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3 md:py-2"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            onClick={closeMobileMenu}
            aria-label="Go to Home"
          >
            <span
              className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              Amran
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
            <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    className={`relative px-2 py-2 text-sm lg:text-base xl:text-lg font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "text-blue-600"
                        : isScrolled
                        ? "text-gray-800 hover:text-blue-500"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute left-0 bottom-0 h-1 w-full bg-blue-500 rounded-full"
                        transition={{
                          type: "spring",
                          bounce: 0.3,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex items-center gap-3 lg:gap-4 ml-4 lg:ml-6"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="/Resume of Md. Amran Hossen.pdf"
                download
                className={`flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-sm lg:text-base font-medium transition-colors shadow-md ${
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-gray-100"
                }`}
                aria-label="Download Resume"
              >
                <FaFileDownload className="text-sm" />
                <span className="hidden lg:inline">Resume</span>
                <span className="lg:hidden">Download</span>
              </a>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-full focus:outline-none focus:ring-2 ${
              isScrolled
                ? "text-gray-800 focus:ring-blue-500 bg-gray-100"
                : "text-white focus:ring-white bg-gray-800/30"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`md:hidden fixed inset-x-0 top-16 z-50 shadow-lg overflow-hidden ${
                isScrolled ? "bg-white" : "bg-gray-900/95"
              }`}
            >
              <div className="container mx-auto px-4 sm:px-6 py-6">
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1 + navItems.indexOf(item) * 0.05,
                      }}
                    >
                      <a
                        href={item.href}
                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          activeSection === item.href.substring(1)
                            ? "text-blue-400 bg-blue-900/10"
                            : isScrolled
                            ? "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                            : "text-white hover:text-blue-300 hover:bg-gray-800"
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className={`mt-6 pt-6 ${
                    isScrolled ? "border-gray-200" : "border-gray-700"
                  } border-t`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-center gap-4">
                    {[
                      { icon: FaGithub, url: "https://github.com/AJAmran" },
                      {
                        icon: FaLinkedin,
                        url: "https://linkedin.com/in/md-amran-hossen-713574206",
                      },
                      {
                        icon: FaTwitter,
                        url: "https://twitter.com/MdAmran29290306",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full transition-colors shadow-sm ${
                          isScrolled
                            ? "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                            : "text-white hover:text-blue-300 hover:bg-gray-800"
                        }`}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        aria-label={social.icon.name.replace("Fa", "")}
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.a>
                    ))}
                  </div>

                  <motion.a
                    href="/Resume of Md. Amran Hossen.pdf"
                    download
                    className={`mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-medium transition-colors shadow-md ${
                      isScrolled
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-blue-600 hover:bg-gray-100"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    aria-label="Download Resume"
                  >
                    <FaFileDownload className="text-base" />
                    Download Resume
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

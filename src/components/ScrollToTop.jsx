import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Optional: Add a scroll-to-top button that appears when user scrolls down
  const showScrollButton = () => {
    const scrollButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
      scrollButton?.classList.remove('opacity-0', 'invisible');
      scrollButton?.classList.add('opacity-100', 'visible');
    } else {
      scrollButton?.classList.add('opacity-0', 'invisible');
      scrollButton?.classList.remove('opacity-100', 'visible');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showScrollButton);
    return () => window.removeEventListener('scroll', showScrollButton);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating scroll-to-top button */}
      <motion.button
        id="scroll-to-top"
        initial={{ opacity: 0 }}
        className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 invisible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  );
};

export default ScrollToTop;
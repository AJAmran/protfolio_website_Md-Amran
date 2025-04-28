import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectLightbox = ({ 
  images, 
  isOpen, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev, 
  onNavigate 
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 text-white text-2xl p-2"
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            
            <motion.img
              key={currentIndex}
              src={images[currentIndex]?.src}
              alt={`Project screenshot ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] mx-auto object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
              aria-label="Next image"
            >
              <FaChevronRight className="text-xl" />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectLightbox;
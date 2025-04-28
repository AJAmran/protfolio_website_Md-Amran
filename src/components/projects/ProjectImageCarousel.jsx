import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

const ProjectImageCarousel = ({ 
  images, 
  currentIndex, 
  onNext, 
  onPrev, 
  onNavigate, 
  onExpand,
  className = ""
}) => {

    console.log("images", images);
  return (
    <div className={`relative w-full overflow-hidden group ${className}`}>
      {/* Expand Button */}
      <button
        onClick={onExpand}
        className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label="Expand image"
      >
        <FaExpand className="text-sm" />
      </button>
      
      {/* Main Image */}
      <img
        src={images[currentIndex]?.src}
        alt={`Project screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover cursor-pointer"
        loading="lazy"
        onClick={onExpand}
      />
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </>
      )}
      
      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-white w-4' : 'bg-white/50'}`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
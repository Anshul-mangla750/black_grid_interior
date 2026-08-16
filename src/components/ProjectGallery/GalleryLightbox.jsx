import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const GalleryLightbox = ({ project, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageErrorMap, setImageErrorMap] = useState({});
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const touchStartX = useRef(null);

  if (!project) return null;

  const images = Array.isArray(project.images) && project.images.length > 0
    ? project.images
    : [project.image || project.heroImage || ''];

  const totalImages = images.length;
  const currentImageUrl = images[currentIndex];

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Lock body scroll when modal is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard navigation: Escape, Left Arrow, Right Arrow
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalImages]);

  const handleNext = () => {
    if (totalImages <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = () => {
    if (totalImages <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleThumbClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Mobile Touch Swipe gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    // Minimum swipe threshold: 40px
    if (diffX > 40) {
      handleNext();
    } else if (diffX < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const handleImageError = (index) => {
    console.warn(`[GalleryLightbox] Failed to load image at index ${index}: ${images[index]}`);
    setImageErrorMap((prev) => ({ ...prev, [index]: true }));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        className="pg-lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} Lightbox Gallery`}
      >
        {/* Header Bar */}
        <div className="pg-lightbox-header">
          <div className="pg-lightbox-title-area">
            <div className="pg-lightbox-meta">{project.category || 'RESIDENTIAL ARCHITECTURE'} • {project.location || 'INDIA'}</div>
            <h2 className="pg-lightbox-title">{project.title}</h2>
          </div>
          <button
            type="button"
            className="pg-lightbox-close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>
        </div>

        {/* Main Display Area */}
        <div
          className="pg-lightbox-body"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Arrow */}
          {totalImages > 1 && (
            <button
              type="button"
              className="pg-lightbox-btn prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Centered Active Image */}
          <div className="pg-lightbox-img-wrapper">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}
              >
                {imageErrorMap[currentIndex] ? (
                  <div style={{
                    width: '600px',
                    height: '400px',
                    background: '#1a1a1a',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    color: 'rgba(255,255,255,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <ImageIcon size={48} />
                    <span>Image preview unavailable</span>
                  </div>
                ) : (
                  <img
                    src={currentImageUrl}
                    alt={`${project.title} - view ${currentIndex + 1}`}
                    className="pg-lightbox-main-img"
                    onError={() => handleImageError(currentIndex)}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow */}
          {totalImages > 1 && (
            <button
              type="button"
              className="pg-lightbox-btn next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        {/* Footer Area: Counter & Thumbnails */}
        <div className="pg-lightbox-footer">
          {totalImages > 1 && (
            <div className="pg-lightbox-counter-bar">
              <span>{String(currentIndex + 1).padStart(2, '0')}</span> / {String(totalImages).padStart(2, '0')}
            </div>
          )}

          {/* Thumbnail Navigation Strip */}
          {totalImages > 1 && (
            <div className="pg-lightbox-thumbnails">
              {images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pg-lightbox-thumb ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => handleThumbClick(idx)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    loading="lazy"
                    onError={() => handleImageError(idx)}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryLightbox;

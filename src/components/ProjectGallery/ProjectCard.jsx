import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Image as ImageIcon } from 'lucide-react';
import './gallery.css';

const ProjectCard = ({ project, onClick, index = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const touchStartX = useRef(null);
  const cardRef = useRef(null);

  if (!project) return null;

  // Resolve images array dynamically (supports 1, 2, 3, 4, 5, 6+ images)
  const images = Array.isArray(project.images) && project.images.length > 0
    ? project.images
    : [project.image || project.heroImage || ''];

  const totalImages = images.length;
  const currentImageUrl = images[activeIndex] || images[0] || '';

  // Desktop Hover Interaction — Invisible Horizontal Interaction Zones
  const handleMouseMove = (e) => {
    if (totalImages <= 1 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const widthRatio = Math.max(0, Math.min(1, mouseX / rect.width));
    const newIndex = Math.min(totalImages - 1, Math.floor(widthRatio * totalImages));
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  // Mobile Touch Swipe Gesture
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || totalImages <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 35) {
      // Swipe left -> next image
      setActiveIndex((prev) => (prev + 1) % totalImages);
    } else if (diffX < -35) {
      // Swipe right -> prev image
      setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
    touchStartX.current = null;
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick(project, activeIndex);
    }
  };

  const formattedCurrent = String(activeIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalImages).padStart(2, '0');

  return (
    <motion.div
      className="pg-card"
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.4),
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={handleCardClick}
      data-cursor="VIEW"
      aria-label={`View ${project.title} project gallery`}
    >
      {/* Image Wrap */}
      <div
        className="pg-card-image-wrap"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {hasError ? (
          <div style={{
            width: '100%',
            height: '100%',
            background: 'var(--color-gray-dark, #2A2A2A)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-gray-muted, #999)',
            gap: '0.5rem',
            fontSize: '0.85rem'
          }}>
            <ImageIcon size={24} />
            <span>Image Unavailable</span>
          </div>
        ) : (
          <img
            src={currentImageUrl}
            alt={`${project.title} - ${activeIndex + 1}`}
            className="pg-card-img"
            loading={index < 2 ? 'eager' : 'lazy'}
            onError={() => setHasError(true)}
          />
        )}

        <div className="pg-card-overlay" />

        {/* Category Badge Top-Left */}
        {project.category && (
          <div className="pg-card-category-badge">
            {project.category}
          </div>
        )}

        {/* Counter Badge Top-Right (e.g. 01 / 04) */}
        {totalImages > 1 && (
          <div className="pg-card-counter">
            <span className="current-num">{formattedCurrent}</span> / {formattedTotal}
          </div>
        )}

        {/* Invisible Desktop Hover Zones */}
        {totalImages > 1 && (
          <div className="pg-card-zones">
            {Array.from({ length: totalImages }).map((_, i) => (
              <div key={i} className="pg-card-zone" />
            ))}
          </div>
        )}

        {/* Dynamic Dots (Bottom Center) */}
        {totalImages > 1 && (
          <div className="pg-card-dots">
            {images.map((_, i) => (
              <div
                key={i}
                className={`pg-dot ${activeIndex === i ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info Bar */}
      <div className="pg-card-info">
        <div>
          <h3 className="pg-card-title">{project.title}</h3>
          <div className="pg-card-sub">
            {project.location && (
              <span>
                <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} />
                {project.location}
              </span>
            )}
            {project.location && project.year && <span className="sep">•</span>}
            {project.year && <span>{project.year}</span>}
          </div>
        </div>

        <div className="pg-card-arrow-btn">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

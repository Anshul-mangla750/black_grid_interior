import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const ringSpringX = useSpring(ringX, springConfig);
  const ringSpringY = useSpring(ringY, springConfig);

  const [cursorText, setCursorText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseEnter = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsExpanded(true);
        setCursorText(target.getAttribute('data-cursor') || 'VIEW');
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsExpanded(false);
        setCursorText('');
      }
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [isMobile, cursorX, cursorY, ringX, ringY]);

  if (isMobile) return null;

  return (
    <div className="custom-cursor" style={{ opacity: isVisible ? 1 : 0 }}>
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isExpanded ? 0 : 1,
        }}
        transition={{ duration: 0 }}
      />
      <motion.div
        className={`cursor-ring ${isExpanded ? 'cursor-expanded' : ''}`}
        style={{
          x: ringSpringX,
          y: ringSpringY,
          width: isExpanded ? 80 : 40,
          height: isExpanded ? 80 : 40,
          marginLeft: isExpanded ? -40 : -20,
          marginTop: isExpanded ? -40 : -20,
        }}
        transition={{ width: { duration: 0.3 }, height: { duration: 0.3 } }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: '#fff',
          }}
        >
          {cursorText}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default CustomCursor;

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParallaxImage = ({
  src,
  alt,
  overlayText,
  height = '60vh',
}) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((progress - 0.5) * 60);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="parallax-section"
      style={{ height, minHeight: '400px' }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s linear',
        }}
      />
      <div className="parallax-overlay">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {overlayText && (
            <h2
              className="heading-xl"
              style={{
                color: 'var(--color-white-pure)',
                textAlign: 'center',
                padding: '0 2rem',
              }}
            >
              {overlayText.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < overlayText.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxImage;

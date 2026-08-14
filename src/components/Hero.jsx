import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, MapPin } from 'lucide-react';

import logoImg from '../assets/logo.png';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80';

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setHeroReady(true), 300);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isMobile]);

  const headlineWords = [
    'CRAFTING LUXURY INTERIORS',
    '& ARCHITECTURAL FACADES.'
  ];

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <img
                src={logoImg}
                alt="Black Grid Interior"
                style={{
                  height: '82px',
                  width: 'auto',
                  transform: 'scaleX(1.35)',
                  transformOrigin: 'center',
                  filter: 'invert(1)',
                  mixBlendMode: 'screen',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '60px',
                height: '1px',
                background: 'var(--color-gray-mid)',
                marginTop: '1.5rem',
                transformOrigin: 'left',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero" ref={heroRef} id="hero">
        {/* Background Image with Parallax */}
        <motion.div
          className="hero-bg"
          initial={{ scale: 1.15 }}
          animate={heroReady ? { scale: 1 } : { scale: 1.15 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px) scale(${heroReady ? 1.02 : 1.15})`
              : undefined,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={!loading ? { clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={HERO_IMAGE}
              alt="Black Grid Interior - Luxury Modern Architecture and Spatial Visualization"
              loading="eager"
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
          </motion.div>
        </motion.div>

        {/* Dynamic Gradient Overlay */}
        <div
          className="hero-overlay"
          style={{
            background: 'linear-gradient(180deg, rgba(8,8,10,0.72) 0%, rgba(12,12,14,0.65) 50%, rgba(10,10,12,0.92) 100%)',
          }}
        />

        {/* Content */}
        <div className="hero-content container" style={{ width: '100%' }}>
          <motion.div
            style={{
              transform: !isMobile
                ? `translate(${mousePos.x * -4}px, ${mousePos.y * -4}px)`
                : undefined,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Eyebrow Badge */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={heroReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>BLACK GRID INTERIOR</span>
            </motion.div>

            {/* Headline */}
            <div className="hero-heading-wrapper">
              {headlineWords.map((word, i) => (
                <div key={i} style={{ overflow: 'hidden' }}>
                  <motion.div
                    className="heading-display hero-heading-text"
                    initial={{ y: '110%' }}
                    animate={heroReady ? { y: 0 } : {}}
                    transition={{
                      duration: 0.9,
                      delay: 0.5 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      color: i === 1 ? 'var(--color-gold, #c5a059)' : 'var(--color-white-pure)',
                    }}
                  >
                    {word}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={heroReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Black Grid Interior is a premier architectural and interior design studio specializing in bespoke luxury residences, corporate executive spaces, architectural elevation rendering, and photorealistic 3D spatial planning.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={heroReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="/work" className="btn-primary" data-cursor="VIEW">
                EXPLORE PORTFOLIO
                <ArrowRight size={16} className="btn-arrow" />
              </a>
              <a href="/contact" className="btn-outline" data-cursor="OPEN">
                BOOK CONSULTATION
              </a>
            </motion.div>

            {/* Service & Experience Badges */}
            <motion.div
              className="hero-badges"
              initial={{ opacity: 0, y: 20 }}
              animate={heroReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-badge-item">
                <Award size={15} style={{ color: 'var(--color-gold, #c5a059)' }} />
                <span>7+ Years Design Mastery</span>
              </div>
              <div className="hero-badge-item">
                <ShieldCheck size={15} style={{ color: 'var(--color-gold, #c5a059)' }} />
                <span>60+ 3D Renderings</span>
              </div>
              <div className="hero-badge-item">
                <MapPin size={15} style={{ color: 'var(--color-gold, #c5a059)' }} />
                <span>Faridabad & Delhi NCR</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={heroReady ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 2.2 }}
          style={{ display: isMobile ? 'none' : 'flex' }}
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;


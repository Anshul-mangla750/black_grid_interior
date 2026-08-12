import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Main Footer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(2rem, 4vw, 3rem)',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
        className="footer-grid"
        >
          {/* Logo */}
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-off-white)',
              lineHeight: 1,
            }}>
              SPACECRAFT
            </div>
            <div style={{
              fontSize: '0.55rem',
              letterSpacing: '0.25em',
              color: 'var(--color-gray-muted)',
              marginTop: '4px',
            }}>
              3D INTERIORS
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/" className="footer-link">HOME</Link>
            <Link to="/about" className="footer-link">ABOUT</Link>
            <Link to="/work" className="footer-link">WORK</Link>
            <Link to="/contact" className="footer-link">CONTACT</Link>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#" className="footer-link" data-cursor="OPEN">Instagram</a>
            <a href="#" className="footer-link" data-cursor="OPEN">LinkedIn</a>
            <a href="mailto:hello@spacecraft3d.com" className="footer-link" data-cursor="OPEN">Email</a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            color: 'var(--color-gray-mid)',
          }}>
            © 2026 Spacecraft 3D Interiors. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="footer-link"
            data-cursor="TOP"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            BACK TO TOP
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
            align-items: start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

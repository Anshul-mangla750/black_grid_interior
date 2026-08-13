import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-12 border-b border-[rgba(255,255,255,0.06)]">
          {/* Logo */}
          <div>
            <img
              src={logoImg}
              alt="Black Grid Interiors"
              style={{
                height: '48px',
                width: 'auto',
                filter: 'invert(1)',
                mixBlendMode: 'screen',
                objectFit: 'contain',
              }}
            />
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
            <a href="https://www.instagram.com/black_grid_interiors?igsh=cGpqaWF4aDJxbjcw" target="_blank" rel="noopener noreferrer" className="footer-link" data-cursor="OPEN">Instagram</a>
            <a href="https://www.linkedin.com/in/raja-rk-7890a71a0?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="footer-link" data-cursor="OPEN">LinkedIn</a>
            <a href="mailto:Rajark9112000@gmail.com" className="footer-link" data-cursor="OPEN">Email</a>
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
            © 2026 Black Grid Interiors. All rights reserved.
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
    </footer>
  );
};

export default Footer;

import { useRef } from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, heading, align = 'left', light = false, headingClass = 'heading-xl' }) => {
  const headingLines = typeof heading === 'string' ? heading.split('\n') : [heading];

  return (
    <div style={{ textAlign: align, marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
      {eyebrow && (
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'block',
            marginBottom: '1.25rem',
            color: light ? 'var(--color-gray-soft)' : 'var(--color-gray-muted)',
          }}
        >
          {eyebrow}
        </motion.span>
      )}
      <div>
        {headingLines.map((line, i) => (
          <div key={i} style={{ overflow: 'hidden' }}>
            <motion.div
              className={headingClass}
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                color: light ? 'var(--color-charcoal)' : 'var(--color-off-white)',
              }}
            >
              {line}
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: '1px',
          background: light ? 'var(--color-beige-warm)' : 'rgba(255,255,255,0.08)',
          marginTop: '1.5rem',
          transformOrigin: align === 'center' ? 'center' : 'left',
          maxWidth: align === 'center' ? '120px' : '80px',
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
        }}
      />
    </div>
  );
};

export default SectionHeading;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/projects';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding" id="testimonials" style={{ background: 'var(--color-black-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <SectionHeading
          eyebrow="CLIENT STORIES"
          heading={'BUILT ON VISION.\nDEFINED BY DETAIL.'}
          align="center"
          headingClass="heading-lg"
        />

        {/* Testimonial Slider */}
        <div style={{
          position: 'relative',
          textAlign: 'center',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="testimonial-text" style={{ marginBottom: '2rem' }}>
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="testimonial-author">
                — {testimonials[current].author}, {testimonials[current].role}
              </div>
              <div style={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--color-gray-mid)',
                marginTop: '0.5rem',
                textTransform: 'uppercase',
              }}>
                {testimonials[current].company}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '3rem',
        }}>
          <button
            onClick={prev}
            className="btn-outline"
            data-cursor="PREV"
            aria-label="Previous testimonial"
            style={{ padding: '0.75rem' }}
          >
            <ArrowLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: current === i ? '24px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: current === i ? 'var(--color-off-white)' : 'var(--color-gray-mid)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="btn-outline"
            data-cursor="NEXT"
            aria-label="Next testimonial"
            style={{ padding: '0.75rem' }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

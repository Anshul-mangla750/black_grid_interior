import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section
      style={{
        background: 'var(--color-black-deep)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding"
      id="cta"
    >
      {/* Architectural Lines */}
      <div className="arch-lines">
        <div className="arch-line arch-line-h" style={{ top: '20%', opacity: 0.5 }} />
        <div className="arch-line arch-line-h" style={{ top: '40%', opacity: 0.3 }} />
        <div className="arch-line arch-line-h" style={{ top: '60%', opacity: 0.5 }} />
        <div className="arch-line arch-line-h" style={{ top: '80%', opacity: 0.3 }} />
        <div className="arch-line arch-line-v" style={{ left: '15%', opacity: 0.3 }} />
        <div className="arch-line arch-line-v" style={{ left: '85%', opacity: 0.3 }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'block', marginBottom: '2rem' }}
        >
          GET IN TOUCH
        </motion.span>

        <div style={{ marginBottom: '2rem' }}>
          {['LET\'S CREATE', 'SOMETHING', 'BEAUTIFUL.'].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.div
                className="heading-display"
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ color: 'var(--color-off-white)' }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.p
          className="text-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            maxWidth: '450px',
            margin: '0 auto 2.5rem',
            color: 'var(--color-gray-muted)',
          }}
        >
          Have a project in mind? We&apos;d love to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="/contact" className="btn-primary" data-cursor="OPEN">
            START A PROJECT
            <span className="btn-arrow">→</span>
          </a>
          <a href="/work" className="btn-outline" data-cursor="VIEW">
            VIEW OUR WORK
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

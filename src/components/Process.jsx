import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { processSteps } from '../data/projects';

const Process = () => {
  return (
    <section className="section-padding" id="process" style={{ background: 'var(--color-black-primary)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start',
        }}
        className="process-layout"
        >
          {/* Left - Sticky Heading */}
          <div className="process-heading-sticky">
            <SectionHeading
              eyebrow="OUR PROCESS"
              heading={'FROM IDEA TO\nIMMERSIVE REALITY.'}
            />
            <motion.p
              className="text-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ maxWidth: '400px' }}
            >
              Every project follows our proven four-step methodology, ensuring exceptional
              results from initial concept to final delivery.
            </motion.p>
          </div>

          {/* Right - Process Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="process-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="process-number">{step.number}</div>
                <div className="process-title">{step.title}</div>
                <div className="process-desc">{step.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .process-layout {
            grid-template-columns: 1fr 1fr !important;
          }
          .process-heading-sticky {
            position: sticky;
            top: 8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;

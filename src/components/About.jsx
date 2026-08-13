import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80';

const About = () => {
  return (
    <section className="section-padding" id="about" style={{ background: 'var(--color-black-primary)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Side */}
          <div>
            <SectionHeading
              eyebrow="WHO WE ARE"
              heading={'WE DESIGN.\nWE VISUALIZE.\nWE INSPIRE.'}
            />

            <motion.p
              className="text-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ maxWidth: '500px', marginBottom: '2rem' }}
            >
              Black Grid Interiors is a creative visualization studio specializing in
              photorealistic 3D interior visualization and design. We help architects,
              designers and businesses see their spaces come to life before they are built.
            </motion.p>

            <motion.a
              href="/about"
              className="btn-primary"
              data-cursor="EXPLORE"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              ABOUT US
              <span className="btn-arrow">→</span>
            </motion.a>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', position: 'relative' }}
            data-cursor="VIEW"
          >
            <motion.img
              src={ABOUT_IMAGE}
              alt="Modern luxury interior with floor-to-ceiling windows and contemporary design"
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '4/5',
                objectFit: 'cover',
                display: 'block',
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

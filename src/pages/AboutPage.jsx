import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Process from '../components/Process';
import StatsMarquee from '../components/StatsMarquee';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const AboutPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      style={{ background: 'var(--color-black-primary)', minHeight: '100vh', paddingTop: '5rem' }}
    >
      <div className="container">
        <SectionHeading eyebrow="ABOUT US" heading="WE BRING IMAGINATION TO LIFE" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
          
          <div>
            <h2 className="heading-md" style={{ color: 'var(--color-off-white)', marginBottom: '1.5rem' }}>
              OUR PHILOSOPHY
            </h2>
            <p className="text-body" style={{ marginBottom: '1.5rem' }}>
              At Black Grid Interiors, we bring over 7+ years of experience across luxury interior design, interior architecture, commercial interior design, architectural elevation, and photorealistic 3D visualization. We deliver end-to-end design clarity from initial floor planning to complete turnkey execution.
            </p>
            <p className="text-body">
              With 7+ years of expertise, leading architects, real estate developers, and private homeowners trust us to transform complex spatial ideas into stunning visual realities.
            </p>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80" 
              alt="Premium office setup visualization" 
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

        </div>
      </div>
      
      <StatsMarquee />
      <Process />
      
    </motion.div>
  );
};

export default AboutPage;

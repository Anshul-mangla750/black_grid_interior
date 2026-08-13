import { motion } from 'framer-motion';
import Projects from '../components/Projects';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const WorkPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      style={{ paddingTop: '5rem', background: 'var(--color-charcoal)' }}
    >
      <Projects isHome={false} />
    </motion.div>
  );
};

export default WorkPage;

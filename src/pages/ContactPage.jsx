import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const ContactPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      style={{ paddingTop: '6rem', minHeight: '100vh', background: 'var(--color-black-primary)' }}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;

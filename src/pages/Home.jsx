import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import StatsMarquee from '../components/StatsMarquee';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Services from '../components/Services';
import ParallaxImage from '../components/ParallaxImage';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <About />
      <StatsMarquee />
      <Projects isHome={true} />
      <Process />
      <Services />
      <ParallaxImage 
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
        alt="Interior details close up" 
        overlayText="DETAILS CREATE THE EXPERIENCE." 
      />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Home;

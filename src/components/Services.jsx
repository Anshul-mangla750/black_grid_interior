import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { services } from '../data/projects';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="section-padding" id="services" style={{ background: 'var(--color-charcoal)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Side */}
          <div>
            <SectionHeading eyebrow="SERVICES" heading="WHAT WE CREATE" />

            {/* Service Image */}
            <motion.div
              style={{
                overflow: 'hidden',
                aspectRatio: '4/3',
              }}
              className="hidden md:block"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService || 'default'}
                  src={
                    services.find((s) => s.id === activeService)?.image ||
                    services[0].image
                  }
                  alt="Service visualization"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Side - Accordion */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <div
                  className="service-header"
                  onClick={() => toggleService(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleService(service.id)}
                  data-cursor="OPEN"
                >
                  <span className="service-number">{service.number}</span>
                  <span className="service-title">{service.title}</span>
                  <motion.div
                    animate={{ rotate: activeService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeService === service.id ? (
                      <Minus size={18} style={{ color: 'var(--color-gray-muted)' }} />
                    ) : (
                      <Plus size={18} style={{ color: 'var(--color-gray-muted)' }} />
                    )}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      className="service-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="service-desc">{service.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

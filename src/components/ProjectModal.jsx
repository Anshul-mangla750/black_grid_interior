import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Close Button */}
        <button className="project-modal-close" onClick={onClose} data-cursor="CLOSE" aria-label="Close project">
          <X size={20} />
        </button>

        {/* Content */}
        <div style={{ minHeight: '100vh' }}>
          {/* Hero Image */}
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: '70vh', overflow: 'hidden', position: 'relative' }}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--color-black-primary) 0%, transparent 50%)',
            }} />
          </motion.div>

          {/* Project Info */}
          <div className="container" style={{ position: 'relative', marginTop: '-8rem', zIndex: 1 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px]">
              <div>
                <motion.span
                  className="eyebrow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ display: 'block', marginBottom: '1rem' }}
                >
                  {project.category}
                </motion.span>
                <motion.h1
                  className="heading-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  style={{ marginBottom: '1.5rem' }}
                >
                  {project.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '0.25rem' }}>Location</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-off-white)' }}>{project.location}</span>
                  </div>
                  <div>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: '0.25rem' }}>Year</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-off-white)' }}>{project.year}</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <p className="text-body" style={{ marginBottom: '2rem' }}>
                  {project.description}
                </p>

                {/* Project Details */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  padding: '2rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  marginBottom: '2rem',
                }}>
                  {Object.entries(project.details).map(([key, value]) => (
                    <div key={key}>
                      <span className="eyebrow" style={{ display: 'block', marginBottom: '0.25rem' }}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--color-off-white)' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Design Concept */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{ maxWidth: '800px', margin: '3rem 0' }}
            >
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Design Concept</h2>
              <p className="text-body">{project.concept}</p>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
                marginBottom: '4rem',
              }}
            >
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ duration: 0.8, delay: 0.9 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                  data-cursor="VIEW"
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery image ${i + 1}`}
                    loading="lazy"
                    style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '2rem',
              paddingBottom: '4rem',
            }}>
              {prevProject ? (
                <button
                  onClick={() => onClose(prevProject)}
                  className="btn-outline"
                  data-cursor="PREV"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <ArrowLeft size={16} />
                  {prevProject.title}
                </button>
              ) : <div />}
              {nextProject ? (
                <button
                  onClick={() => onClose(nextProject)}
                  className="btn-outline"
                  data-cursor="NEXT"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {nextProject.title}
                  <ArrowRight size={16} />
                </button>
              ) : <div />}
            </div>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

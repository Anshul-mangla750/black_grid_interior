import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Grid, MoveHorizontal, Building2, Home as HomeIcon, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const allFilters = [
  { key: 'all', label: 'ALL WORK' },
  { key: 'living', label: 'LIVING' },
  { key: 'bedroom', label: 'BEDROOM' },
  { key: 'elevation', label: 'ELEVATION' },
];

const interiorFilters = [
  { key: 'all', label: 'ALL INTERIORS' },
  { key: 'living', label: 'LIVING' },
  { key: 'bedroom', label: 'BEDROOM' },
];

const exteriorFilters = [
  { key: 'all', label: 'ALL EXTERIORS' },
  { key: 'elevation', label: 'ELEVATION & FACADES' },
];

const Projects = ({ isHome = false }) => {
  const [mainCategory, setMainCategory] = useState('all'); // 'all', 'interior', 'exterior'
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('swipe'); // 'swipe' or 'grid'
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Compute counts — strictly by folder source
  const exteriorProjects = projects.filter((p) => p.imageKey?.startsWith('photos/exterior/'));
  const interiorProjects = projects.filter((p) => p.imageKey?.startsWith('photos/interior/'));

  const exteriorCount = exteriorProjects.length;
  const interiorCount = interiorProjects.length;
  const totalCount = projects.length;

  // Filter projects based on mainCategory and activeFilter
  const filteredProjects = projects.filter((p) => {
    if (mainCategory === 'exterior') {
      if (!p.imageKey?.startsWith('photos/exterior/')) return false;
    }
    if (mainCategory === 'interior') {
      if (!p.imageKey?.startsWith('photos/interior/')) return false;
    }
    if (activeFilter !== 'all' && p.filter !== activeFilter) return false;
    return true;
  });

  // Select active filter buttons array based on mainCategory
  const currentFilters =
    mainCategory === 'interior'
      ? interiorFilters
      : mainCategory === 'exterior'
      ? exteriorFilters
      : allFilters;

  // Limit to 8 items on Home Page
  const displayProjects = isHome ? filteredProjects.slice(0, 8) : filteredProjects;

  // Reset slider index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter, mainCategory]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = (navigateToProject) => {
    if (navigateToProject && navigateToProject.id) {
      setSelectedProject(navigateToProject);
    } else {
      setSelectedProject(null);
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <section id="work" style={{ background: 'var(--color-charcoal)', paddingTop: '2.5rem', paddingBottom: 'clamp(4rem, 8vw, 8rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <SectionHeading eyebrow="OUR WORK" heading={isHome ? "FEATURED PROJECTS" : "PORTFOLIO & WORK"} />

            {/* View Switcher (Swipe vs Grid on Home Page) */}
            {isHome && (
              <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '4px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
                <button
                  type="button"
                  onClick={() => setViewMode('swipe')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 1rem',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    border: 'none',
                    cursor: 'pointer',
                    background: viewMode === 'swipe' ? 'var(--color-gold, #c5a059)' : 'transparent',
                    color: viewMode === 'swipe' ? '#000000' : 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <MoveHorizontal size={14} />
                  <span>SWIPE SLIDER</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 1rem',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    border: 'none',
                    cursor: 'pointer',
                    background: viewMode === 'grid' ? 'var(--color-gold, #c5a059)' : 'transparent',
                    color: viewMode === 'grid' ? '#000000' : 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Grid size={14} />
                  <span>GRID VIEW</span>
                </button>
              </div>
            )}
          </div>

          {/* MAIN CATEGORY SEGREGATION BUTTONS: ALL vs INTERIOR vs EXTERIOR */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <button
              type="button"
              onClick={() => {
                setMainCategory('all');
                setActiveFilter('all');
              }}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                border: mainCategory === 'all' ? '1px solid var(--color-gold, #c5a059)' : '1px solid rgba(255,255,255,0.15)',
                background: mainCategory === 'all' ? 'var(--color-gold, #c5a059)' : 'rgba(255,255,255,0.04)',
                color: mainCategory === 'all' ? '#000000' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: mainCategory === 'all' ? '0 4px 20px rgba(197, 160, 89, 0.35)' : 'none',
              }}
            >
              <Layers size={15} />
              <span>ALL PROJECTS</span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                opacity: 0.85,
                background: mainCategory === 'all' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.12)',
                padding: '2px 8px',
                borderRadius: '10px',
              }}>
                {totalCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMainCategory('interior');
                setActiveFilter('all');
              }}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                border: mainCategory === 'interior' ? '1px solid var(--color-gold, #c5a059)' : '1px solid rgba(255,255,255,0.15)',
                background: mainCategory === 'interior' ? 'var(--color-gold, #c5a059)' : 'rgba(255,255,255,0.04)',
                color: mainCategory === 'interior' ? '#000000' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: mainCategory === 'interior' ? '0 4px 20px rgba(197, 160, 89, 0.35)' : 'none',
              }}
            >
              <HomeIcon size={15} />
              <span>INTERIOR DESIGN</span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                opacity: 0.85,
                background: mainCategory === 'interior' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.12)',
                padding: '2px 8px',
                borderRadius: '10px',
              }}>
                {interiorCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMainCategory('exterior');
                setActiveFilter('all');
              }}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                border: mainCategory === 'exterior' ? '1px solid var(--color-gold, #c5a059)' : '1px solid rgba(255,255,255,0.15)',
                background: mainCategory === 'exterior' ? 'var(--color-gold, #c5a059)' : 'rgba(255,255,255,0.04)',
                color: mainCategory === 'exterior' ? '#000000' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: mainCategory === 'exterior' ? '0 4px 20px rgba(197, 160, 89, 0.35)' : 'none',
              }}
            >
              <Building2 size={15} />
              <span>EXTERIOR DESIGN</span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                opacity: 0.85,
                background: mainCategory === 'exterior' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.12)',
                padding: '2px 8px',
                borderRadius: '10px',
              }}>
                {exteriorCount}
              </span>
            </button>
          </motion.div>

          {/* Sub-Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              gap: '0.25rem',
              marginBottom: 'clamp(2rem, 3vw, 2.5rem)',
              flexWrap: 'wrap',
            }}
          >
            {currentFilters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* SWIPE SLIDER MODE (Interactive Swipe Carousel) */}
          {isHome && viewMode === 'swipe' ? (
            <div style={{ position: 'relative' }}>
              {/* Controls Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                  <MoveHorizontal size={14} style={{ color: 'var(--color-gold, #c5a059)' }} />
                  SWIPE OR USE ARROWS TO EXPLORE (0{currentIndex + 1} / 0{displayProjects.length})
                </span>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold, #c5a059)'; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; }}
                    aria-label="Previous Project"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold, #c5a059)'; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; }}
                    aria-label="Next Project"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Touch & Drag Swipe Carousel */}
              <div style={{ overflow: 'hidden', borderRadius: '16px' }} ref={sliderRef}>
                <AnimatePresence mode="wait">
                  {displayProjects[currentIndex] && (
                    <motion.div
                      key={displayProjects[currentIndex].id}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleProjectClick(displayProjects[currentIndex])}
                    >
                      <div className="project-card-swipe" style={{
                        position: 'relative',
                        height: 'clamp(380px, 55vh, 520px)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}>
                        <img
                          src={displayProjects[currentIndex].image}
                          alt={displayProjects[currentIndex].title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.8s ease',
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          padding: 'clamp(1.5rem, 4vw, 3rem)',
                        }}>
                          <span style={{
                            fontSize: '0.75rem',
                            letterSpacing: '0.2em',
                            color: 'var(--color-gold, #c5a059)',
                            fontWeight: 700,
                            marginBottom: '0.5rem',
                            textTransform: 'uppercase',
                          }}>
                            {displayProjects[currentIndex].category}
                          </span>
                          <h3 style={{
                            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                            fontWeight: 700,
                            color: '#ffffff',
                            margin: 0,
                            letterSpacing: '0.04em',
                          }}>
                            {displayProjects[currentIndex].title}
                          </h3>
                          <p style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.9rem',
                            marginTop: '0.5rem',
                            maxWidth: '600px',
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}>
                            {displayProjects[currentIndex].description}
                          </p>

                          <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 600, fontSize: '0.85rem' }}>
                            <span>CLICK TO EXPLORE DETAILS</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Slider Dots Indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                {displayProjects.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      height: '6px',
                      width: currentIndex === idx ? '32px' : '8px',
                      borderRadius: '100px',
                      background: currentIndex === idx ? 'var(--color-gold, #c5a059)' : 'rgba(255,255,255,0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* GRID VIEW MODE */
            <LayoutGroup>
              <motion.div
                layout
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                  gap: 'clamp(1rem, 2vw, 1.5rem)',
                }}
              >
                <AnimatePresence mode="popLayout">
                  {displayProjects.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={handleProjectClick}
                      index={i}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          )}

          {/* EXPLORE MORE PROJECTS BUTTON (On Home Page) */}
          {isHome && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              <Link
                to="/work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1rem 2.2rem',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '100px',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
              >
                <span>EXPLORE ALL PROJECTS ({projects.length}+)</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;

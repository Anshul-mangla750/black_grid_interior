import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const filters = [
  { key: 'all', label: 'ALL' },
  { key: 'living', label: 'LIVING' },
  { key: 'bedroom', label: 'BEDROOM' },
  { key: 'kitchen', label: 'KITCHEN' },
  { key: 'office', label: 'OFFICE' },
  { key: 'commercial', label: 'COMMERCIAL' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

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
      <section className="section-padding" id="work" style={{ background: 'var(--color-charcoal)' }}>
        <div className="container">
          <SectionHeading eyebrow="OUR WORK" heading="SELECTED PROJECTS" />

          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '0.25rem',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
              flexWrap: 'wrap',
            }}
          >
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <LayoutGroup>
            <motion.div
              layout
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
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

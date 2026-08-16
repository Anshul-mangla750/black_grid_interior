import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import GalleryLightbox from './GalleryLightbox';
import { projects } from '../../data/projects';
import './gallery.css';

const ProjectGallery = ({ limit = 0, title = 'ARCHITECTURAL PORTFOLIO', categoryFilter = 'all' }) => {
  const [activeFilter, setActiveFilter] = useState(categoryFilter);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filters = [
    { key: 'all', label: 'ALL PROJECTS' },
    { key: 'elevation', label: 'EXTERIOR FACADES' },
    { key: 'living', label: 'LIVING & SOCIAL' },
    { key: 'bedroom', label: 'SUITES & BEDROOMS' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.filter === activeFilter;
  });

  const displayList = limit > 0 ? filteredProjects.slice(0, limit) : filteredProjects;

  const handleCardClick = (project, imageIndex = 0) => {
    setActiveProject(project);
    setActiveImageIndex(imageIndex);
  };

  const handleCloseLightbox = () => {
    setActiveProject(null);
  };

  return (
    <div className="pg-container">
      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Responsive Cards Grid */}
      <div className="pg-grid">
        <AnimatePresence mode="popLayout">
          {displayList.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onClick={handleCardClick}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeProject && (
          <GalleryLightbox
            project={activeProject}
            initialIndex={activeImageIndex}
            onClose={handleCloseLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;

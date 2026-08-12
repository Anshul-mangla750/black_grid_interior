import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, onClick, index }) => {
  return (
    <motion.div
      className="project-card"
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
        layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      }}
      onClick={() => onClick(project)}
      data-cursor="VIEW"
    >
      <div className="project-card-image">
        <img
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          loading="lazy"
        />
        <div className="project-card-overlay" />
      </div>
      <div className="project-card-info">
        <div>
          <div className="project-card-title">{project.title}</div>
          <div className="project-card-category">{project.category}</div>
        </div>
        <ArrowUpRight size={18} className="project-card-arrow" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;

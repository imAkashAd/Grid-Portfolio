// src/components/sections/Projects.jsx

import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { SectionLabel, Tag } from '../ui';
import styles from './Projects.module.css';

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.35 },
  }),
};

export default function Projects() {
  return (
    <div id="projects">
      <SectionLabel>Projects</SectionLabel>

      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          className={styles.project}
          custom={i}
          initial="hidden"
          animate="show"
          variants={itemVariants}
        >
          <div className={styles.titleRow}>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={styles.title}
              >
                {project.title}
              </a>
            ) : (
              <span className={styles.title}>{project.title}</span>
            )}
            <span className={styles.tags}>
              {project.tags.map((tag) => {
                if (tag.label === "Play Store Live" && project.playStoreHref) {
                  return (
                    <a key={tag.label} href={project.playStoreHref} target="_blank" rel="noreferrer" className={styles.tagLink}>
                      <Tag label={tag.label} variant={tag.variant} />
                    </a>
                  );
                }
                if (tag.label === "GitHub" && project.githubHref) {
                  return (
                    <a key={tag.label} href={project.githubHref} target="_blank" rel="noreferrer" className={styles.tagLink}>
                      <Tag label={tag.label} variant={tag.variant} />
                    </a>
                  );
                }
                return <Tag key={tag.label} label={tag.label} variant={tag.variant} />;
              })}
            </span>
          </div>
          <p className={styles.description}>{project.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

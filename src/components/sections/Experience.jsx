// src/components/sections/Experience.jsx

import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import { SectionLabel } from '../ui';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div id="experience">
      <SectionLabel>Work Experience</SectionLabel>

      {experience.map((job, i) => (
        <motion.div
          key={`${job.company}-${i}`}
          className={styles.job}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.35 }}
        >
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <p className={styles.jobMeta}>
            <span className={styles.company}>{job.company}</span>
            <span className={styles.dot}>·</span>
            <span>{job.period}</span>
            <span className={styles.dot}>·</span>
            <span>{job.location}</span>
          </p>
          <ul className={styles.bullets}>
            {job.bullets.map((bullet, j) => (
              <li key={j} className={styles.bullet}>{bullet}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

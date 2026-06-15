// src/components/sections/Academic.jsx

// import { education, certifications, researchInterests } from '../../data/portfolio';
import { education, certifications } from '../../data/portfolio';
import { SectionLabel, WavyDivider } from '../ui';
import styles from './Academic.module.css';

export default function Academic() {
  return (
    <div id="academic">
      <SectionLabel>Academic</SectionLabel>

      {/* ── Education ── */}
      <p className={styles.subLabel}>Education</p>
      {education.map((edu) => (
        <div key={edu.degree} className={styles.eduBlock}>
          <h3 className={styles.degree}>{edu.degree}</h3>
          <p className={styles.institution}>{edu.institution}</p>
          <p className={styles.meta}>{edu.period} · {edu.location}</p>
        </div>
      ))}

      <WavyDivider />

      {/* ── Certifications ── */}
      <p className={styles.subLabel}>Certifications &amp; Awards</p>
      <ul className={styles.certList}>
        {certifications.map((cert, i) => (
          <li key={i} className={styles.certItem}>{cert}</li>
        ))}
      </ul>

      <WavyDivider />

      {/* ── Research Interests ── */}
      {/* <SectionLabel>Research Interests</SectionLabel>
      {researchInterests.map((r) => (
        <div key={r.title} className={styles.interestBlock}>
          <h4 className={styles.interestTitle}>{r.title}</h4>
          <p className={styles.interestDesc}>{r.description}</p>
        </div>
      ))} */}
    </div>
  );
}

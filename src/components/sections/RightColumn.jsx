// src/components/sections/RightColumn.jsx
// Col 4 — Research Interests + Interests + Hobbies

import { researchInterests } from '../../data/portfolio';
import { SectionLabel, WavyDivider } from '../ui';
import InterestsHobbies from './InterestsHobbies';
import styles from './Academic.module.css';

export default function RightColumn() {
  return (
    <>
      <SectionLabel>Research Interests</SectionLabel>
      {researchInterests.map((r) => (
        <div key={r.title} className={styles.interestBlock}>
          <h4 className={styles.interestTitle}>{r.title}</h4>
          <p className={styles.interestDesc}>{r.description}</p>
        </div>
      ))}

      <WavyDivider />

      <InterestsHobbies />
    </>
  );
}
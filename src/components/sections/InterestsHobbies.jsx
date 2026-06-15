// src/components/sections/InterestsHobbies.jsx

import { interests, hobbies } from '../../data/portfolio';
import { SectionLabel, WavyDivider } from '../ui';
import styles from './InterestsHobbies.module.css';

export default function InterestsHobbies() {
  return (
    <div>
      <SectionLabel>Interests</SectionLabel>
      {interests.map((item) => (
        <div key={item.title} className={styles.block}>
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.desc}>{item.description}</p>
        </div>
      ))}

      <WavyDivider />

      <SectionLabel>Hobbies</SectionLabel>
      {hobbies.map((item) => (
        <div key={item.title} className={styles.block}>
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.desc}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

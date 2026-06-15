// src/components/layout/Grid.jsx
// Four-column layout with horizontal scroll arrow buttons

import { useRef } from 'react';
import styles from './Grid.module.css';

export default function Grid({ left, projects, experience, right }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const col = scrollRef.current?.querySelector('[data-col]');
    const amount = col?.offsetWidth || 400;
    scrollRef.current?.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.arrow} ${styles.arrowLeft}`}  onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => scroll(1)}  aria-label="Scroll right">›</button>

      <div className={styles.grid} ref={scrollRef}>
        <div className={`${styles.col} ${styles.colLeft}`}    data-col>{left}</div>
        <div className={`${styles.col} ${styles.colMid1}`}    data-col>{projects}</div>
        <div className={`${styles.col} ${styles.colMid2}`}    data-col>{experience}</div>
        <div className={`${styles.col} ${styles.colRight}`}   data-col>{right}</div>
      </div>
    </div>
  );
}
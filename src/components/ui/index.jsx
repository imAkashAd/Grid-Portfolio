// src/components/ui/index.jsx
// ── Small reusable primitives used across sections ──

import styles from './ui.module.css';

/* ── Section Label ── */
export function SectionLabel({ children }) {
  return <p className={styles.sectionLabel}>{children}</p>;
}

/* ── Wavy Divider ── */
export function WavyDivider() {
  return <hr className={styles.wavy} />;
}

/* ── Tag badge ──
   variant: "mobile" | "web" | "ai" | "cli" | "research" | "live" | "default"
*/
export function Tag({ label, variant = "default" }) {
  return (
    <span className={`${styles.tag} ${styles[`tag_${variant}`]}`}>
      {label}
    </span>
  );
}

/* ── Skill chip ── */
export function Chip({ children }) {
  return <span className={styles.chip}>{children}</span>;
}

/* ── Pulsing status dot ── */
export function StatusDot() {
  return <span className={styles.statusDot} aria-hidden="true" />;
}

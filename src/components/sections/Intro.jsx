// src/components/sections/Intro.jsx

import { motion } from 'framer-motion';
import { meta, intro, links, skills } from '../../data/portfolio';
import { SectionLabel, WavyDivider, Chip, StatusDot } from '../ui';
import styles from './Intro.module.css';

const ICONS = {
  github:   '⌥',
  linkedin: '⌥',
  email:    '⌥',
  phone:    '⌥',
  link:     '⌥',
  file:     '⌥',
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show:   (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
};

export default function Intro() {
  return (
    <div>
      {/* ── Name & status ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className={styles.name}>{meta.name}</h1>
        <p className={styles.titleLine}>{meta.title}</p>

        {meta.availableForWork && (
          <div className={styles.available}>
            <StatusDot />
            <span>Open to Work</span>
          </div>
        )}
      </motion.div>

      <WavyDivider />

      {/* ── Intro paragraphs ── */}
      <SectionLabel>Intro</SectionLabel>
      <div className={styles.introParagraphs}>
        {intro.map((para, i) => (
          <motion.p
            key={i}
            className={styles.para}
            custom={i}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {para}
          </motion.p>
        ))}
      </div>

      <WavyDivider />

      {/* ── Links ── */}
      <SectionLabel>Links</SectionLabel>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={styles.link}
            >
              <span className={styles.linkIcon}>{ICONS[link.icon] ?? '→'}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <WavyDivider />

      {/* ── Skills ── */}
      <SectionLabel>Skills</SectionLabel>
      {skills.map((group) => (
        <div key={group.group} className={styles.skillGroup}>
          <h4 className={styles.skillGroupTitle}>{group.group}</h4>
          <div className={styles.chips}>
            {group.items.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

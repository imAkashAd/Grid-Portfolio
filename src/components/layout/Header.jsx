// src/components/layout/Header.jsx

import styles from './Header.module.css';
import { meta } from '../../data/portfolio';

const NAV_LINKS = [
  { label: 'Projects',   href: '#projects'    },
  { label: 'Experience', href: '#experience'  },
  { label: 'Academic',   href: '#academic'    },
  { label: 'Contact',    href: `mailto:${meta.email}` },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>{meta.domain}</a>
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

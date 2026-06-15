// src/components/sections/ExperienceAcademic.jsx
// Col 3 — Work Experience + Academic combined

import Experience from './Experience';
import Academic   from './Academic';
import { WavyDivider } from '../ui';

export default function ExperienceAcademic() {
  return (
    <>
      <Experience />
      <WavyDivider />
      <Academic />
    </>
  );
}
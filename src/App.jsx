// src/App.jsx
import './styles/globals.css';
import Header              from './components/layout/Header';
import Grid                from './components/layout/Grid';
import Intro               from './components/sections/Intro';
import Projects            from './components/sections/Projects';
import ExperienceAcademic  from './components/sections/ExperienceAcademic';
import RightColumn         from './components/sections/RightColumn';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Header />
      <Grid
        left={<Intro />}
        projects={<Projects />}
        experience={<ExperienceAcademic />}
        right={<RightColumn />}
      />
    </div>
  );
}
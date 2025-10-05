import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/common.css';
import { Nav } from './Nav';
import { ResumeBuilder } from './ResumeBuilder';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav/>
    <ResumeBuilder />
  </StrictMode>,
)

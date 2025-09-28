import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/common.css';
import { Nav } from './Nav';
import { Pane } from './Pane';
import { FieldsSection } from './FieldsSection';
import { ExperienceFields } from './ExperienceFields';
import { SkillFields } from './Skills';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav/>
    <div className='pane-container d-flex'>
      <Pane classes="flex-03">
        <FieldsSection title='Personal Details' addButton={true} initialFields={[
          {id: 1, name: "Name", type: "input", title: "Name"},
          {id: 2, name: "Email", type: "email", title: "Email"},
          {id: 3, name: "Phone", type: "input", title: "Phone"}
        ]}/>

        <FieldsSection title='About me' initialFields={[
          {id: 1, name: "About me", type: "text", title: "About me"}
        ]}/>

        <FieldsSection title='Experience' initialFields={[]}>
          <ExperienceFields initialExp={[
            {id: 1}
          ]}/>
        </FieldsSection>

        <FieldsSection title='Skills' initialFields={[]}>
          <SkillFields initialSkills={[
            {id: 1},
            {id: 2},
            {id: 3}
          ]}/>
        </FieldsSection>
      </Pane>
      {/* <Pane classes='flex-7'></Pane> */}
    </div>
  </StrictMode>,
)

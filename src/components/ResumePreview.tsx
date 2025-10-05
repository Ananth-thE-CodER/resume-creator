import React from 'react';
import '../styles/resumePreview.css'

interface ResumePreviewProps {
  data: {
    personal: Record<string, string>;
    about: Record<string, string>;
    experience: any[];
    skills: any[];
  };
}

export function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <div className="page resume-preview p-4">
      {Object.entries(data.personal).map(([key, value]) => (
        <React.Fragment key={key}>
          {key == 'Name' ? <h2>{value}</h2>: <p>{value}</p>}
        </React.Fragment>
      ))}
      {/* <h2>{data.personal.Name}</h2>
      <p>{data.personal.Email}</p>
      <p>{data.personal.Phone}</p> */}

      <h3>About Me</h3>
      <p>{data.about["About me"]}</p>

      <h3>Skills</h3>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

interface ResumePreviewProps {
  data: {
    personal: Record<string, string>;
    about: Record<string, string>;
    experience: any[];
    skills: any[];
  };
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <div className="resume-preview p-4">
      <h2>{data.personal.Name}</h2>
      <p>{data.personal.Email}</p>
      <p>{data.personal.Phone}</p>

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

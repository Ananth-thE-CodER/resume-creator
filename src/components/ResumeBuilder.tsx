import { useState } from "react";
import { Pane } from './Pane';
import { FieldsSection } from './FieldsSection';
import { ExperienceFields } from './ExperienceFields';
import { SkillFields } from './Skills';
import { ResumePreview } from './ResumePreview'

export function ResumeBuilder() {
    const [resumeData, setResumeData] = useState({
        personal: { Name: "", Email: "", Phone: "" },
        about: { "About me": "" },
        experience: [],
        skills: []
    });

    const handleFieldChange = (section: string, fieldName: string, value: string) => {
        setResumeData(prev => ({
        ...prev,
        [section]: {
            ...(prev as any)[section],
            [fieldName]: value
        }
        }));
    };

    return (
        <>
            <div className="pane-container d-flex">
                <Pane classes="flex-03">
                    <FieldsSection title="Personal Details" addButton={true} initialFields={[
                            { id: 1, name: "Name", type: "input", title: "Name" },
                            { id: 2, name: "Email", type: "email", title: "Email" },
                            { id: 3, name: "Phone", type: "input", title: "Phone" }
                        ]} onFieldChange={(name, value) => handleFieldChange("personal", name, value)} 
                        onAddField={(name) => setResumeData(prev => ({...prev, personal: { ...prev.personal, [name]: "" }}))} />

                    <FieldsSection title="About me" initialFields={[
                        { id: 1, name: "About me", type: "text", title: "About me" }
                    ]} onFieldChange={(name, value) => handleFieldChange("about", name, value)} />

                    <FieldsSection title="Experience" initialFields={[]} onFieldChange={(name, value) => handleFieldChange("experience", name, value)}>
                        <ExperienceFields initialExp={[{ id: 1 }]} />
                    </FieldsSection>

                    <FieldsSection title="Skills" initialFields={[]} onFieldChange={(name, value) => handleFieldChange("skills", name, value)}>
                        <SkillFields initialSkills={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
                    </FieldsSection>
                </Pane>

                <Pane classes="flex-07">
                    <ResumePreview data={resumeData} />
                </Pane>
            </div>
        </>
    );
}
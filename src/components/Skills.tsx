import { Field } from "./Fields";
import { useState } from "react";

type SkillsData = {
    id: number;
}

type SkillsFieldProps = {
    initialSkills: SkillsData[];
}

export function SkillFields({initialSkills=[]}: SkillsFieldProps) {
    const [skills, setSkills] = useState<SkillsData[]>(initialSkills);
    
    const handleAddSkill = () => {
        const newSkill : SkillsData = {
            id: Date.now(),
        }
        setSkills([...skills, newSkill])
    };

    return (
        <>
            <div className="skill-fields">
                <ul>
                    {
                        skills.map((skill) => {
                            return (
                                <li key={skill.id}>
                                    <Field type="input" name="skill" label={false}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <button type="button" onClick={handleAddSkill}>
                ➕ Add a skill
            </button>
        </>
    )
}
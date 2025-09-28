import { Field } from "./Fields";
import { useState } from "react";

type ExpData = {
    id: number;
};

type ExperienceFieldsProp = {
    initialExp: ExpData[];
}

export function ExperienceFields({initialExp=[]}: ExperienceFieldsProp) {
    const [experience, setExperience] = useState<ExpData[]>(initialExp);

    const handleAddExperience = () => {
        const newExp : ExpData = {
            id: Date.now(),
        }
        setExperience([...experience, newExp])
    };

    return (
        <>
            {
                experience.map((exp) => {
                    return (
                        <div key={exp.id} className="exp-fields">
                            <Field type="input" name="company" title="Company" />
                            <Field type="input" name="position" title="Position" />
                            <Field type="text" name="tasks" title="What you did..." />
                            <div className="d-flex justify-space-between">
                                <Field type="date" name="from" title="From"/>
                                <Field type="date" name="to" title="To"/>
                            </div>
                        </div>
                    )
                })
            }
            <button type="button" onClick={handleAddExperience}>
                ➕ Add Experience
            </button>
        </>
    );
}
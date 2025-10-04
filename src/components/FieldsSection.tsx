import { useState } from "react";
import { Field } from "./Fields";
import { ReactNode } from "react";
import '../styles/fieldsSection.css'

type FieldData = {
    id: number;
    type: string;
    name: string;
    title?: string;
};

type FieldsSectionProp = {
    children?: ReactNode
    title: string;
    initialFields?: FieldData[];
    addButton?: boolean;
    onFieldChange?: (name: string, value: string) => void;
};

export function FieldsSection ({children, title, initialFields=[], addButton}: FieldsSectionProp) {
    const [fields, setFields] = useState<FieldData[]>(initialFields);

    const handleAddField = () => {
        const newField: FieldData = {
            id: Date.now(),
            type: 'input',
            name: ''

        }
        setFields([...fields, newField])
    };

    return (
        <>
            <section className="fields-section">
                <div className="section-title">
                    <h2>{title}</h2>
                </div>
                {children ? (
                    <>
                        {/* If children exists. */}
                        {children}
                    </>
                ): (
                    // Else
                    <>
                        <div className="fields-fields">
                            {fields.map((f) => {
                                return (
                                    <Field key={f.id} name={f.name} type={f.type} title={f.title || ''}/>
                                );
                            })}
                        </div>
                        {addButton && (
                            <button type="button" onClick={handleAddField}>
                                ➕ Add Field
                            </button>
                        )}
                    </>
                )}
            </section>
        </>
    )
}
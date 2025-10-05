import { useState } from "react";
import { Field } from "./Fields";
import { type ReactNode } from "react";
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
    onAddField?: (name: string) => void;
};

export function FieldsSection ({children, title, initialFields=[], addButton, onFieldChange, onAddField}: FieldsSectionProp) {
    const [fields, setFields] = useState<FieldData[]>(initialFields);

    const handleAddField = () => {
        const newField: FieldData = {
            id: Date.now(),
            type: 'input',
            name: `Untitled_${Date.now()}`

        }
        setFields([...fields, newField])
        onAddField?.(newField.name);
    };

    const handleChange = (name: string, value: string) => {
        const field = fields.find(f => f.name === name);
        if (!field) return;

        if (onFieldChange) {
            onFieldChange(field.name, value);
        }
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
                                    <Field key={f.id} name={f.name} type={f.type} title={f.title || ''} onChange={handleChange}/>
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
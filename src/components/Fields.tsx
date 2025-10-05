import '../styles/fields.css'


type FieldProp = {
    type: string;
    name: string;
    title?: string;
    label?: boolean;
    onChange?: (name: string, value: string) => void;
}


export function Field({title, type, name, label=true, onChange}: FieldProp) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(name, e.target.value);
        }
    };

    return (
        <>
            <div className="fields-div">
                {
                    label && (
                        <label className="field-label">{title}</label>
                    )
                }
                {type === 'input' && <input type={type} name={name} className="field-input" onChange={handleChange} />}
                {type === 'text' && <textarea name={name} rows={10} onChange={handleChange} />}
                {type === 'email' && <input type={type} name={name} className='field-input' onChange={handleChange} />}
                {type === 'date' && <input type={type} name={name} className='field-input' onChange={handleChange} />}
            </div>
        </>
    )
}
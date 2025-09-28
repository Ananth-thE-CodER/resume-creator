import '../styles/fields.css'


type FieldProp = {
    type: string;
    name: string;
    title?: string;
    label?: boolean;
}


export function Field({title, type, name, label=true}: FieldProp) {
    return (
        <>
            <div className="fields-div">
                {
                    label && (
                        <label className="field-label">{title}</label>
                    )
                }
                {type === 'input' && <input type={type} name={name} className="field-input" />}
                {type === 'text' && <textarea name={name} rows={10} />}
                {type === 'email' && <input type={type} name={name} className='field-input' />}
                {type === 'date' && <input type={type} name={name} className='field-input' />}
            </div>
        </>
    )
}
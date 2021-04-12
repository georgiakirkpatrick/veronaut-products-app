import React from 'react'
import './FormDropdown.css'

const FormDropdown = props => {
    return (
        <div key={props.id} className='FormDropdown'>
            <label htmlFor={props.id}>{props.prompt}</label>
            {props.subprompt && <p>{props.subprompt}</p>}
            <select
                required
                name={props.name}
                onChange={props.handleChange}
                value={props.currentValue}
            >
                {props.options.map((opt, index) => {
                    return <option key={index} id={opt.id} value={opt.value ? opt.value : opt.id}>{opt.text}</option>
                })}
            </select>
        </div>
    )
}

FormDropdown.defaultProps = {
    id: 1,
    prompt: '',
    name: '',
    change: () => {},
    value: 1,
    options: []

}

export default FormDropdown
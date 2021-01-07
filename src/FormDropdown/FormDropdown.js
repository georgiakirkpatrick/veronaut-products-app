import React from 'react'
import './FormDropdown.css'

const FormDropdown = props => {
    return (
        <div key={props.id} className='FormDropdown'>
            <label htmlFor={props.id}>{props.prompt}</label>

            <select name={props.name} onChange={props.handleChange} value={props.currentValue} >
                {props.options.map((opt) => {
                    return <option key={opt.id} id={opt.id} value={opt.currentValue}>{opt.text}</option>
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
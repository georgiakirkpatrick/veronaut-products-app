import React from 'react'
import './FormDropdown.css'

const FormDropdown = props => {
    
    
    return (
        <div key={props.id} className='FormDropdown'>
            <label htmlFor={props.id}>{props.prompt}</label>

            <select name={props.name} onChange={props.change} value={props.currentValue} >
                {props.options.map((opt) => {
                    return <option key={opt.id} id={opt.id} value={opt.value}>{opt.text}</option>
                })}
            </select>
        </div>
    )
}

export default FormDropdown
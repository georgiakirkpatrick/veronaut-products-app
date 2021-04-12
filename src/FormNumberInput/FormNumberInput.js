import React from 'react'
import './FormNumberInput.css'

const FormNumberInput = props => {
    return (
        <div className='FormNumber'>
            <label htmlFor={props.id}>{props.prompt}</label>
            <input
                type='number' 
                id={props.id} 
                name={props.name} 
                value={props.currentValue} 
                onChange={props.handleChange} 
            /> %
        </div>
    )
}

FormNumberInput.defaultProps = {
    id: 1,
    prompt: '',
    name: '',
    currentValue: 1,
    handleChange: () => {}
}

export default FormNumberInput
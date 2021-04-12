import React from 'react'
import './FormTextInput.css'

const FormTextInput = props => {
    return (
        <div className='FormText'>
            <label htmlFor={props.id}>{props.prompt}</label>
            <input
                required
                type='text' 
                id={props.id} 
                name={props.name} 
                value={props.currentValue} 
                onChange={props.handleChange} 
            />
        </div>
    )
}

FormTextInput.defaultProps = {
    id: 1,
    prompt: '',
    name: '',
    currentValue: 1,
    handleChange: () => {}
}

export default FormTextInput
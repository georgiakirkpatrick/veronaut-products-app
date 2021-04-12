import React from 'react'
import './FormUrlInput.css'

const FormUrlInput = props => {
    return (
        <div className='FormUrlInput'>
            <label htmlFor={props.id}>{props.prompt}</label>
            <input 
                required
                type='url'
                id={props.id} 
                name={props.name}
                defaultValue={props.currentValue} 
                onChange={props.handleChange}  
            />
        </div>
    )
}

FormUrlInput.defaultProps = {
    id: 1,
    prompt: '',
    name: '',
    currentValue: '',
    onChange: () => {}
}

export default FormUrlInput


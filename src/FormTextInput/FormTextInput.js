import React from 'react'
import './FormTextInput.css'

const FormTextInput = props => {
    return (
        <div className='FormText'>
            <label htmlFor={props.id}>{props.prompt}</label>
            <input 
                type='text' 
                id={props.id} 
                name={props.name} 
                defaultValue={props.value} 
                onChange={props.change} 
            />
        </div>
    )
}

export default FormTextInput
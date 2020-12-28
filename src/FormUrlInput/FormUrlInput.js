import React from 'react'
import './FormUrlInput.css'

const FormUrlInput = props => {
    return (
        <div className='FormUrlInput'>
            <label htmlFor={props.id}>{props.prompt}</label>
            <input 
                type='url'
                id={props.id} 
                name={props.name}
                defaultValue={props.value} 
                onChange={props.change}  
            />
        </div>
    )
}

export default FormUrlInput


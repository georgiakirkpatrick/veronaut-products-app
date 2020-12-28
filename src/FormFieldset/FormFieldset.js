import React from 'react'
import './FormFieldset.css'

const FormFieldset = props => {
    const prompt = props.prompt ?  <p className='FormPromptWithSub_prompt'>{props.prompt}</p> : <div className='empty' />

    return (
        <fieldset className='FormFieldset'>
            {prompt}
            {props.children}
        </fieldset>
    )
}

export default FormFieldset
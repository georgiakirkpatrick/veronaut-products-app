import React from 'react'
import './FormFieldset.css'

const FormFieldset = props => {
    const prompt = props.prompt ?  <p>{props.prompt}</p> : <div />

    return (
        <fieldset className='FormFieldset'>
            {prompt}
            {props.children}
        </fieldset>
    )
}

FormFieldset.defaultProps = {
    prompt: '',
    children: ''
}

export default FormFieldset
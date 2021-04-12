import React from 'react'
import './FormCheckboxSection.css'

const FormCheckboxSection = props => {
    const selectedOptions = props.selectedOptions 
        ? props.selectedOptions 
        : Object.fromEntries(props.options.map((o) => [o.id, false]))

    const prompt = props.prompt 
        ? <p>{props.prompt}</p> 
        : <div className='empty' />
        
    const options = props.options.map(option => {
        return (
            <div key={option.id} className='FormCheckboxSection__option'>
                <input type='checkbox' 
                    id={option.id} 
                    name={option.name ? option.name : option.id} 
                    checked={selectedOptions[option.id]}
                    onChange={props.handleChange}>
                </input>
                <label htmlFor={option.id}>{option.text}</label>
            </div>
        )
    })

    return (
        <div className='FormCheckboxSection'>
            {prompt}
            <div className='FormCheckboxSection__options-container'>
                {options}
            </div>
        </div>
    )
}

FormCheckboxSection.defaultProps = {
    selectedOptions: [],
    options: [],
    prompt: '',
    change: () => {}
}

export default FormCheckboxSection
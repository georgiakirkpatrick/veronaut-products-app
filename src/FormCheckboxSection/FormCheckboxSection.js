import React from 'react'
import './FormCheckboxSection.css'

const FormCheckboxSection = props => {
    const check = props.check ? props.check : Object.fromEntries(props.options.map((o) => [o.id, false]))

    const prompt = props.prompt ?  <p>{props.prompt}</p> : <div className='empty' />
    const options = props.options.map(option => {
        return (
            <div key={option.id} className='FormCheckboxSection_option'>
                <input type='checkbox' 
                    id={option.id} 
                    name={option.id} 
                    checked={check[option.id]}
                    onChange={props.change}>
                </input>
                <label htmlFor={option.id}>{option.text}</label>
            </div>
        )
    })

    return (
        <div className='FormCheckboxSection'>
            {prompt}
            <div className='FormCheckboxSection_options-container'>
                {options}
            </div>
        </div>
    )
}

export default FormCheckboxSection
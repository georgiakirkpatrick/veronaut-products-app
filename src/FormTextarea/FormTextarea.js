import React from 'react'
import './FormTextarea.css'

const FormTextarea = props => {
    const {
        currentValue,
        handleChange,
        id,
        name,
        prompt
    } = props

    return (
        <div className='FormTextarea'>
            <label htmlFor={id}>{prompt}</label>
            <textarea
                required
                id={id}
                name={name}
                onChange={handleChange}
                rows='1'
                value={currentValue}
            />
        </div>
    )
}

FormTextarea.defaultProps = {
    currentValue: 1,
    handleChange: () => {},
    id: 1,
    name: '',
    prompt: ''
}

export default FormTextarea
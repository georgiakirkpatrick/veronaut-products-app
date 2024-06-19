import React from 'react'
import './FormTextInput.css'

const FormTextInput = props => {
  const {
    currentValue,
    handleChange,
    id,
    name,
    prompt
  } = props

  return (
    <div className='FormTextInput'>
      <label htmlFor={id}>{prompt}</label>
      
      <input
        required
        id={id}
        name={name}
        onChange={handleChange}
        value={currentValue}
        type='text'
      />
    </div>
  )
}

FormTextInput.defaultProps = {
  currentValue: 1,
  handleChange: () => {},
  id: 1,
  name: '',
  prompt: ''
}

export default FormTextInput
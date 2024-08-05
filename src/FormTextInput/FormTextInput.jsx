import React from 'react'
import './FormTextInput.css'

const FormTextInput = ({
  currentValue = 1,
  handleChange = () => {},
  id = 1,
  name = '',
  prompt = ''
}) => {
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

export default FormTextInput
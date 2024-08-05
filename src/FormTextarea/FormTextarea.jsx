import React from 'react'
import './FormTextarea.css'

const FormTextarea = ({
  currentValue = 1,
  handleChange = () => {},
  id = 1,
  name = '',
  prompt = ''
}) => {
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

export default FormTextarea
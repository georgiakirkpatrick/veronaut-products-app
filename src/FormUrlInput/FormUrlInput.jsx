import React from 'react'
import './FormUrlInput.css'

const FormUrlInput = ({
  currentValue = '',
  handleChange = () => {},
  id = 1,
  name = '',
  prompt = '',
}) => {
  return (
    <div className='FormUrlInput'>
      <label htmlFor={id}>{prompt}</label>

      <input 
        required
        type='url'
        id={id} 
        name={name}
        value={currentValue} 
        onChange={handleChange}  
      />
    </div>
  )
}

export default FormUrlInput


import React from 'react'
import './FormUrlInput.css'

const FormUrlInput = props => {
  const {
    currentValue,
    handleChange,
    id,
    name,
    prompt
  } = props

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

FormUrlInput.defaultProps = {
  currentValue: '',
  handleChange: () => {},
  id: 1,
  name: '',
  prompt: '',
}

export default FormUrlInput


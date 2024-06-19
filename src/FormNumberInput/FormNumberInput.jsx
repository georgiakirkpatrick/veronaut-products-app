import React from 'react'
import './FormNumberInput.css'

const FormNumberInput = props => {
  const {
    currentValue,
    handleChange,
    id,
    prompt,
    name
  } = props

  return (
    <div className='FormNumber'>
      <label htmlFor={id}>{prompt}</label>
      
      <input
        type='number' 
        id={id} 
        name={name} 
        value={currentValue} 
        onChange={handleChange} 
      /> %
    </div>
  )
}

FormNumberInput.defaultProps = {
  currentValue: 1,
  handleChange: () => {},
  id: 1,
  prompt: '',
  name: ''
}

export default FormNumberInput
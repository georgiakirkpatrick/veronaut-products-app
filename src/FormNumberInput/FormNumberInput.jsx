import React from 'react'
import './FormNumberInput.css'

const FormNumberInput = ({
  currentValue = 1,
  handleChange = () => {},
  id = 1,
  prompt = '',
  name = ''
}) => {
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

export default FormNumberInput
import React from 'react'
import './FormDropdown.css'

const FormDropdown = ({
  currentValue = '',
  id = 1,
  handleChange = () => {},
  name = '',
  options = [],
  prompt = '',
  subprompt = ''
}) => {
  return (
    <div key={id} className='FormDropdown'>
      <label htmlFor={id}>{prompt}</label>
      {subprompt && <p>{subprompt}</p>}
      <select
          required
          name={name}
          onChange={handleChange}
          value={currentValue}
      >
        {options.map((opt, index) => {
          return <option key={index} id={opt.id} value={opt.value ? opt.value  : opt.id}>{opt.text}</option>
        })}
      </select>
    </div>
  )
}

export default FormDropdown
import React from 'react'
import './FormCheckboxSection.css'

const FormCheckboxSection = props => {
  const {
    handleChange,
    options,
    prompt,
    selectedOptions
  } = props
    
  const checked = selectedOptions 
    ? selectedOptions 
    : Object.fromEntries(options.map((o) => [o.id, false]))

  const formatPrompt = prompt 
    ? <p>{prompt}</p> 
    : <div className='empty' />
      
  const formatOptions = options.map(option => {
    return (
      <div key={option.id} className='FormCheckboxSection__option'>
        <input type='checkbox'
          id={option.id}
          name={option.name ? option.name : option.id} 
          checked={checked[option.name ? option.name : option.id]}
          onChange={handleChange}>
        </input>
        <label htmlFor={option.id}>{option.text}</label>
      </div>
    )
  })

  return (
    <div className='FormCheckboxSection'>
      {formatPrompt}
      <div className='FormCheckboxSection__options-container'>
        {formatOptions}
      </div>
    </div>
  )
}

FormCheckboxSection.defaultProps = {
  selectedOptions: [],
  options: [],
  prompt: '',
  change: () => {}
}

export default FormCheckboxSection
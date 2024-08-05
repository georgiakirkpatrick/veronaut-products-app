import React from 'react'
import './FormFieldset.css'

const FormFieldset = ({
  prompt = '',
  children = ''
}) => {
  const fieldsetPrompt = prompt ?  <h2>{prompt}</h2>  : <div />

  return (
    <fieldset className='FormFieldset'>
      {fieldsetPrompt}
      {children}
    </fieldset>
  )
}

export default FormFieldset
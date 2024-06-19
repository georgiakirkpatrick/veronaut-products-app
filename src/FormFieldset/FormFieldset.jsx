import React from 'react'
import './FormFieldset.css'

const FormFieldset = props => {
  const {
    children,
    prompt
  } = props

  const fieldsetPrompt = prompt ?  <h2>{prompt}</h2> : <div />

  return (
    <fieldset className='FormFieldset'>
      {fieldsetPrompt}
      {children}
    </fieldset>
  )
}

FormFieldset.defaultProps = {
  prompt: '',
  children: ''
}

export default FormFieldset
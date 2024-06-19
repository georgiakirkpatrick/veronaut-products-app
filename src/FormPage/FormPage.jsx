import React from 'react'
import './FormPage.css'

const FormPage = props => {
  const {
    title,
    children,
    nextError
  } = props

  const formTitle = title ? <h1>{title}</h1> : <div className='empty' />

  return (
    <section className='FormPage'>
      {formTitle}
      
      <form id='form-page' autoComplete='off'>
        {children}
      </form>

      <div>
        {nextError}
      </div>
    </section>
  )
}

FormPage.defaultProps = {
  title: '',
  children: '',
  nextError: ''
}

export default FormPage
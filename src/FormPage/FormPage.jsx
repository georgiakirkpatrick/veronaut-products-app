import React from 'react'
import './FormPage.css'

const FormPage = ({
  title = '',
  children = '',
  nextError = ''
}) => {
  
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

export default FormPage
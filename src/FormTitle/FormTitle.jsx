import React from 'react'
import './FormTitle.css'

const FormTitle = ({
  titleText = ''
}) => {
  return (
    <h2 className='FormTitle'>
      {titleText}
    </h2>
  )
}

export default FormTitle
import React from 'react'
import './FormButton.css'

const FormButton = ({
    buttonText = '',
    handleClick = () => {},
    type = 'button'
}) => {
  return (
    <button className='FormButton' type={type} onClick={handleClick}>
      {buttonText}
    </button>
  )
}

export default FormButton
import React from 'react'
import './FormButton.css'

const FormButton = props => {
    const {
        buttonText,
        handleClick,
        type
    } = props

    return (
        <button className='FormButton' type={type} onClick={handleClick}>
            {buttonText}
        </button>
    )
}

FormButton.defaultProps = {
    buttonText: '',
    handleClick: () => {},
    type: 'button'
}

export default FormButton
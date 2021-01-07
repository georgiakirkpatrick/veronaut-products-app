import React from 'react'
import './FormButton.css'

const FormButton = props => {
    return (
        <button className='FormButton' type={props.type} onClick={props.handleClick}>
            {props.buttonText}
        </button>
    )
}

FormButton.defaultProps = {
    type: 'button',
    handleClick: () => {},
    buttonText: ''
}

export default FormButton
import React from 'react'
import './FormButton.css'

const FormButton = props => {
    return (
        <button className='FormButton' type={props.type} onClick={props.click}>
            {props.buttonText}
        </button>
    )
}

FormButton.defaultProps = {
    type: 'button'
}

export default FormButton
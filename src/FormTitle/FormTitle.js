import React from 'react'
import './FormTitle.css'

const FormTitle = props => {
    return (
        <h2 className='FormTitle'>
            {props.titleText}
        </h2>
    )
}

export default FormTitle
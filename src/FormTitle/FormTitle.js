import React from 'react'
import './FormTitle.css'

const FormTitle = props => {
    const {
        titleText
    } = props

    return (
        <h2 className='FormTitle'>
            {titleText}
        </h2>
    )
}

FormTitle.defaultProps = {
    titleText: ''
}

export default FormTitle
import React from 'react'
import './FormPromptWithSub.css'

const FormPromptWithSub = props => {
    const {
        prompt,
        promptSubtitle
    } = props

    return (
        <div className='FormPromptWithSub'>
            <p className='FormPromptWithSub__prompt'>
                {prompt}
            </p>
            <p className='FormPromptWithSub__subtitle'>
                {promptSubtitle}
            </p>
        </div>
    )
}

FormPromptWithSub.defaultProps = {
    prompt: '',
    promptSubtitle: ''
}

export default FormPromptWithSub
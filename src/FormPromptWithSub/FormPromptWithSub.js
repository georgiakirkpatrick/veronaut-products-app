import React from 'react'
import './FormPromptWithSub.css'

const FormPromptWithSub = props => {
    return (
        <div className='FormPromptWithSub'>
            <p className='FormPromptWithSub__prompt'>
                {props.prompt}
            </p>
            <p className='FormPromptWithSub__subtitle'>
                {props.promptSubtitle}
            </p>
        </div>
    )
}

FormPromptWithSub.defaultProps = {
    prompt: '',
    promptSubtitle: ''
}

export default FormPromptWithSub
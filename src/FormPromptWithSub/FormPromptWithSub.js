import React from 'react'
import './FormPromptWithSub.css'

const FormPromptWithSub = props => {
    return (
        <div className='FormPromptWithSub'>
            <p className='FormPromptWithSub_prompt'>
                {props.prompt}
            </p>
            <p className='FormPromptWithSub_subtitle'>
                {props.promptSubtitle}
            </p>
        </div>
    )
}

export default FormPromptWithSub
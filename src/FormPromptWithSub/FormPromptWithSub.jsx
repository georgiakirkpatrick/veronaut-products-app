import React from 'react'
import './FormPromptWithSub.css'

const FormPromptWithSub = ({
  prompt = '',
  promptSubtitle = ''
}) => {
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

export default FormPromptWithSub
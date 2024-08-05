import React from 'react'
import './TextBlock.css'

const TextBlock = ({
  text = 'text'
}) => {
  return <div className='TextBlock'>
    <p>
      {text}
    </p>
  </div>
}

export default TextBlock
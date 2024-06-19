import React from 'react'
import './TextBlock.css'

const TextBlock = props => {
  const {
    text
  } = props
  
  return <div className='TextBlock'>
    {text}
  </div>
}

TextBlock.defaultProps = {
  text: ''
}

export default TextBlock
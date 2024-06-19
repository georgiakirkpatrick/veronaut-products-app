import React from 'react'
import './FooterSocialLink.css'

const FooterSocialLink = props => {    
  const {
    id,
    pathToProfile,
    platform
  } = props

  return (
    <li className='Footer__social-link' key={id}>
      <a href={pathToProfile}>
        {platform}
      </a>
    </li>
  )
}

FooterSocialLink.defaultProps = {
  id: 1,
  pathToProfile: '',
  platform: ''
}

export default FooterSocialLink
import React from 'react'
import './FooterSocialLink.css'

const FooterSocialLink = ({
  id = 1,
  pathToProfile = '',
  platform = ''
}) => {

  return (
    <li className='Footer__social-link' key={id}>
      <a href={pathToProfile}>
        {platform}
      </a>
    </li>
  )
}

export default FooterSocialLink
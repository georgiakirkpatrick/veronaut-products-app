import React from 'react'
import { Link } from 'react-router-dom'
import './FooterPageLink.css'

const FooterPageLink = props => {
    return (
        <li className='Footer__page-link' key={props.id}>
            <Link to={props.route}>
                {props.name}
            </Link>
        </li>
    )
}

export default FooterPageLink;
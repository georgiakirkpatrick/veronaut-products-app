import React from 'react';
import FooterPageLink from '../FooterPageLink/FooterPageLink';
import './FooterPageLinkList.css';

function FooterPageLinkList(props) {
    const generateFooterLinks = props.footerLinks.map(link => (
        <FooterPageLink 
            key={link.id}
            route={link.route}
            name={link.name}
        />
    ))

    return <nav className='Footer__page-link-list'>
        <ul>
            {generateFooterLinks}
        </ul>
    </nav>
}

export default FooterPageLinkList;
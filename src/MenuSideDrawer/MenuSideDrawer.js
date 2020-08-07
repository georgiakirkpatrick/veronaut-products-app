import React from 'react';
import './MenuSideDrawer.css';

const MenuSideDrawer = props => {
    let drawerClasses = ['MenuSideDrawer'];
    
    if (props.show) {
        drawerClasses = ['MenuSideDrawer', 'open']
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/category'>Categories</a></li>
                <li><a href='/brand'>Brands</a></li>
                <li><a href='/principles'>Principles</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </nav>
    );
};

export default MenuSideDrawer;
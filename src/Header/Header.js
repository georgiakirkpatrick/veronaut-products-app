import React from 'react';
import './Header.css';
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';

function Header(props) {
    return (
        // <Router>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to="/">Home</Link>
        //             </li>

        //             <li>
        //                 <Link to="/about">About</Link>
        //             </li>

        //             <li>
        //                 <Link to="/users">Users</Link>
        //             </li>
        //         </ul>
        //     </nav>

        //     <Switch>
        //         <Route path="/about">
        //             <About />
        //         </Route>

        //         <Route path="/users">
        //             <Users />
        //         </Route>

        //         <Route path="/">
        //             <Home />
        //         </Route>
        //     </Switch>
        // </Router>
        
        <nav className='Header'>
            <div className='Header__top'>
                <div className='Header__item'>
                        <button className='Header__hamburger' type='button' onClick={props.click} id='hamburger'>
                            <div className='line-1'></div>
                            <div className='line-2'></div>
                            <div className='line-3'></div>
                        </button>
                </div>
                
                <div className='Header__logo Header__item'>
                    <h4>
                        SWP
                    </h4>
                </div>
                
                <div className='Header__search-user Header__item'>
                    <button href='www.shewantspockets.com'>
                        <FontAwesomeIcon icon="search" size='lg' />
                    </button>

                    <button href='www.shewantspockets.com'>
                        <FontAwesomeIcon icon="user-circle" size='lg' />
                    </button>
                </div>
            </div>

            <ul className='Header__menu' id='menu'>
                <li><a href='/category'>Categories</a></li>
                <li><a href='/brand'>Brands</a></li>
                <li><a href='/principles'>Principles</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
        </nav>
    )
}

export default Header
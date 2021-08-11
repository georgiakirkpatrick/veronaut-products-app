import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/react-fontawesome'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../FontAwesomeIcons/FontAwesomeIcons'
import Backdrop from '../Backdrop/Backdrop'
import MenuItem from '../MenuItem/MenuItem'
import './Header.css'

const Header = props => {
    const [mobMenuOpen, setMobMenuOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState('main')

    const handleHamClick = () => setMobMenuOpen(true)
    const handleCloseClick = () => {
        setMobMenuOpen(false)
    }

    const makeCategorySlug = categoryName => {
        return categoryName
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .replace(/,/g, '')
            .toLowerCase()
    }

    return (
        <nav className='Header'>
            <div className='Header__top'>
                <div className='Header__item'>
                    <button 
                        className='Header__hamburger' 
                        type='button' 
                        onClick={handleHamClick}
                    >
                        <FontAwesomeIcon icon='bars' size='lg'/>
                    </button>
                </div>
                
                <Link to='/' className='Header__logo Header__item'>
                    <h1>
                        VERONAUT
                    </h1>
                </Link>
                
                <div className='Header__search-user Header__item' />
            </div>

            <Backdrop handleClick={handleCloseClick} mobMenuOpen={mobMenuOpen} />

            <div
                className='Header__desktop-menu'
            >

            </div>
            
            <div className={mobMenuOpen ? 'Header__menu active' : 'Header__menu'}>
                <button className='close-button' type='button' onClick={handleCloseClick} >
                    <FontAwesomeIcon icon='times' size='lg' />
                </button>

                <CSSTransition 
                    in={activeMenu === 'main'} // when activeMenu === 'main', we will render the children inside this component
                    unmountOnExit // removes children when not active
                    timeout={0} //defines length of animation
                    className='Header__menu-primary'
                >
                    <div>
                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Home
                            </MenuItem>
                        </div>
                        
                        <div className='Header__primary-item'>
                            <MenuItem
                                to='#'
                                itemType='primary'
                                rightIcon={<FontAwesomeIcon icon='angle-right' size='lg'/>}
                                setActiveMenu={setActiveMenu}
                                goToMenu='categories'
                            >
                                Categories
                            </MenuItem>
                        </div>

                        <div className='Header__primary-item'  onClick={handleCloseClick}>
                            <MenuItem
                                to='/about'
                                itemType='primary'
                                setActiveMenu={setActiveMenu} 
                            >
                                About
                            </MenuItem>
                        </div>

                        <div className='Header__primary-item' onClick={handleCloseClick}>
                            <MenuItem
                                to='/add-product'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Add a Product
                            </MenuItem>
                        </div>

                        <div className='Header__primary-item' onClick={handleCloseClick}>
                            <MenuItem
                                to='/create-account'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Create an account
                            </MenuItem>
                        </div>

                        <div className='Header__primary-item' onClick={handleCloseClick}>
                            <MenuItem
                                to='/login'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Log in
                            </MenuItem>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition 
                    in={activeMenu === 'categories'} // when activeMenu === 'main', we will render the children inside this component
                    unmountOnExit // removes children when not active
                    timeout={0} //defines length of animation
                    className='Header__menu-secondary'
                >
                    <div 
                        id='categories'
                        className='Header__secondary-item'
                    >
                        <MenuItem
                            to='#'
                            goToMenu='main'
                            itemType='secondary-menu-header'
                            leftIcon={<FontAwesomeIcon icon='angle-left' size='lg'/>}
                            rightIcon=' '
                            setActiveMenu={setActiveMenu}
                            handleCloseClick={handleCloseClick}
                        >
                            Categories
                        </MenuItem>

                        {props.categoryList.map(category => {
                            const slug = makeCategorySlug(category.english_name)
                            return (
                                <div key={category.id} onClick={handleCloseClick}>
                                    <MenuItem
                                        to={`/category/${category.id}/${slug}`}
                                        goToMenu='main'
                                        itemType='secondary'
                                        setActiveMenu={setActiveMenu}
                                        handleCloseClick={handleCloseClick}
                                    >
                                        {category.english_name}    
                                    </MenuItem>
                                </div>
                            )
                        })}
                    </div>
                </CSSTransition>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    categoryList: []
}

export default Header
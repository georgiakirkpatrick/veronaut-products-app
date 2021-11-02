import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import './ProductDetailSection.css'

const ProductDetailSection = props => {
    const {
        children,
        closeButton,
        id,
        openButton,
        sectionOpen,
        sectionTitle
    } = props

    const handleClick = sectionOpen ? closeButton : openButton
    const displayButton = sectionOpen ? 'times' : 'angle-down'
    const sectionClass = sectionOpen ? 'ProductDetailSection__body active' : 'ProductDetailSection__body'
    return (
        <>
            <hr className='ProductDetailSection__line'></hr>

            <section 
                id={id}
                className='ProductDetailSection'
            >
                <button 
                    className='ProductDetailSection__button' 
                    type='button' 
                    onClick={handleClick}
                >
                        <FontAwesomeIcon icon={displayButton} />
                </button>
                    <header onClick={handleClick}>
                    <h3>
                        {sectionTitle}
                    </h3>
                </header>

                <div className={sectionClass}>
                    {children}
                </div>
            </section>
        </>
    )
}

ProductDetailSection.defaultProps = {
    children: '',
    closeButton: () => {},
    id: 1,
    openButton: () => {},
    sectionOpen: false,
    sectionTitle: ''
}

export default ProductDetailSection

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import './ProductDetailSection.css'

const ProductDetailSection = props => {
    return (
        <>
            <hr></hr>

            <section>
                <button className='ProductDetailSection__button' type='button' onClick={props.sectionOpen ? props.handleSectionClose : props.handleSectionOpen} >
                    <FontAwesomeIcon icon={props.sectionOpen ? 'times' : 'angle-down'} />
                </button>

                <header onClick={props.sectionOpen ? props.handleSectionClose : props.handleSectionOpen}>
                    <h3>
                        {props.sectionTitle}
                    </h3>
                </header>

                <div className={props.sectionOpen ? 'ProductDetailSection active' : 'ProductDetailSection'}>
                    {props.children}
                </div>
            </section>
        </>
    )
}

export default ProductDetailSection

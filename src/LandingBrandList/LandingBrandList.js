import React from 'react';
import Brand from '../Brand/Brand';
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink';
import './LandingBrandList.css';

function LandingBrandList(props) {
    const generateBrandList = props.brands.map(brand => (
        <Brand 
            key={brand.id}
            id={brand.id}
            pathToImage={brand.pathToImage}
            imgAlt={brand.imgAlt}
            brandName={brand.brandName}
            brandLink={brand.brandLink}
        />
    ))

    return (
        <section className='LandingBrandList__section'>
            <header>
                <h3>
                    Discover new brands
                </h3>
            </header>
            <p>
                She Wants Pockets curates clothing from {props.totalBrands} from {props.totalCountries}.
                Explore our brand fact sheets and impartial supply-chain reviews to make an informed 
                decision when you vote with your money.
            </p>
            <div className='LandingBrandList__list'>
                {generateBrandList}
            </div>
            <ReadMoreLink text='All brand reviews' link='/all-categories' />
        </section>
    )
}

LandingBrandList.defaultProps = {
    brands: []
}

export default LandingBrandList;
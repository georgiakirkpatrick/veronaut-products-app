import React from 'react';
import Category from '../Category/Category';
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink';
import './LandingCategoryList.css';

function LandingCategoryList(props) {
    const generateCategoryList = props.categories.map(category => (
        <Category 
            key={category.id}
            id={category.id}
            pathToImage={category.picPath}
            imgAlt={category.imgAlt}
            categoryName={category.name}
            categoryLink={category.link}
        />
    ))

    return (
        <section className='LandingcategoryList__section'>
            <header>
                <h3>
                    Use filters to narrow your search
                </h3>
            </header>
            <p>
                Search by design feature, size, brand, fiber, and other details to find 
                the fashion you're looking for.
            </p>
            <ul className='LandingCategoryList__list'>
                {generateCategoryList}
            </ul>
            <ReadMoreLink 
                text='More categories' 
                link='/all-categories'
            />
        </section>
    )
}

LandingCategoryList.defaultProps = {
    categories: []
}

export default LandingCategoryList;
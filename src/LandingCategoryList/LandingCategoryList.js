import React from 'react';
import Category from '../Category/Category';
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink';
import './LandingCategoryList.css';

const LandingCategoryList = props => {
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
        <section className='LandingCategoryList__section'>
            <header>
                <h2>
                    Categories
                </h2>
            </header>
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
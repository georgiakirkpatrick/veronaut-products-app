import React from 'react';
import './Category.css';

function Category(props) {
    return (
        <li key={props.id}>
            <a href='www.google.com' className='main-link'>
                <div className='Category'>
                    <img src={props.pathToImage} alt={props.imgAlt} />
                    <p>{props.categoryName}</p>
                </div>
            </a>
        </li>
    )
}

Category.defaultProps = {
    key: 7676,
    id: 7676,
    pathToImage: 'www.google.com',
    imgAlt: 'alternate text',
    categoryName: 'tops',
    categoryLink: 'www.google.com'
}

export default Category;
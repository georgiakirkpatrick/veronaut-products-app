import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = props => {
    return (
        <li className='Category' key={props.id}>
            <Link to={`/category/${props.id}/slug`} className='main-link'>
                <div className='Category__cropped'>
                    <img src={props.pathToImage} alt={props.imgAlt} />
                </div>
                <h2 className='Category__title'>{props.categoryName}</h2>
            </Link>
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
import React from 'react';
import './Brand.css';

const Brand = props => {
    return (
        <a href={props.brandLink}>
            <div className='Brand'>
                <img src={props.pathToImage} alt={props.imgAlt} />
                <p>{props.brandName}</p>
            </div>
        </a>
    )
}

export default Brand;
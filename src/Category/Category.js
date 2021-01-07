import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = props => {
    const makeCategorySlug = () => {
        const categoryName = props.categoryName
        return categoryName
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .toLowerCase()
    }

    const slug = makeCategorySlug()

    return (
        <li className='Category' key={props.id}>
            <Link to={`/category/${props.id}/${slug}`} className='main-link'>
                <div className='Category__cropped'>
                    <img src={props.pathToImage} alt={props.imgAlt} />
                </div>
                <h2 className='Category__title'>{props.categoryName}</h2>
            </Link>
        </li>
    )
}

Category.defaultProps = {
    id: 1,
    pathToImage: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg',
    imgAlt: 'alternate text',
    categoryName: 'Dresses',
}

export default Category
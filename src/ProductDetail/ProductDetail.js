import React from 'react'
import data from '../DATA'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import './ProductDetail.css'

const ProductDetail = props => {
    console.log('props.routeProps', props.routeProps)
    const selectedProductId = Number(props.routeProps.match.params.productId)

    const productInfo = data.productList.find(product => 
        product.id === selectedProductId
    )

    const allProductImages = data.productImages.filter(image =>
        image.product_id === selectedProductId
    )

    console.log('allProductImages', allProductImages)

    const displayAllImages = allProductImages.map(image => (
        <img
            key={image.id}
            src={image.product_image_url}
            alt={image.imgAlt}
        />
    ))

    console.log('displayAllImages', displayAllImages)

    // const imagesForColor = data.productList.filter(product =>
    //     product.categoryId === selectedProductId
    // )

    const makeProductSlug = p => {
        const brandProduct = `${p.brand} ${p.productTitle}`
        return brandProduct
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .toLowerCase()
    }

    return (
        <div className='ProductDetail'>
            <div className='ProductDetail__carousel'>
                <div className='ProductDetail__images'>
                    {displayAllImages}
                </div>
            </div>

            <section className='ProductDetail__basic-info'>
                <header>
                    <h2 className='ProductDetail__product-name'>
                        {productInfo.productTitle}
                    </h2>
                </header>
                <div className='ProductDetail__button-section'>
                    <button className='ProductDetail__heart' type='button'>
                        <FontAwesomeIcon icon={['far', 'heart']} />
                    </button>
                    <div className='ProductDetail__button-like'>
                        BUY
                    </div>
                </div>
                <div className='ProductDetail__info-section'>
                    <p>
                        {productInfo.brand}
                    </p>
                    <p>
                        {productInfo.price}
                    </p>
                    <p>
                        Standard US sizes 0-12
                    </p>
                    <p>
                        Fibers: 100% silk
                    </p>
                    <p>
                        Color options:
                    </p>
                </div>
                <div className='ProductDetail__color-list'>
                    <div className='ProductDetail__color'>
                        <img 
                            src='https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/avhc13dzwkv0pzgbmf7g.jpg'
                            alt='Black'
                        />
                    </div>
                    <div className='ProductDetail__color'>
                        <img 
                            src='https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_60,q_auto:best,w_43/iwjijdgeeru16c6btswn.jpg'
                            alt='Paris est une fete print'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
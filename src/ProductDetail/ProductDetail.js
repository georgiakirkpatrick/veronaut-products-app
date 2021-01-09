import React, { useState } from 'react'
import data from '../DATA'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import ProductDetailCarousel from '../ProductDetailCarousel/ProductDetailCarousel'
import ProductDetailSection from '../ProductDetailSection/ProductDetailSection'
import './ProductDetail.css'

const ProductDetail = props => {
    const [careOpen, setCareOpen] = useState(false)
    const [designOpen, setDesignOpen] = useState(false)
    const [fabricOpen, setFabricOpen] = useState(false)
    const [notionsOpen, setNotionsOpen] = useState(false)
    const [productionOpen, setProductionOpen] = useState(false)

    const handleOpenCare = () => {
        setCareOpen(true)
    }

    const handleCloseCare = () => {
        setCareOpen(false)
    }

    const handleOpenDesign = () => {
        setDesignOpen(true)
    }

    const handleCloseDesign = () => {
        setDesignOpen(false)
    }

    const handleOpenFabric = () => {
        setFabricOpen(true)
    }

    const handleCloseFabric = () => {
        setFabricOpen(false)
    }

    const handleOpenNotions = () => {
        setNotionsOpen(true)
    }

    const handleCloseNotions = () => {
        setNotionsOpen(false)
    }

    const handleOpenProduction = () => {
        setProductionOpen(true)
    }

    const handleCloseProduction = () => {
        setProductionOpen(false)
    }

    const selectedProductId = Number(props.routeProps.match.params.productId)

    const productInfo = data.productList.find(product => 
        product.id === selectedProductId
    )

    const allProductImages = data.productImages.filter(image =>
        image.product_id === selectedProductId
    )

    const displayAllImages = allProductImages.map(image => (
        <img
            key={image.id}
            src={image.product_image_url}
            alt={image.imgAlt}
        />
    ))

    return (
        <div className='ProductDetail'>

            <ProductDetailCarousel
                id='image-carousel'
            >
                {displayAllImages}
            </ProductDetailCarousel>

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
            
            <ProductDetailSection
                id='product-detail-design'
                sectionTitle='Design details'
                sectionOpen={designOpen}
                handleSectionClose={handleCloseDesign}
                handleSectionOpen={handleOpenDesign}
            >
                <p>
                    Neckline: v-neck
                </p>

                <p>
                    Sleeve length: three-quarter-length sleeves
                </p>

                <p>
                    Office-friendly: yes
                </p>

                <p>
                    Length: below the knee
                </p>

                <p>
                    Dress style: wrap dress
                </p>
            </ProductDetailSection>

            <ProductDetailSection
                id='product-detail-care'
                sectionTitle='Care instructions'
                sectionOpen={careOpen}
                handleSectionClose={handleCloseCare}
                handleSectionOpen={handleOpenCare}
            >
                <p>
                    Wash: hand wash in cold water
                </p>

                <p>
                    Dry: not provided 
                </p>
            </ProductDetailSection>

            <ProductDetailSection
                id='product-detail-production'
                sectionTitle='Production'
                sectionOpen={productionOpen}
                handleSectionClose={handleCloseProduction}
                handleSectionOpen={handleOpenProduction}
            >
                <h4>
                    Garment sewing and finishing
                </h4>

                <p>
                    Country: China
                </p>

                <p>
                    Factory: not disclosed
                </p>

                <h4>
                    Fabric cutting
                </h4>

                <p>
                    Country: not disclosed
                </p>

                <p>
                    Factory: not disclosed
                </p>

                <p>
                    Product certifications: OEKO-TEX Standard 100
                </p>

                <p>
                    Production notes: OEKO-TEX certification number CQ 1217/1IFTH
                </p>
            </ProductDetailSection>
            
            <ProductDetailSection
                sectionTitle='Fabric'
                sectionOpen={fabricOpen}
                handleSectionClose={handleCloseFabric}
                handleSectionOpen={handleOpenFabric}
            >
                <ProductDetailCarousel
                    id='section-carousel'
                >
                    <div className='ProductDetail__carousel-item'>
                        <h4>
                            Primary fabric
                        </h4>

                        <p>
                            Fabric type: not listed
                        </p>

                        <h5>
                            Dyeing and finishing
                        </h5>

                        <p>
                            Country: 
                        </p>

                        <p>
                            Factory: 
                        </p>

                        <h5>
                            Fabric mill
                        </h5>

                        <p>
                            Country: 
                        </p>

                        <p>
                            Factory: 
                        </p>

                        <p>
                            Fabric certifications: none listed
                        </p>

                        <h5>
                            Fiber(s)
                        </h5>

                        <h6>
                            Silk
                        </h6>

                        <p>
                            Fiber origin: not disclosed
                        </p>

                        <p>
                            Fiber producer: not disclosed
                        </p>

                        <p>
                            Fiber certifications: none listed
                        </p>
                    </div>

                    <div className='ProductDetail__carousel-item'>
                        <h4>
                            Secondary fabric
                        </h4>

                        <p>
                            Fabric type: not listed
                        </p>

                        <h5>
                            Dyeing and finishing
                        </h5>

                        <p>
                            Country: China
                        </p>

                        <p>
                            Factory: not disclosed
                        </p>

                        <h5>
                            Fabric mill
                        </h5>

                        <p>
                            Country: not disclosed
                        </p>

                        <p>
                            Factory: not disclosed
                        </p>

                        <p>
                            Fabric certifications: none listed
                        </p>

                        <h5>
                            Fiber(s)
                        </h5>

                        <h6>
                            Silk
                        </h6>

                        <p>
                            Fiber origin: not disclosed
                        </p>

                        <p>
                            Fiber producer: not disclosed
                        </p>

                        <p>
                            Fiber certifications: none listed
                        </p>
                    </div>
                </ProductDetailCarousel>
            </ProductDetailSection>

            <ProductDetailSection
                sectionTitle='Notions'
                sectionOpen={notionsOpen}
                handleSectionClose={handleCloseNotions}
                handleSectionOpen={handleOpenNotions}
            >
                <ProductDetailCarousel
                    id='section-carousel'
                >
                    <div className='ProductDetail__carousel-item'>
                        <h4>
                            Primary fabric
                        </h4>

                        <p>
                            Fabric type: not listed
                        </p>

                        <h5>
                            Dyeing and finishing
                        </h5>

                        <p>
                            Country: 
                        </p>

                        <p>
                            Factory: 
                        </p>

                        <h5>
                            Fabric mill
                        </h5>

                        <p>
                            Country: 
                        </p>

                        <p>
                            Factory: 
                        </p>

                        <p>
                            Fabric certifications: none listed
                        </p>
                    </div>

                    <div className='ProductDetail__carousel-item'>
                        <h4>
                            Primary fabric
                        </h4>

                        <p>
                            Fabric type: not listed
                        </p>

                        <h5>
                            Dyeing and finishing
                        </h5>

                        <p>
                            Country: 
                        </p>

                        <p>
                            Factory: 
                        </p>

                        <h5>
                            Fabric mill
                        </h5>

                        <p>
                            Country: 
                        </p>

                        <p>
                            Factory: 
                        </p>

                        <p>
                            Fabric certifications: none listed
                        </p>
                    </div>
                </ProductDetailCarousel>
            </ProductDetailSection>
        </div>
    )
}

ProductDetail.defaultProps = {
    routeProps: {
        match: {
            params: {
                productId: 4
            }
        }
    },
    productInfo: {
        brand: "Sezane",
        category: "Dresses",
        categoryId: 4,
        id: 1,
        imgAlt: "Sezane Dahlia Dress",
        pathToImg: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg",
        price: 200,
        productTitle: "Dahlia Dress"
    }
}

export default ProductDetail
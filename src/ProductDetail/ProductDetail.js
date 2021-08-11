import React, { useState, useEffect } from 'react'
import config from '../config.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import FabricCarousel from '../FabricCarousel/FabricCarousel'
import NotionCarousel from '../NotionCarousel/NotionCarousel'
import ProductDetailSection from '../ProductDetailSection/ProductDetailSection'
import countries from '../COUNTRIES'
import currencies from '../CURRENCIES'
import formData from '../FORM_DATA'
import './ProductDetail.css'

const ProductDetail = props => {
    const {
        certArray,
        factoryList,
        productArray,
        routeProps,
        setProductArray
    } = props

    const [careOpen, setCareOpen] = useState(false)
    const [error, setError] = useState(null)
    const [fabricArray, setFabricArray] = useState([])
    const [fabricOpen, setFabricOpen] = useState(false)
    const [notionsOpen, setNotionsOpen] = useState(false)
    const [prodLoaded, setProdLoaded] = useState(false)
    const [productionOpen, setProductionOpen] = useState(false)
    const [selectedColorId, setSelectedColorId] = useState(null)
    const [sizeArray, setSizeArray] = useState([])

    // FIND PRODUCT
    const selectedProductId = routeProps.match.params.productId
    const selectedProduct = productArray.find(p => p.id === selectedProductId) === undefined
        ? null
        : [...productArray.find(p => p.id === selectedProductId)]

    useEffect(() => {
        const getFabrics = () => {
            fetch(`${config.API_URL}/api/products/${selectedProductId}/fabrics`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => {
                if (response.status >= 400) {
                    console.log('There was a problem.  Status code: ' + response.status)
                    throw new Error("Server responded with an error!")
                }

                return response.json()
            })
            .then(fabrics => {
                setFabricArray(fabrics)
            },
            err => {
                setError(err)
            })
        }
        getFabrics()

        const getSizes = () => {
            fetch(`${config.API_URL}/api/products/${selectedProductId}/sizes`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => {
                if (response.status >= 400) {
                    console.log('There was a problem.  Status code: ' + response.status)
                    throw new Error("Server responded with an error!")
                }

                return response.json()
            })
            .then(sizes => {
                setSizeArray(sizes)
            },
            err => {
                setError(err)
            })
        }
        getSizes()

        const getProduct = productId => {
            fetch(`${config.API_URL}/api/products/${productId}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => {
                if (response.status >= 400) {
                    console.log('There was a problem.  Status code: ' + response.status)
                    throw new Error("Server responded with an error!")
                }
                
                return response.json()
            })
            .then(productObject => {
                const colsWithImgs = []
                productObject.prodColorArray.forEach(color => {
                    const imagesForColor = []
                    
                    productObject.prodColorArray.forEach(image => {
                        if (image.color_id === color.color_id) {

                            const imageObject = {
                                imageId: image.image_id,
                                primaryImage: image.primary_image_for_color,
                                imageUrl: image.product_image_url
                            }

                            imagesForColor.push(imageObject)
                        }
                    })
                   
                    const newColorObject = {
                        colorId: color.color_id,
                        colorDescId: color.color_description_id,
                        colorEngName: color.color_english_name,
                        swatchUrl: color.swatch_image_url,
                        imageArray: imagesForColor
                    }

                    if (imagesForColor) {
                        colsWithImgs.push(newColorObject)
                    }
                })

                const filteredColorArray = () => {
                    return colsWithImgs.reduce((newArray, color) => {
                        const hasColor = !!newArray.find(uniqueColor => (
                            uniqueColor.colorId === color.colorId
                        ))

                        if (!hasColor) {
                            return [...newArray, color]
                        }

                        return newArray
                    }, [])
                }

                const notsWithCerts = productObject.prodNotArray.map(notion => {
                    const certArray = productObject.notCertArray.filter(cert => (
                        cert.notion_id === notion.id
                    ))

                    const certIdArray = certArray.map(cert => cert.id)

                    const notWithCert = {
                        ...notion,
                        certification_ids: certIdArray
                    }

                    return notWithCert
                })

                const newProductObject = {
                    cmtFactArray: productObject.cmtFactArray,
                    prodCertArray: productObject.prodCertArray,
                    prodColorArray: filteredColorArray(),
                    prodNotArray: notsWithCerts,
                    productObject: productObject.productObject
                }

                setProductArray([newProductObject])
                setSelectedColorId(productObject.prodColorArray[0].color_id)
                setProdLoaded(true)
            },
            err => {
                setError(err)
                setProdLoaded(false)
            })
        }

        if (selectedProduct) {
            setSelectedColorId(selectedProduct.colorArray[0].id)
            setProdLoaded(true)
        } else {
            getProduct(selectedProductId)
        }
    }, [selectedProductId, selectedProduct, setProductArray])

    const openSection = setSection => {
        setSection(true)
    }

    const closeSection = setSection => {
        setSection(false)
    }

    if (error) {
        return <div> {error.message} </div>
    } else if (prodLoaded === false) {
        return <div>Loading...</div>
    } else if (prodLoaded === true) {

        // FIND PRODUCT
        const product = productArray.find(p => p.productObject.id === Number(selectedProductId))

        // FORMAT COLOR OPTIONS
        const displayImage = colorId => {
            setSelectedColorId(colorId)
        }

        const formatColors = () => {
            if (product.prodColorArray.length === 1) {
                return (
                    <>
                        <p>
                            Color:
                        </p>
                        <ul className='ProductDetail__color-list'>
                            {product.prodColorArray.map(color => {
                                return (
                                    <li 
                                        className='ProductDetail__color'
                                        key={'color-' + color.colorId}
                                    >
                                        <img 
                                            src={color.swatchUrl}
                                            alt={color.colorEngName}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                    
                )
            } else {
                return <>
                    <p>
                        Color options:
                    </p>

                    <ul className='ProductDetail__color-list'>
                        {product.prodColorArray.map((color, index) => {
                            return (
                                <li 
                                    className='ProductDetail__color'
                                    key={'color-' + color.colorId + '-' + index}
                                >
                                    <button 
                                        type='button' 
                                        className='js-ProductDetail-color'
                                        onClick={() => { displayImage(color.colorId) }}
                                    >
                                        <img 
                                            src={color.swatchUrl}
                                            alt={color.colorEngName}
                                        />
                                        {/* <p>{color.colorEngName}</p> */}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </>
            }
        }

        // FORMAT DRY
        const formatDry = () => {
            const dryText = formData.dryOptions.filter(dry => dry.id === product.productObject.dry_id)[0].text
            return (
                <p>
                    Drying instructions: {dryText}
                </p>
            )
        }

        // FORMAT FIBERS
        const formatFibers = () => {
            const makeFabFibs = fabric => {
                const allFibers = fabric.fibers.map(fiber => {
                    if (fiber.percent_of_fabric !== null) {
                        return `${fiber.percent_of_fabric}% ${fiber.fiber_type}`
                    } else {
                        return fiber.fiber_type
                    }
                })
                const fiberList = allFibers.join(', ')
                return fiberList
            }

            if (fabricArray.length === 1) {
                return <p>Fiber content: {makeFabFibs(fabricArray[0])}</p>
            } else {
                const fabricList = fabricArray.forEach(fabric => {
                    return <p>{fabric.relationship} + ' fabric: '{makeFabFibs(fabric)}</p>
                })
                return <div>
                    <p>Fiber content</p>
                    <p>{fabricList}</p>
                </div>
            }
        }

        // FORMAT PRICE
        const formatPrice = () => {
            return (
                <p>
                    {currencies[product.productObject.brand_currency - 1].symbol_native}{product.productObject.cost_in_home_currency}
                </p>
            )    
        }

        // FORMAT PRODUCTION
        const formatProduction = () => {
            const sew = product.cmtFactArray.filter(factory => factory.stage === "sew")[0]
            const cut = product.cmtFactArray.filter(factory => factory.stage === "cut")[0]
            const productCerts = product.prodCertArray.map(cert => <p key={'cert-' + cert.id}>{cert.english_name}</p>)
            return <>    
                <section>
                    <h4>
                        Garment sewing and finishing
                    </h4>

                    <p
                        key='sewing-country'
                    >
                        Country: {countries[sew.country - 1].text}
                    </p>

                    <p
                        key='sewing-factory'
                    >
                        Factory: {sew.english_name}
                    </p>

                    {sew.notes ? <p>Notes: {sew.notes}</p> : null}
                </section>    

                <section>
                    <h4>
                        Fabric cutting
                    </h4>

                    <p
                        key='cutting-country'
                    >
                        Country: {countries[cut.country - 1].text}
                    </p>

                    <p
                        key='cutting-factory'
                    >
                        Factory: {cut.english_name}
                    </p>

                    {cut.notes ? <p>Notes: {cut.notes}</p> : null}
                </section>

                <section>
                    <h4>
                        Product certifications
                    </h4>
                    {productCerts}
                </section>

                {product.productObject.cmt_notes
                    ? <section>
                        <h4>
                            Production notes
                        </h4>
                        {product.productObject.cmt_notes}
                    </section>
                    : null
                }
            </>    
        }

        // FORMAT SIZES
        const formatSizes = () => {
            const smallestSize = sizeArray[0].us_size
            const largestSize = sizeArray.slice(sizeArray.length-1)[0].us_size
            if (sizeArray.length > 1) {
                return <p>Sizes: {smallestSize} - {largestSize}</p>
            } else {
                return <p>One size</p>
            }
        }

        // FORMAT WASH
        const formatWash = () => {
            const washText = formData.washOptions.filter(wash => wash.id === product.productObject.wash_id)[0].text
            return (
                <p>
                    Washing instructions: {washText}
                </p>
            )
        }

        return (
            <div className='ProductDetail'>
                <PhotoCarousel
                    id='image-carousel'
                    colorArray={product.prodColorArray}
                    productName={product.productObject.english_name}
                    selectedColorId={selectedColorId}
                />

                <section className='ProductDetail__basic-info'>
                    <header>
                        <h2 className='ProductDetail__product-name'>
                            {product.productObject.english_name}
                        </h2>
                    </header>

                    <div className='ProductDetail__button-section'>
                        <button 
                            className='ProductDetail__heart'
                            type='button'
                            onClick={() => props.buyClick}
                        >
                            <FontAwesomeIcon icon={['far', 'heart']} />
                        </button>

                        <a href={product.productObject.product_url} target='_blank' rel='noopener noreferrer'>
                            <div className='ProductDetail__button-like'>
                                BUY
                            </div>
                        </a>
                    </div>

                    <div className='ProductDetail__info-section'>
                        <p>
                            {product.productObject.brand_name}
                        </p>
                        {formatPrice()}
                        {formatSizes()}
                        {formatFibers()}
                    </div>

                    <div className='ProductDetail__color-section'>
                        {formatColors()}
                    </div>
                </section>

                <ProductDetailSection
                    id='product-detail-care'
                    sectionTitle='Care instructions'
                    sectionOpen={careOpen}
                    openButton={() => openSection(setCareOpen)}
                    closeButton={() => closeSection(setCareOpen)}
                >
                    {formatWash()}
                    {formatDry()}
                </ProductDetailSection>

                <ProductDetailSection
                    id='product-detail-production'
                    sectionTitle='Production'
                    sectionOpen={productionOpen}
                    openButton={() => openSection(setProductionOpen)}
                    closeButton={() => closeSection(setProductionOpen)}
                >
                    {formatProduction()}
                </ProductDetailSection>
                
                <ProductDetailSection
                    sectionTitle='Fabric'
                    sectionOpen={fabricOpen}
                    openButton={() => openSection(setFabricOpen)}
                    closeButton={() => closeSection(setFabricOpen)}
                >
                    <FabricCarousel
                        certArray={certArray}
                        fabricArray={fabricArray}
                        factoryList={factoryList}
                    />
                </ProductDetailSection>

                <ProductDetailSection
                    sectionTitle='Notions'
                    sectionOpen={notionsOpen}
                    openButton={() => {
                        setNotionsOpen(true)}
                    }
                    closeButton={() => {setNotionsOpen(false)}}
                >
                    <NotionCarousel
                        certArray={certArray}
                        notionArray={product.prodNotArray}
                        factoryList={factoryList}
                    />
                </ProductDetailSection>
            </div>
        )
    }
}

ProductDetail.defaultProps = {
    certArray: [],
    factoryList: [],
    productArray: [
        
    ],
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
    },
    setProductArray: () => {}
}

export default ProductDetail
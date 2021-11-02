import React from 'react'
import './ProdCarousel.css'

const ProdCarousel = props => {
    const {
        colorArray,
        id,
        productName,
        selectedColorId
    } = props
 
    const makeColorImages = color => {
        const primaryImage = color.imageArray.find(image => image.primaryImage === true)
        const allButPrimary = color.imageArray.filter(image => image.imageId !== primaryImage.imageId)

        return [
            primaryImage,
            ...allButPrimary
        ]
    }

    const selectedColor = colorArray.filter(color => color.colorId === selectedColorId)[0]
    const imagesForColor = makeColorImages(selectedColor)
    const formattedImages = imagesForColor.map(image => {
        return <li key={'li-' + image.imageId}>
            <img
                src={image.imageUrl}
                alt={`${productName} ${selectedColor.colorEngName} ${image.imageId}`}
            />
        </li>
    })

    return (
        <div 
            id={id}
            className='ProdCarousel'
        >
            <ul className='ProdCarousel__items'>
                {formattedImages}
            </ul>
        </div>
    )
}

ProdCarousel.defaultProps = {
    id: '',
    colorArray: [
        {
            colorDescId: 1,
            colorEngName: '',
            colorId: 1,
            imageArray: [
                {
                    imageId: 1,
                    imageUrl: '',
                    primaryImage: true,
                }
            ],
            swatchUrl: ''
        }
    ],
    selectedColorId: 1,
    productName: ''
}

export default ProdCarousel
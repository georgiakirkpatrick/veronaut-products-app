import React from 'react'
import './PhotoCarousel.css'

const PhotoCarousel = props => {
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
                key={'image-' + image.imageId}
                src={image.imageUrl}
                alt={`${productName} ${selectedColor.colorEngName} ${image.imageId}`}
            />
        </li>
    })

    return (
        <div 
            id={id}
            className='PhotoCarousel'
        >
            <ul className='PhotoCarousel__items'>
                {formattedImages}
            </ul>
        </div>
    )
}

PhotoCarousel.defaultProps = {
    id: 0,
    colorArray: [
        {
            color_description_id: 1,
            color_english_name: '',
            id: 1,
            image_array: [
                {
                    id: 1,
                    image_url: '',
                    primary_image_for_color: true,
                }
            ],
            swatch_image_url: ''
        }
    ],
    selectedColorId: 1,
    productName: ''
}

export default PhotoCarousel
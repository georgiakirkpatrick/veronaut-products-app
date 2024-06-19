import React from 'react'
import './CatCarousel.css'

const CatCarousel = props => {
  const {
    id,
    images
  } = props

  const formattedImages = images.map(image => {
    return <li key={'li-' + image.id}>
      <div>
        <img
          src={image.url}
          alt={image.category}
        />
      </div>

      <p>{image.category}</p>
    </li>
  })

  return (
    <div 
      id={id}
      className='CatCarousel'
    >
      <ul className='CatCarousel__list'>
        {formattedImages}
      </ul>
    </div>
  )
}

CatCarousel.defaultProps = {
  id: 0,
  images: [
    {
      id: 0,
      url: '',
      category: '',
      slug: ''
    }
  ]
}

export default CatCarousel
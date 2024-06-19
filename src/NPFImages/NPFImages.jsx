import React, { useState } from 'react'
import '@fortawesome/react-fontawesome'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter'
import './NPFImages.css'

const NPFImages = props => {
  const {
    colorFieldsets,
    currentPage,
    setColorFieldsets,
    setPage
  } = props

  const [images, setImages] = useState(false)

  const addImage = (index) => {
    const fieldsetToUpdate = colorFieldsets[index]
    fieldsetToUpdate.imageUrls.push('')
    setColorFieldsets([ ...colorFieldsets ])
  }

  const changeImageInput = (index, i, event) => {
    const values = [...colorFieldsets]
    values[index][event.target.name][i] = event.target.value

    setImages(values[index].imageUrls + 1)
  }

  const nextButton = () => {
    const missingUrls = []

    colorFieldsets.forEach(fieldset => {
      fieldset.imageUrls.forEach(field => {
        if (field === '' || null) {
          missingUrls.push(
            field.name
          )
        }
      })
    })
      
    if (missingUrls.length >= 1) {
      alert(`Please enter at least one image url for each color and remove any empty fields.  Having trouble getting an image URL?  Just remove any empty fields and click 'Next'.`)
    } else {
      setPage(currentPage + 1)
    }
  }

  const removeImage = (index, i) => {
    const newColors = [...colorFieldsets]
    newColors[index].imageUrls.splice(i, 1)

    setColorFieldsets(newColors)
  }

  return (
    <div className='NPFImages'>
      <FormPage title='Images'>
        <FormPromptWithSub 
          prompt='Enter the image URLs of up to four images for each color option, one URL per line.'
          promptSubtitle={`To copy an image URL from a product page, follow these steps: on a computer, right-click on the image, then select 'Copy Image Address'.  
          On a mobile device, tap and hold the image, then select 'Copy'.  If 'Copy' is not an option, select 'Share...', then 'Copy'.
          
          Remove any empty fields before tapping 'Next'.`}
        />
          {colorFieldsets.map((colorFieldset, index) => {
            const formattedColor = colorFieldset.name.length > 2
                ? colorFieldset.name[0].toUpperCase() + colorFieldset.name.substr(1)
                : 'Color ' + index

            return <FormFieldset key={index}>
              <FormPromptWithSub
                  prompt={formattedColor}
                  promptSubtitle={`Enter the image URLs of up to four product images in ${formattedColor}, one URL per line.`}
              />
                {colorFieldset.imageUrls.map((colorImageUrl, i) => {
                  return <div key={i} className='NPFImages__image-field'>
                    <button 
                      className='NPFImages__remove-image'
                      type='button'
                      onClick={() => removeImage(index, i)}
                    >
                      REMOVE
                    </button>

                    <FormUrlInput
                      id={'color-image-urls-' + i}
                      name='imageUrls'
                      prompt='Image URL for this color'
                      currentValue={colorImageUrl}
                      handleChange={event => {
                          changeImageInput(index, i, event)
                      }}
                    />
                  </div>
                })}

                <FormButton
                  buttonText='Add an image for this color'
                  handleClick={() => addImage(index)}
                />

                {images 
                  ? <div>
                    <p>Image preview</p>

                    <ul className='NPFImages__preview-images'>
                      {
                        colorFieldset.imageUrls.map((colorImageUrl, i) => (
                          colorImageUrl.length > 3
                            ? <li key={index + '-' + i} className='NPFImages__preview-img'>
                              <img
                                src={colorImageUrl}
                                alt={colorFieldset.name + '-image-' + i}
                              />
                            </li>
                            : <li key={index + '-' + i} className='NPFImages__preview-img'>
                              <br/>
                            </li>
                        ))
                      }
                    </ul>
                  </div>
                  : <br />
                }
            </ FormFieldset>
          })}
      </FormPage>

      <NPFFooter 
          buttons='prevNext' 
          previousButton={() => { setPage(currentPage - 1) }} 
          nextButton={() => { nextButton() }}
      />
    </div>
  )
}

NPFImages.defaultProps = {
  colorFieldsets: [
    { 
      name: 'test name', 
      descriptionId: '1' ,
      imageUrls: ['']
    }
  ],
  currentPage: 0,
  setPage: () => {},
  setColorFieldsets: () => {}
}

export default NPFImages
import React from 'react'
import '@fortawesome/react-fontawesome'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter';

const NPFImages = props => {
    const addAnImage = (index) => {
        const fieldsetToUpdate = props.colorFieldsets[index]
        fieldsetToUpdate.imageUrls.push('')
        props.setColorFieldsets([ ...props.colorFieldsets ])    
    }

    const changeSwatchInput = (event, index) => {
        const values = [...props.colorFieldsets]
       
        values[index][event.target.name] = event.target.value

        props.setColorFieldsets(values)
    }

    const changeImageInput = (index, i, event) => {
        const values = [...props.colorFieldsets]
    
        values[index][event.target.name][i] = event.target.value
    }

    const nextButton = () => {
        const missingSwatches = []
        const missingUrls = []

        props.colorFieldsets.forEach(fieldset => {
            if (fieldset.swatchUrl === '') {
                missingSwatches.push(fieldset.name)
            }

            fieldset.imageUrls.forEach(field => {
                if (field === '') {
                    missingUrls.push(
                        field.name
                    )
                }
            })
        })
        
        if (missingSwatches.length === 1) {
            alert(`Please complete the '${missingSwatches[0]}' swatch url field`)
        } else if (missingSwatches.length > 1) {
            alert(`Please complete the following fields: ${missingSwatches.map(field => `
                '${field}' swatch url`)}
            `)
        } else if (missingSwatches.length === 0) {
            if (missingUrls.length >= 1) {
                alert(`Please enter at least one image url for each color and remove any empty fields`)
            } else {
                props.setPage(props.currentPage + 1)
            }
        }
    }

    // const nextButton = () => {props.setPage(props.currentPage + 1)}

    return (
        <div>
            <FormPage title='Images'>
                <FormPromptWithSub 
                    prompt='Enter the color swatch URL and image URL(s) for each color'
                    promptSubtitle=''
                />
                {props.colorFieldsets.map((colorFieldset, index) => {
                    return <FormFieldset key={index} className='NPFImages__fieldset'>
                        <FormPromptWithSub prompt={colorFieldset.name} promptSubtitle='' />
                        <FormUrlInput 
                            id={'color-swatch-url-' + index}
                            name='swatchUrl'
                            prompt='Color swatch URL'
                            currentValue={colorFieldset.swatchUrl}
                            handleChange={(event) => {
                                changeSwatchInput(event, index)
                            }}
                        />
                        
                        {colorFieldset.imageUrls.map((colorImageUrl, i) => (
                            <FormUrlInput
                                key={i}
                                id={'color-image-urls-' + i}
                                name='imageUrls'
                                prompt='Image URL for this color'
                                currentValue={colorImageUrl}
                                handleChange={event => {
                                    changeImageInput(index, i, event)
                                }}
                            />
                        ))}
                        
                        <FormButton
                            buttonText='ADD AN IMAGE FOR THIS COLOR'
                            handleClick={() => addAnImage(index)}
                        />
                   </ FormFieldset>
                })}
            </FormPage>

            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => { props.setPage(props.currentPage - 1) }} 
                nextButton={() => { nextButton() }}
            />
        </div>
    )
}

NPFImages.defaultProps = {
    colorFieldsets: [
        { 
            name: '', 
            descriptionId: '1' ,
            swatchUrl: '',
            imageUrls: ['']
        }
    ],
    currentPage: 0,
    setPage: () => {},
    setColorFieldsets: () => {}
}

export default NPFImages
import React from 'react'
import '@fortawesome/react-fontawesome'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter';
import formData from '../FORM_DATA'

const NPFImages = props => {
    const addAnImage = (index) => {
        const fieldsetToUpdate = props.colorFieldsets[index]
        fieldsetToUpdate.colorImageUrls.push('')
        props.setColorFieldsets([ ...props.colorFieldsets ])    
    }

    const changeSwatchInput = (index, event) => {
        const values = [...props.colorFieldsets]
        values[index][event.target.name] = event.target.value
        props.setColorFieldsets(values)
    }

    const changeImageInput = (index, i, e) => {
        const values = [...props.colorFieldsets]
        values[index][e.target.name][i] = e.target.value
    }

    return (
        <div>
            <FormPage title={formData.images.pageTitle}>
                <FormPromptWithSub prompt={formData.images.pagePrompts.prompt} promptSubtitle={formData.images.pagePrompts.promptSubtitle} />
                {props.colorFieldsets.map((colorFieldset, index) => (
                    <FormFieldset key={index} className='NPFImages__fieldset'>
                        <FormPromptWithSub prompt={colorFieldset.colorName} promptSubtitle='' />
                        <FormUrlInput 
                            id={'color-swatch-url-fieldset' + index}
                            name='colorSwatchUrlFieldset'
                            prompt={formData.images.colorSwatchUrlFieldset.prompt}
                            name={formData.images.colorSwatchUrlFieldset.name}
                            currentValue={colorFieldset.colorSwatchUrl}
                            handleChange={event => {
                                changeSwatchInput(index, event)
                            }}
                        />
                        {colorFieldset.colorImageUrls.map((colorImageUrl, i) => (
                            <FormUrlInput
                                key={i}
                                id={'color-image-urls-' + i}
                                name='colorImageUrls'
                                prompt={formData.images.imageUrl.prompt}
                                currentValue={colorImageUrl}
                                handleChange={e => {
                                    changeImageInput(index, i, e)
                                }}
                            />
                        ))}
                        
                        <FormButton
                            buttonText='ADD AN IMAGE FOR THIS COLOR'
                            handleClick={() => addAnImage(index)}
                        />
                   </ FormFieldset>
                ))}
            </FormPage>

            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => props.setPage(props.currentPage - 1)} 
                nextButton={() => {props.setPage(props.currentPage + 1)}}
            />
        </div>
    )
}

NPFImages.defaultProps = {
    colorFieldsets: [
        { 
            colorName: '', 
            colorDescription: '1' ,
            colorSwatchUrl: '',
            colorImageUrls: ['']
        }
    ],
    currentPage: 0,
    setPage: () => {},
    setColorFieldsets: () => {}
}

export default NPFImages
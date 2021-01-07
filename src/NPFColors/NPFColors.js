import React from 'react'
import '@fortawesome/react-fontawesome'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter';
import FormTextInput from '../FormTextInput/FormTextInput'
import formData from '../FORM_DATA'

const NPFColors = props => {
    const colorsChangeInput = (index, event) => {
        const values = [...props.colorFieldsets]
        values[index][event.target.name] = event.target.value
        props.setColorFieldsets(values)
    }

    const addAColor = () => {
        props.setColorFieldsets(
            [
                ...props.colorFieldsets, 
                { 
                    colorName: '', 
                    colorDescription: '', 
                    colorSwatchUrl: '',
                    colorImageUrls: ['']
                }
            ]
        )
    }

    const removeColor = (index) => {
        const values = [...props.colorFieldsets]
        values.splice(index, 1)
        props.setColorFieldsets(values)
    }

    return (
        <div id='colors'>
            <FormPage title={formData.colors.pageTitle}>
                <div id='color-inputs'>
                    <FormPromptWithSub 
                        prompt={formData.colors.pagePrompts[1].prompt} 
                        promptSubtitle={formData.colors.pagePrompts[1].promptSubtitle} 
                    />
                    {props.colorFieldsets.map((colorFieldset, index) => (
                        <fieldset key={index} className='NewProductForm__fieldset'>
                            <button 
                                className='NewProductForm__remove' 
                                type='button' 
                                onClick={() => removeColor(index)}
                            >
                                REMOVE
                            </button>
                            <FormTextInput 
                                id={'color-name' + index}
                                name='colorName'
                                prompt={formData.colors.colorName.prompt} 
                                currentValue={colorFieldset.colorName} 
                                handleChange={event => {
                                    colorsChangeInput(index, event)
                                }}
                            />
                            <FormDropdown 
                                id={'color-description' + index} 
                                name='colorDescription'
                                prompt={formData.colors.colorDescription.prompt} 
                                options={formData.colors.colorDescription.options}
                                currentValue={colorFieldset.colorDescription} 
                                handleChange={event => {
                                    colorsChangeInput(index, event)
                                }}
                            />
                        </fieldset>
                    ))}
                </div>
    
                <FormButton 
                    buttonText='ADD A COLOR' 
                    handleClick={() => addAColor() } 
                />                
    
            </FormPage>
            <NPFFooter
                buttons='prevNext'
                previousButton={() => props.setPage(props.currentPage - 1)} 
                nextButton={() => {
                    props.setPage(props.currentPage + 1)
                }}
            />
        </div>
    )
}

NPFColors.defaultProps = {
    currentPage: 0,
    colorFieldsets: [],
    setColorFieldsets: () => {},
    setPage: () => {},
}

export default NPFColors
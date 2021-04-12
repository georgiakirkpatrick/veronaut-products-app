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
    const makeColorOptions = () => {
        const defaultOption = {
            id: 0,
            text: 'Select a color',
            value: 0
        }
        
        const colors = formData.colors.description.options.map(color => (
            {
                id: color.id,
                text: color.text,
                value: color.id
            }
        ))

        return [
            defaultOption,
            ...colors
        ]
    }    

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
                    name: '', 
                    descriptionId: 0, 
                    swatchUrl: '',
                    imageUrls: ['']
                }
            ]
        )
    }

    const removeColor = (index) => {
        const values = [...props.colorFieldsets]
        values.splice(index, 1)
        props.setColorFieldsets(values)
    }

    // const nextButton = () => {
    //     const missingFields = []

    //     props.colorFieldsets.forEach(fieldset => {
    //         if (fieldset.name === '') {
    //             missingFields.push(fieldset.name)
    //         } else if (fieldset.descriptionId === 0) {
    //             missingFields.push(fieldset.name)
    //         }
    //     })

    //     if (missingFields.length === 1) {
    //         alert(`Please enter a name and description for each color option.  Remove any unneeded color fields by clicking 'remove'.`)
    //     } else if (missingFields.length > 1) {
    //         alert(`Please complete the following fields: ${missingFields.map(field => `
    //             '${field}' swatch url`)}
    //         `)
    //     } else if (missingFields.length === 0) {
    //         props.setPage(props.currentPage + 1)
    //     }
    // }
    
    const nextButton = () => {props.setPage(props.currentPage + 1)}
    
    return (
        <div id='colors'>
            <FormPage title='Colors'>
                <div id='color-inputs'>
                    <FormPromptWithSub 
                        prompt='Enter all color options listed on the product webpage'
                        promptSubtitle=''
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
                                name='name'
                                prompt='Color name'
                                currentValue={colorFieldset.name} 
                                handleChange={event => {
                                    colorsChangeInput(index, event)
                                }}
                            />
                            <FormDropdown 
                                id={'color-description' + index} 
                                name='descriptionId'
                                prompt='Color description'
                                options={makeColorOptions()}
                                currentValue={colorFieldset.descriptionId} 
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
                    nextButton()
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
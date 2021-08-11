import React from 'react'
import '@fortawesome/react-fontawesome'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter';
import FormTextInput from '../FormTextInput/FormTextInput'
import formData from '../FORM_DATA'

const NPFColors = props => {

    const {
        colorFieldsets,
        currentPage,
        setColorFieldsets,
        setPage,
    } = props

    const addColor = () => {
        setColorFieldsets(
            [
                ...colorFieldsets, 
                {
                    name: '', 
                    descriptionId: 0, 
                    swatchUrl: '',
                    imageUrls: ['']
                }
            ]
        )
    }

    const colorsChangeInput = (index, event) => {
        const values = [...colorFieldsets]
        console.log('values', values)
        values[index][event.target.name] = event.target.value
        console.log('values[index][event.target.name]', values[index][event.target.name])

        setColorFieldsets(values)
        console.log('values', values)

    }

    const makeColorOptions = () => {
        const defaultOption = {
            id: 0,
            text: 'Select a color',
            value: 0
        }
        
        const colors = formData.colors.map(color => (
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

    const nextButton = () => {
        const missingFields = []

        const requiredFields = [
            'descriptionId'
        ]

        colorFieldsets.length > 1 && requiredFields.push('name')

        colorFieldsets.forEach(fieldset => {
            requiredFields.forEach(field => {
                if (fieldset[field] === 0 || fieldset[field] === '') {
                    missingFields.push(field)
                }
            })
        })

        if (missingFields.length >= 1) {
            alert(`Please enter a description for each color option.  Remove any unneeded color fields by clicking 'remove'.`)
        } else if (missingFields.length === 0) {
            setPage(currentPage + 1)
        }
    }
    
    // const nextButton = () => {setPage(currentPage + 1)}
    
    const removeColor = (index) => {
        const values = [...colorFieldsets]
        values.splice(index, 1)
        setColorFieldsets(values)
    }

    return (
        <div id='colors'>
            <FormPage title='Colors'>
                <div id='color-inputs'>
                    <FormPromptWithSub 
                        prompt='Enter all color options listed on the product webpage'
                        promptSubtitle='If the product has multiple colors, what is the dominant color?'
                    />
                    {colorFieldsets.map((colorFieldset, index) => (
                        <FormFieldset key={index} className='NewProductForm__fieldset'>
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
                                // 'If the product has multiple colors, what is the dominant color?'
                                options={makeColorOptions()}
                                currentValue={colorFieldset.descriptionId} 
                                handleChange={event => {
                                    colorsChangeInput(index, event)
                                }}
                            />
                        </ FormFieldset>
                    ))}
                </div>
    
                <FormButton 
                    buttonText='ADD A COLOR' 
                    handleClick={() => addColor() } 
                />                
            </FormPage>
            <NPFFooter
                buttons='prevNext'
                previousButton={() => setPage(currentPage - 1)} 
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
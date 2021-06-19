import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'
import formData from '../FORM_DATA'

const noneOption = [
    {
        text: 'None of these',
        id: 101,
        checked: false
    }
]

const NPFPermittedCats = props => {
    const nextButton = () => {
        const permCats = []

        Object.keys(props.pCategories).forEach(key => {
            if (props.pCategories[key]) {
                permCats.push(key)
            }
        })

        if (permCats.length === 0 && !props.none[101]) {
            alert('Please select an option.')
        } else {
            props.setPage(props.currentPage + props.pageTurns)
        }
    }

    return (
        <div>
            <FormPage title='Categories'>
                <FormPromptWithSub
                    prompt='Does the product fall into one of the following categories?'
                    promptSubtitle="Check all that apply and click 'next'."
                />

                <FormCheckboxSection 
                    options={formData.permittedCategories}
                    selectedOptions={props.pCategories}
                    handleChange={event => props.pCatChange(event)}
                />

                <FormCheckboxSection 
                    options={noneOption}
                    selectedOptions={props.none}
                    handleChange={event => props.noneChange(event)}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => props.setPage(props.currentPage - 1)} 
                nextButton={() => nextButton()} 
            />
        </div>
    )
}

NPFPermittedCats.defaultProps = {
    buttons: 'prev',
    handleChange: () => {},
    nextButton: () => {},
    previousButton: () => {},
    selectedOptions: []
}

export default NPFPermittedCats
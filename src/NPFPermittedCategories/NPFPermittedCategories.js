import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'

const pCategoryOptions = [
    {
        text: 'Coats and jackets',
        id: 'coats-and-jackets',
        checked: false
    },
    {
        text: 'Shoes',
        id: 'shoes',
        checked: false
    },
    {
        text: 'Swimwear',
        id: 'swimwear',
        checked: false
    },
    {
        text: 'None of these',
        id: 'none',
        checked: false
    }
]

const NPFPermittedCats = props => (
    <div>
        <FormPage title='Categories'>
            <FormPromptWithSub
                prompt='Does the product fall into one of the following categories?'
                promptSubtitle="Check all that apply and click 'next'."
            />

            <FormCheckboxSection 
                options={pCategoryOptions}
                selectedOptions={props.selectedOptions}
                handleChange={event => props.handleChange(event)}
            />
        </FormPage>
        <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
    </div>
)

export default NPFPermittedCats
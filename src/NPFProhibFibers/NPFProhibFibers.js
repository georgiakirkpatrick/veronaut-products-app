import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'

const prohibitedFibers = [
    {
        text: 'Acetate',
        id: 'acetate',
        checked: false
    },
    {
        text: 'Acrylic',
        id: 'acrylic',
        checked: false
    },
    {
        text: 'Microfiber',
        id: 'microfiber',
        checked: false
    },
    {
        text: 'Neoprene',
        id: 'neoprene',
        checked: false
    },
    {
        text: 'Nylon',
        id: 'nylon',
        checked: false
    },
    {
        text: 'Olefin',
        id: 'olefin',
        checked: false
    },
    {
        text: 'Polyamide',
        id: 'polyamide',
        checked: false
    },
    {
        text: 'Polyester',
        id: 'polyester',
        checked: false
    },
    {
        text: 'Polyurethane',
        id: 'polyurethane',
        checked: false
    },
    {
        text: 'Vinyl',
        id: 'vinyl',
        checked: false
    },
    {
        text: 'None of these',
        id: 'none',
        checked: false
    }
]

const NPFProhibFibers = props => {

    return (
        <div>
            <FormPage title='Fibers'>
                <FormPromptWithSub
                    prompt='Does the product contain any of following materials?'
                    promptSubtitle="Check all that apply and click 'next'."
                />

                <FormCheckboxSection 
                    options={prohibitedFibers}
                    selectedOptions={props.selectedOptions}
                    handleChange={props.handleChange}
                />
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
        </div>
    )
}

NPFProhibFibers.defaultProps = {
    selectedOptions: [],
    handleChange: () => {},
    setPage: () => {},
    currentPage: 1
}

export default NPFProhibFibers
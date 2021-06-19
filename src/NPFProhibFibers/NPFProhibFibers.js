import React from 'react'
import formData from '../FORM_DATA'
import FormPage from '../FormPage/FormPage'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'

const noneOption = [
    {
        text: 'None of these',
        id: 100,
        checked: false
    }
]

const NPFProhibFibers = props => {
    const nextButton = () => {
        const prohibFibs = []

        Object.keys(props.pFiberChecks).forEach(key => {
            if (props.pFiberChecks[key]) {
                prohibFibs.push(key)
            }
        })

        if (prohibFibs.length === 0 && !props.none[100]) {
            alert('Please select an option.')
        } else {
            props.setPage(props.currentPage + props.pageTurns)
        }
    }

    return (
        <div>
            <FormPage title='Fibers'>
                <FormPromptWithSub
                    prompt='Does the product contain any of following materials?'
                    promptSubtitle="Check all that apply and click 'next'."
                />

                <FormCheckboxSection 
                    options={formData.prohibitedFibers}
                    selectedOptions={props.pFiberChecks}
                    handleChange={props.pFiberChange}
                />

                <FormCheckboxSection  
                    options={noneOption}
                    selectedOptions={props.none}
                    handleChange={props.noneChange}
                />
            </FormPage>

            <NPFFooter
                buttons='prevNext'
                previousButton={() => props.setPage(props.currentPage - props.pageTurns)} 
                nextButton={() => nextButton()}
            />
        </div>
    )
}

NPFProhibFibers.defaultProps = {
    currentPage: 1,
    handleChange: () => {},
    none: {},
    noneChange: () => {},
    pageTurns: 1,
    pFiberChange: () => {},
    pFiberChecks: {},
    selectedOptions: [],
    setPage: () => {},
    setPFiberChecks: () => {}
}

export default NPFProhibFibers
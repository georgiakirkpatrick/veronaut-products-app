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
    const {
        currentPage,
        setPage,
        none,
        noneChange,
        pFiberChecks,
        pFiberChange,
        pageTurns
    } = props

    const nextButton = () => {
        const prohibFibs = []

        Object.keys(pFiberChecks).forEach(key => {
            if (pFiberChecks[key]) {
                prohibFibs.push(key)
            }
        })

        if (prohibFibs.length === 0 && !none[100]) {
            alert('Please select an option.')
        } else {
            setPage(currentPage + pageTurns)
        }
    }

    return (
        <div>
            <FormPage title='Fibers'>
                <FormPromptWithSub
                    prompt="Does the product's fabrics(s) comprise of 10% or more of any of following materials?  Exclude notions such as buttons, zippers, or embroidery thread."
                    promptSubtitle="Check all that apply and click 'next'."
                />

                <FormCheckboxSection 
                    options={formData.prohibitedFibers}
                    selectedOptions={pFiberChecks}
                    handleChange={pFiberChange}
                />

                <FormCheckboxSection  
                    options={noneOption}
                    selectedOptions={none}
                    handleChange={noneChange}
                />
            </FormPage>

            <NPFFooter
                buttons='prevNext'
                previousButton={() => setPage(currentPage - pageTurns)} 
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
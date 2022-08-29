import React from 'react'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPage from '../FormPage/FormPage'
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

const NPFPermittedCategories = props => {
    const {
        currentPage,
        none,
        noneChange,
        pageTurns,
        pCatChange,
        pCategories,
        setPage,
    } = props

    const nextButton = () => {
        const permCats = []

        Object.keys(pCategories).forEach(key => {
            if (pCategories[key]) {
                permCats.push(key)
            }
        })

        if (permCats.length === 0 && !none[101]) {
            alert('Please select an option.')
        } else {
            setPage(currentPage + pageTurns)
        }
    }

    return (
        <div className='NPFPermittedCategories'>
            <FormPage title='Categories'>
                <FormPromptWithSub
                    prompt='Does the product fall into one of the following categories?'
                    promptSubtitle="Check any that apply or 'none of these' and then 'next'."
                />

                <FormCheckboxSection 
                    options={formData.permittedCategories}
                    selectedOptions={pCategories}
                    handleChange={event => pCatChange(event)}
                />

                <FormCheckboxSection 
                    options={noneOption}
                    selectedOptions={none}
                    handleChange={event => noneChange(event)}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => setPage(currentPage - 1)} 
                nextButton={() => nextButton()} 
            />
        </div>
    )
}

NPFPermittedCategories.defaultProps = {
    currentPage: 1,
    none: {},
    noneChange: () => {},
    pageTurns: () => {},
    pCatChange: () => {},
    pCategories: {},
    setPage: () => {}
}

export default NPFPermittedCategories
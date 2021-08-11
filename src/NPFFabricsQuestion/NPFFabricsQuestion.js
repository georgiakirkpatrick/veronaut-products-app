import React from 'react'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPage from '../FormPage/FormPage'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'

const NPFFabricsQuestion = props => {
    const {
        currentPage,
        linCheck,
        primCheck,
        setBackPageTurns,
        secCheck,
        setLinBackPageTurns,
        setLinCheck,
        setPage,
        setPrimCheck,
        setPrimPageTurns,
        setSecCheck,
        setSecPageTurns
    } = props

    const linCheckOption = [
        {
            text: 'Yes',
            id: 'lining-fabric',
            name: 'lining-fabric',
            checked: linCheck
        }
    ]

    const nextButton = () => {
        if (secCheck && linCheck) {
            setPrimPageTurns(1)
            setSecPageTurns(1)
            setBackPageTurns(1)
        } else if (secCheck && !linCheck) {
            setPrimPageTurns(1)
            setSecPageTurns(2)
            setBackPageTurns(2)
        } else if (!secCheck && linCheck) {
            setLinBackPageTurns(2)
            setPrimPageTurns(2)
            setSecPageTurns(1)
            setBackPageTurns(1)
        } else if (!secCheck && !linCheck) {
            setPrimPageTurns(3)
            setBackPageTurns(3)
        }
        
        setPage(currentPage + 1)
    }

    const primCheckOption = [
        {
            text: 'Yes',
            id: 'primary-fabric',
            name: 'primary-fabric',
            checked: primCheck
        }
    ]
    
    const secCheckOption = [
        {
            text: 'Yes',
            id: 'secondary-fabric',
            name: 'secondary-fabric',
            checked: secCheck
        }
    ]


    return (
        <div id='fabric-question'>
            <FormPage title='Fabrics'>
                <FormPromptWithSub 
                    prompt='The primary fabric (or material) is the main fabric used in the garment or accessory.'
                />

                <FormCheckboxSection 
                    prompt='The primary fabric (or material) is required.'
                    options={primCheckOption}
                    selectedOptions={{'primary-fabric': primCheck}}
                    handleChange={() => setPrimCheck(primCheck)}
                />

                <FormPromptWithSub 
                    prompt='Garments and accessories sometimes include secondary fabrics as trims or accents.'
                />

                <FormCheckboxSection 
                    prompt='Does this product include a secondary fabric?'
                    options={secCheckOption}
                    selectedOptions={{'secondary-fabric': secCheck}}
                    handleChange={() => setSecCheck(!secCheck)}
                />

                <FormPromptWithSub 
                    prompt='Garments and accessories sometimes include lining fabrics - an inner layer of fabric on the interior of the product.'
                />

                <FormCheckboxSection 
                    prompt='Does this product include a lining fabric?'
                    options={linCheckOption}
                    selectedOptions={{'lining-fabric': linCheck}}
                    handleChange={() => setLinCheck(!linCheck)}
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

NPFFabricsQuestion.defaultProps = {
    currentPage: 0,
    linCheck: false,
    primCheck: false,
    secCheck: false,
    setLinCheck: () => {},
    setPage: () => {},
    setPrimCheck: () => {},
    setPrimPageTurns: () => {},
    setSecCheck: () => {},
    setSecPageTurns: () => {}
}

export default NPFFabricsQuestion
import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'
import './NPFSizes.css'
import sizeData from '../SIZES'

const NPFSizes = props => {
    const maternityOptions = [
        ...sizeData.women.alpha.maternity.map(size => (
            {
                id: size.id,
                name: 'm' + size.text,
                text: size.text
            }
        )),
        ...Object.values(sizeData.women.dress.maternity).map((size, index) => (
            {
                id: size[props.sizeSystem].id,
                name: Object.keys(sizeData.women.dress.maternity)[index],
                text: size[props.sizeSystem].text
            }
        ))
    ]

    const nextButton = () => {
        props.setPage(props.currentPage + 1)
    }

    const petiteOptions = [
        ...sizeData.women.alpha.petite.map(size => (
            {
                id: size.id,
                name: 'p' + size.text,
                text: size.text
            }
        )),
        ...Object.values(sizeData.women.dress.petite).map((size, index) => (
            {
                id: size[props.sizeSystem].id,
                name: Object.keys(sizeData.women.dress.petite)[index],
                text: size[props.sizeSystem].text
            }
        ))
    ]

    const sizeChange = event => {
        props.setSelectedSizeOptions(
            {
                ...props.selectedSizeOptions,
                [event.target.id]: !props.selectedSizeOptions[event.target.id]
            }
        )
    }

    const standardOptions = [
        ...sizeData.women.alpha.standard.map(size => (
            {
                id: size.id,
                name: 's' + size.text,
                text: size.text
            }
        )),
        ...Object.values(sizeData.women.dress.standard).map((size, index) => (
            {
                id: size[props.sizeSystem].id,
                name: Object.keys(sizeData.women.dress.standard)[index],
                text: size[props.sizeSystem].text
            }
        ))
    ]

    const systemName = sizeData.systems[props.sizeSystem].text

    const tallOptions = [
        ...sizeData.women.alpha.tall.map(size => (
            {
                id: size.id,
                name: 't' + size.text,
                text: size.text
            }
        )),
        ...Object.values(sizeData.women.dress.tall).map((size, index) => (
            {
                id: size[props.sizeSystem].id,
                name: Object.keys(sizeData.women.dress.tall)[index],
                text: size[props.sizeSystem].text
            }
        ))
    ]

    return (
        <div className='NPFSizes'>
            <FormPage title='Sizes'>
                <FormPromptWithSub 
                    prompt='Select all size options available on this product page'
                    promptSubtitle='Include sold out sizes'
                />

                <FormCheckboxSection 
                    prompt={`Standard ${systemName} sizing`}
                    options={standardOptions}
                    selectedOptions={props.selectedSizeOptions}
                    handleChange={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={`Petite ${systemName} sizing`} 
                    options={petiteOptions}
                    selectedOptions={props.selectedSizeOptions}
                    handleChange={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={`Tall ${systemName} sizing`} 
                    options={tallOptions}
                    selectedOptions={props.selectedSizeOptions}
                    handleChange={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={`Maternity ${systemName} sizing`} 
                    options={maternityOptions}
                    selectedOptions={props.selectedSizeOptions}
                    handleChange={event => sizeChange(event)}
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

NPFSizes.defaultProps = {
    currentPage: 0,
    selectedSizeOptions: [],
    setPage: () => {},
    setSelectedSizeOptions: () => {},
    sizes: [],
    sizeSystem: 1
}    

export default NPFSizes
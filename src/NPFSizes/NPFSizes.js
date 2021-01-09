import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'
import sizeData from '../SIZES'

const NPFSizes = props => {
    const sizeChange = event => {
        props.setSelectedSizeOptions({...props.selectedSizeOptions, [event.target.id]: !props.selectedSizeOptions[event.target.id]})
    }

    return (
        <div>
            <FormPage title='Sizes'>
                <FormPromptWithSub 
                    prompt='Select all size options available on this product page'kk
                    promptSubtitle='Include sold out sizes'
                />

                <FormCheckboxSection 
                    prompt='Standard US sizing'
                    options={sizeData.women.dressSizes.standard.map(size => (
                        {
                            id: size.US.id,
                            text: `${size.US.text}, ${size.alpha}`
                        }
                    ))}
                    selectedOptions={props.selectedSizeOptions}
                    handleChange={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={'Petite US sizing'} 
                    options={sizeData.women.dressSizes.petite.map(size => (
                        {
                            id: size.US.id,
                            text: `${size.US.text}, ${size.alpha}`
                        }
                    ))}
                    selectedOptions={props.selectedSizeOptions}
                    handleChange={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={'Tall US sizing'} 
                    options={sizeData.women.dressSizes.tall.map(size => (
                        {
                            id: size.US.id,
                            text: `${size.US.text}, ${size.alpha}`
                        }
                    ))}
                    selectedOptions={props.selectedSizeOptions}
                    handleChange={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={'Maternity US sizing'} 
                    options={sizeData.women.dressSizes.maternity.map(size => (
                        {
                            id: size.US.id,
                            text: `${size.US.text}, ${size.alpha}`
                        }
                    ))}
                    selectedOptions={props.selectedSizeOptions}
                    handleChange={event => sizeChange(event)}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => props.setPage(props.currentPage - 1)} 
                nextButton={() => props.setPage(props.currentPage + 1)} 
            />
        </div>
    )
}

NPFSizes.defaultProps = {
    currentPage: 0,
    selectedSizeOptions: [],
    setPage: () => {},
    sizeChange: () => {},
    sizes: []
}

export default NPFSizes
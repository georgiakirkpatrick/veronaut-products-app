import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'

const NPFSizes = props => {
    return (
        <div>
            <FormPage title='Sizes'>
                <FormPromptWithSub 
                    prompt='Select all size options available on this product page'
                    promptSubtitle='Include sold out sizes'
                />

                <FormCheckboxSection 
                    prompt='Standard US sizing'
                    options={props.sizes.standard.map(size => (
                        {
                            id: size.US.id,
                            text: `${size.US.text}, ${size.alpha}`
                        }
                    ))}
                    selectedOptions={props.selectedOptions}
                    handleChange={event => props.sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={'Petite US sizing'} 
                    options={props.sizes.petite.map(size => (
                        {
                            id: size.US.id,
                            text: `${size.US.text}, ${size.alpha}`
                        }
                    ))}
                    selectedOptions={props.selectedOptions}
                    handleChange={event => props.sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={'Tall US sizing'} 
                    options={props.sizes.tall.map(size => (
                        {
                            id: size.US.id,
                            text: `${size.US.text}, ${size.alpha}`
                        }
                    ))}
                    selectedOptions={props.selectedOptions}
                    handleChange={event => props.sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={'Maternity US sizing'} 
                    options={props.sizes.maternity.map(size => (
                        {
                            id: size.US.id,
                            text: `${size.US.text}, ${size.alpha}`
                        }
                    ))}
                    selectedOptions={props.selectedOptions}
                    handleChange={event => props.sizeChange(event)}
                />
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
        </div>
    )
}

export default NPFSizes
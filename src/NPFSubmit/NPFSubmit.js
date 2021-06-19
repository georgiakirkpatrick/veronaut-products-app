import React from 'react'
import FormButton from '../FormButton/FormButton'
import FormPage from '../FormPage/FormPage'
import NPFFooter from '../NPFFooter/NPFFooter'

const NPFSubmit = props => {
    const submitButton = () => {
        props.submitProduct()
        props.setPage(props.currentPage + 1)
    }

    return (
        <div>
            <FormPage title='Ready to submit?'>
                <FormButton 
                    buttonText='SUBMIT PRODUCT' 
                    handleClick={() => submitButton()}
                />
            </FormPage>

            <NPFFooter 
                buttons='prev' 
                previousButton={() => props.setPage(props.currentPage - 1)}
            />
        </div>
    )
}

NPFSubmit.defaultProps = {
    currentPage: 0,
    setPage: () => {},
    submitProduct: () => {}
}

export default NPFSubmit
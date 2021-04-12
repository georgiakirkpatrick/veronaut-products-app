import React from 'react'
import FormButton from '../FormButton/FormButton'
import FormPage from '../FormPage/FormPage'

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
        </div>
    )
}

NPFSubmit.defaultProps = {
    currentPage: 0,
    setPage: () => {},
    selectedSizeOptions: {},
    submitProduct: () => {}
}

export default NPFSubmit
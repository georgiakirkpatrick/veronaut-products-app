import React from 'react'
import FormButton from '../FormButton/FormButton'
import FormPage from '../FormPage/FormPage'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'

const NPFSubmit = ({
  currentPage = 0,
  setPage = () => {},
  submitProduct = () => {}
}) => {
  const submitButton = () => {
    submitProduct()
    setPage(currentPage + 1)
  }

  return (
    <div className='NPFSubmit'>
      <FormPage title='Ready to submit?'>
        <FormPromptWithSub 
          prompt="To make changes, click the 'Previous' button"
        />

        <FormButton 
          buttonText='Submit product' 
          handleClick={() => submitButton()}
        />
      </FormPage>

      <NPFFooter 
        buttons='prev' 
        previousButton={() => setPage(currentPage - 1)}
      />
    </div>
  )
}

export default NPFSubmit
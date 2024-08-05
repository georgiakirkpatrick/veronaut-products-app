import React from 'react'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPage from '../FormPage/FormPage'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'
import './NPFFabricsQuestion.css'

const NPFFabricsQuestion = ({
  currentPage = 0,
  linCheck = false,
  primCheck = false,
  secCheck = false,
  setLinCheck = () => {},
  setPage = () => {},
  setPrimCheck = () => {},
  setPrimPageTurns = () => {},
  setSecCheck = () => {},
  setSecPageTurns = () => {}
}) => {
  const linCheckOption = [
    {
      text: 'Yes, the product has a lining fabric or material',
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
      text: 'The product has a primary fabric or material',
      id: 'primary-fabric',
      name: 'primary-fabric',
      checked: primCheck
    }
  ]
  
  const secCheckOption = [
    {
      text: 'Yes, the product has a secondary fabric or material',
      id: 'secondary-fabric',
      name: 'secondary-fabric',
      checked: secCheck
    }
  ]

  return (
    <div id='fabric-question' className='NPFFabricsQuestion'>
      <FormPage title='Fabrics'>
        <FormPromptWithSub 
          prompt="Select the product's material types below"
        />

        <FormFieldset>
          {/* <FormPromptWithSub 
              prompt='The primary fabric or material is the main fabric used in the garment or accessory.'
              promptSubtitle='The primary fabric is required.'
          /> */}

          <FormCheckboxSection 
            prompt='The primary fabric or material is the main fabric used in the garment or accessory.  The primary fabric is required.'
            options={primCheckOption}
            selectedOptions={{'primary-fabric': primCheck}}
            handleChange={() => setPrimCheck(primCheck)}
          />

          {/* <FormPromptWithSub 
              promptSubtitle=''
          /> */}

          <FormCheckboxSection 
            prompt='Garments and accessories sometimes include secondary fabrics as trims or accents.  Does this product include a secondary fabric?'
            options={secCheckOption}
            selectedOptions={{'secondary-fabric': secCheck}}
            handleChange={() => setSecCheck(!secCheck)}
          />

          {/* <FormPromptWithSub 
              promptSubtitle='Garments and accessories sometimes include lining fabrics - an inner layer of fabric on the interior of the product.'
          /> */}

          <FormCheckboxSection 
            prompt='Garments and accessories sometimes include lining fabrics - an inner layer of fabric on the interior of the product.  Does this product include a lining fabric?'
            options={linCheckOption}
            selectedOptions={{'lining-fabric': linCheck}}
            handleChange={() => setLinCheck(!linCheck)}
          />
        </FormFieldset>
      </FormPage>

      <NPFFooter 
        buttons='prevNext' 
        previousButton={() => setPage(currentPage - 1)} 
        nextButton={() => nextButton()} 
      />
    </div>
  )    
}

export default NPFFabricsQuestion
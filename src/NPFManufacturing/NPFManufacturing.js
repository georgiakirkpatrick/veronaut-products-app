import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import formData from '../FORM_DATA'
import FormFieldset from '../FormFieldset/FormFieldset';

const NPFManufacturing = props => {
    const sewingChangeInput = event => {
        const sewingFactory = {...props.sewFact}
        sewingFactory[event.target.name] = event.target.value
        props.setSewFact(sewingFactory)
    }

    const sewingPopUpStatus = () => {
        if (props.sewFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const handleSewingClose = () => { 
        props.setSewFactPopUp(false)
    }

    const newSewingChangeInput = event => {
        const newSewFactFields = {...props.newSewFact}
        newSewFactFields[event.target.name] = event.target.value
        props.setNewSewFact(newSewFactFields)
    }

    // CUTTING FACTORY
    const cuttingChangeInput = event => {
        const cuttingFactory = {...props.cutFact}
        cuttingFactory[event.target.name] = event.target.value
        props.setCutFact(cuttingFactory)
    }

    const cuttingPopUpStatus = () => {
        if (props.cutFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const handleCuttingClose = () => {
        props.setCutFactPopUp(false)
    }

    const newCuttingChangeInput = event => {
        const newCutFactFields = {...props.newCutFact}
        newCutFactFields[event.target.name] = event.target.value
        props.setNewCutFact(newCutFactFields)
    }

    const certPopUpStatus = () => {
        if (props.certPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const handleCertClose = () => {
        props.setCertPopUp(false)
    }

    const certificationChange = event => {
        props.setCertChecks({...props.certChecks, [event.target.id]: !props.certChecks[event.target.id]})
    }

    const newCertChangeInput = event => {
        const newCertFields = {...props.newCert}
        newCertFields[event.target.name] = event.target.value
        props.setNewCert(newCertFields)
    }

    // ADDITIONAL NOTES
    const additionalNotesChange = event => {
        const newNotes = event.target.value
        props.setAdditionalNotes(newNotes)
    }

    return (
        <div id={formData.manufacturing.id}>
            <FormPage title={formData.manufacturing.pageTitle}>
                <FormPromptWithSub 
                    prompt={formData.manufacturing.pagePrompts[0].prompt}
                    promptSubtitle={formData.manufacturing.pagePrompts[0].promptSubtitle}
                />
                <FormFieldset 
                    prompt={formData.manufacturing.pagePrompts[1].prompt}
                    subprompt={formData.manufacturing.pagePrompts[1].subprompt}
                >
                    <FormDropdown
                        id={formData.manufacturing.location.name}
                        name={formData.manufacturing.location.name}
                        prompt={formData.manufacturing.location.prompt}
                        currentValue={props.sewFact.location}
                        options={props.countries}
                        handleChange={event => sewingChangeInput(event)} 
                    />
                    <FormDropdown
                        id={formData.manufacturing.factory.name}
                        name={formData.manufacturing.factory.name}
                        prompt={formData.manufacturing.factory.prompt}
                        currentValue={props.sewFact.factory}
                        options={props.factories}
                        handleChange={event => sewingChangeInput(event)} 
                    />
                    <FormButton buttonText={formData.manufacturing.buttonText[0]} click={() => props.setSewFactPopUp(true)} />
                </FormFieldset>

                <FormPopUp
                    id={formData.manufacturing.addSewing.id} 
                    status={sewingPopUpStatus()}
                    title={formData.manufacturing.addSewing.pageTitle}
                    click={() => handleSewingClose()}
                    buttonText={formData.manufacturing.addSewing.submitButton}
                >
                    <FormPromptWithSub prompt={formData.manufacturing.addSewing.prompt} promptSubtitle='' />
                    <FormTextInput 
                        id={formData.manufacturing.addSewing.factoryName.id}
                        name={formData.manufacturing.addSewing.factoryName.name}
                        prompt={formData.manufacturing.addSewing.factoryName.prompt} 
                        currentValue={props.newSewFact.sewingFactoryName}
                        handleChange={event => newSewingChangeInput(event)} 
                    />
                    <FormDropdown
                        id={formData.manufacturing.addSewing.factoryLocation.id}
                        name={formData.manufacturing.addSewing.factoryLocation.id}
                        prompt={formData.manufacturing.addSewing.factoryLocation.prompt}
                        currentValue={props.newSewFact.sewingFactoryLocation}
                        options={props.countries}
                        handleChange={event => newSewingChangeInput(event)} 
                    />
                    <FormUrlInput 
                        id={formData.manufacturing.addSewing.factoryWebsite.id} 
                        name={formData.manufacturing.addSewing.factoryWebsite.id} 
                        prompt={formData.manufacturing.addSewing.factoryWebsite.prompt}
                        currentValue={props.newSewFact.sewingFactoryWebsite}
                        handleChange={event => newSewingChangeInput(event)}
                    />
                    <FormTextInput
                        id={formData.manufacturing.addSewing.factoryNotes.id}
                        prompt={formData.manufacturing.addSewing.factoryNotes.prompt}
                        currentValue={props.newSewFact.sewingFactoryNotes}
                        handleChange={event => newSewingChangeInput(event)}
                    />
                </FormPopUp>
                
                <FormFieldset 
                    prompt={formData.manufacturing.pagePrompts[2].prompt}
                    subprompt={formData.manufacturing.pagePrompts[2].subprompt}
                >
                    <FormDropdown
                        id={formData.manufacturing.location.name}
                        name={formData.manufacturing.location.name}
                        prompt={formData.manufacturing.location.prompt}
                        currentValue={props.cutFact.location}
                        options={props.countries}
                        handleChange={event => cuttingChangeInput(event)} 
                    />
                    <FormDropdown
                        id={formData.manufacturing.factory.name}
                        name={formData.manufacturing.factory.name}
                        prompt={formData.manufacturing.factory.prompt}
                        currentValue={props.cutFact.factory}
                        options={props.factories}
                        handleChange={event => cuttingChangeInput(event)} 
                    />
                    <FormButton buttonText={formData.manufacturing.buttonText[0]} click={() => props.setCutFactPopUp(true)}/>
                </FormFieldset>

                <FormPopUp
                    id={formData.manufacturing.addCutting.id} 
                    status={cuttingPopUpStatus()}
                    title={formData.manufacturing.addCutting.pageTitle}
                    click={() => handleCuttingClose()}
                    buttonText={formData.manufacturing.addCutting.submitButton}
                >
                    <FormPromptWithSub 
                        prompt={formData.manufacturing.addCutting.prompt} 
                        promptSubtitle='' 
                    />
                    <FormTextInput 
                        id={formData.manufacturing.addCutting.factoryName.id}
                        name={formData.manufacturing.addCutting.factoryName.id}
                        prompt={formData.manufacturing.addCutting.factoryName.prompt} 
                        currentValue={props.newCutFact.cuttingFactoryName}
                        handleChange={event => newCuttingChangeInput(event)}
                    />
                    <FormDropdown
                        id={formData.manufacturing.addCutting.factoryLocation.id}
                        name={formData.manufacturing.addCutting.factoryLocation.id}
                        prompt={formData.manufacturing.addCutting.factoryLocation.prompt}
                        currentValue={props.newCutFact.cuttingFactoryLocation}
                        options={props.countries}
                        handleChange={event => newCuttingChangeInput(event)}
                    />
                    <FormUrlInput
                        id={formData.manufacturing.addCutting.factoryWebsite.id}
                        name={formData.manufacturing.addCutting.factoryWebsite.id}
                        prompt={formData.manufacturing.addCutting.factoryWebsite.prompt}
                        currentValue={props.newCutFact.cuttingFactoryWebsite}
                        handleChange={event => newCuttingChangeInput(event)}
                    />
                    <FormTextInput
                        id={formData.manufacturing.addCutting.factoryNotes.id}
                        name={formData.manufacturing.addCutting.factoryNotes.id}
                        prompt={formData.manufacturing.addCutting.factoryNotes.prompt}
                        currentValue={props.newCutFact.cuttingFactoryNotes}
                        handleChange={event => newCuttingChangeInput(event)}
                    />
                </FormPopUp>

                <FormFieldset
                    prompt={formData.manufacturing.pagePrompts[3].prompt}
                    subprompt={formData.manufacturing.pagePrompts[3].subprompt}
                >
                    <FormCheckboxSection  
                        options={formData.manufacturing.certifications.options} 
                        selectedOptions={props.certChecks}
                        handleChange={event => certificationChange(event)}
                    />
                    <FormButton 
                        buttonText={formData.manufacturing.buttonText[1]} 
                        click={() => props.setCertPopUp(true)} 
                    />
                </FormFieldset>

                <FormPopUp
                    id={formData.manufacturing.certifications.id} 
                    status={certPopUpStatus()}
                    title={formData.manufacturing.newCertification.title}
                    click={() => handleCertClose()}
                    buttonText={formData.manufacturing.newCertification.submitButton}
                >
                    <FormPromptWithSub prompt='Add a certification' promptSubtitle='' />
                    <FormTextInput 
                        id='newCertName'
                        name='newCertName'
                        prompt={formData.manufacturing.newCertification.certName.prompt} 
                        currentValue={props.newCert.newCertName}
                        handleChange={event => newCertChangeInput(event)} 
                    />
                    <FormUrlInput
                        id='newCertWebsite'
                        name='newCertWebsite'
                        prompt={formData.manufacturing.newCertification.certWebsite.prompt}
                        currentValue={props.newCert.newCertWebsite}
                        handleChange={event => newCertChangeInput(event)}
                    />
                </FormPopUp>

                <FormFieldset
                    prompt={formData.manufacturing.additionalNotes.prompt}
                    subprompt={formData.manufacturing.additionalNotes.subprompt}
                >
                    <FormTextInput
                        id={formData.manufacturing.additionalNotes.id}
                        name={formData.manufacturing.additionalNotes.id}
                        currentValue={props.additionalNotes}
                        handleChange={event => additionalNotesChange(event)}
                    />
                </FormFieldset>
            </FormPage>

            <NPFFooter 
                buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} 
                nextButton={() => props.setPage(props.currentPage + 1)} 
            />
        </div>
    )  
}

NPFManufacturing.defaultProps = {
    sewFact: {
        location: '', 
        factory: ''
    },
    setSewFact: () => {},
    sewFactPopUp: false,
    setSewFactPopUp: () => {},
    newSewFact: {
        sewingFactoryName: '',
        sewingFactoryLocation: '',
        sewingFactoryWebsite: '',
        sewingFactoryNotes: ''
    },
    setNewSewFact: () => {},
    cutFact: {
        location: '', 
        factory: ''
    },
    setCutFact: () => {},
    cutFactPopUp: false,
    setCutFactPopUp: () => {},
    newCutFact: {
        cuttingFactoryName: '',
        cuttingFactoryLocation: '',
        cuttingFactoryWebsite: '',
        cuttingFactoryNotes: ''
    },
    setNewCutFact: () => {},
    certChecks: {},
    setCertChecks: () => {},
    certPopUp: false,
    setCertPopUp: () => {},
    newCert: {
        newCertName: '',
        newCertWebsite: ''
    },
    setNewCert: () => {},
    additionalNotes: '',
    setAdditionalNotes:  () => {}
}

export default NPFManufacturing
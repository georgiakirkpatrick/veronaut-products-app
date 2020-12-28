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
import './NPFManufacturing.css'
import FormFieldset from '../FormFieldset/FormFieldset';

const NPFManufacturing = props => {
    const sewingChangeInput = event => {
        const sewingFactory = {...props.manuState.sewFact}
        sewingFactory[event.target.name] = event.target.value
        props.manuState.setSewFact(sewingFactory)
    }

    const sewingPopUpStatus = () => {
        if (props.manuState.sewFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const handleSewingClose = () => { 
        props.manuState.setSewFactPopUp(false)
    }

    const newSewingChangeInput = event => {
        const newSewFactFields = {...props.manuState.newSewFact}
        newSewFactFields[event.target.name] = event.target.value
        props.manuState.setNewSewFact(newSewFactFields)
    }

    // CUTTING FACTORY
    const cuttingChangeInput = event => {
        const cuttingFactory = {...props.manuState.cutFact}
        cuttingFactory[event.target.name] = event.target.value
        props.manuState.setCutFact(cuttingFactory)
    }

    const cuttingPopUpStatus = () => {
        if (props.manuState.cutFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const handleCuttingClose = () => {
        props.manuState.setCutFactPopUp(false)
    }

    const newCuttingChangeInput = event => {
        const newCutFactFields = {...props.manuState.newCutFact}
        newCutFactFields[event.target.name] = event.target.value
        props.manuState.setNewCutFact(newCutFactFields)
    }

    const certPopUpStatus = () => {
        if (props.manuState.certPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const handleCertClose = () => {
        props.manuState.setCertPopUp(false)
    }

    const certificationChange = event => {
        props.manuState.setCertChecks({...props.manuState.certChecks, [event.target.id]: !props.manuState.certChecks[event.target.id]})
    }

    const newCertChangeInput = event => {
        const newCertFields = {...props.manuState.newCert}
        newCertFields[event.target.name] = event.target.value
        props.manuState.setNewCert(newCertFields)
    }

    // ADDITIONAL NOTES
    const additionalNotesChange = event => {
        const newNotes = event.target.value
        props.manuState.setAdditionalNotes(newNotes)
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
                        value={props.manuState.sewFact.location}
                        options={props.countries}
                        change={event => sewingChangeInput(event)} 
                    />
                    <FormDropdown
                        id={formData.manufacturing.factory.name}
                        name={formData.manufacturing.factory.name}
                        prompt={formData.manufacturing.factory.prompt}
                        value={props.manuState.sewFact.factory}
                        options={props.factories}
                        change={event => sewingChangeInput(event)} 
                    />
                    <FormButton buttonText={formData.manufacturing.buttonText[0]} click={() => props.manuState.setSewFactPopUp(true)} />
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
                        value={props.manuState.newSewFact.sewingFactoryName}
                        change={event => newSewingChangeInput(event)} 
                    />
                    <FormDropdown
                        id={formData.manufacturing.addSewing.factoryLocation.id}
                        name={formData.manufacturing.addSewing.factoryLocation.id}
                        prompt={formData.manufacturing.addSewing.factoryLocation.prompt}
                        value={props.manuState.newSewFact.sewingFactoryLocation}
                        options={props.countries}
                        change={event => newSewingChangeInput(event)} 
                    />
                    <FormUrlInput 
                        id={formData.manufacturing.addSewing.factoryWebsite.id} 
                        name={formData.manufacturing.addSewing.factoryWebsite.id} 
                        prompt={formData.manufacturing.addSewing.factoryWebsite.prompt}
                        value={props.manuState.newSewFact.sewingFactoryWebsite}
                        change={event => newSewingChangeInput(event)}
                    />
                    <FormTextInput
                        id={formData.manufacturing.addSewing.factoryNotes.id}
                        prompt={formData.manufacturing.addSewing.factoryNotes.prompt}
                        value={props.manuState.newSewFact.sewingFactoryNotes}
                        change={event => newSewingChangeInput(event)}
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
                        value={props.manuState.cutFact.location}
                        options={props.countries}
                        change={event => cuttingChangeInput(event)} 
                    />
                    <FormDropdown
                        id={formData.manufacturing.factory.name}
                        name={formData.manufacturing.factory.name}
                        prompt={formData.manufacturing.factory.prompt}
                        value={props.manuState.cutFact.factory}
                        options={props.factories}
                        change={event => cuttingChangeInput(event)} 
                    />
                    <FormButton buttonText={formData.manufacturing.buttonText[0]} click={() => props.manuState.setCutFactPopUp(true)}/>
                </FormFieldset>

                <FormPopUp
                    id={formData.manufacturing.addCutting.id} 
                    status={cuttingPopUpStatus()}
                    title={formData.manufacturing.addCutting.pageTitle}
                    click={() => handleCuttingClose()}
                    buttonText={formData.manufacturing.addCutting.submitButton}
                >
                    <FormPromptWithSub prompt={formData.manufacturing.addCutting.prompt} promptSubtitle='' />
                    <FormTextInput 
                        id={formData.manufacturing.addCutting.factoryName.id}
                        name={formData.manufacturing.addCutting.factoryName.id}
                        prompt={formData.manufacturing.addCutting.factoryName.prompt} 
                        value={props.manuState.newCutFact.cuttingFactoryName}
                        change={event => newCuttingChangeInput(event)}
                    />
                    <FormDropdown
                        id={formData.manufacturing.addCutting.factoryLocation.id}
                        name={formData.manufacturing.addCutting.factoryLocation.id}
                        prompt={formData.manufacturing.addCutting.factoryLocation.prompt}
                        value={props.manuState.newCutFact.cuttingFactoryLocation}
                        options={props.countries}
                        change={event => newCuttingChangeInput(event)}
                    />
                    <FormUrlInput
                        id={formData.manufacturing.addCutting.factoryWebsite.id}
                        name={formData.manufacturing.addCutting.factoryWebsite.id}
                        prompt={formData.manufacturing.addCutting.factoryWebsite.prompt}
                        value={props.manuState.newCutFact.cuttingFactoryWebsite}
                        change={event => newCuttingChangeInput(event)}
                    />
                    <FormTextInput
                        id={formData.manufacturing.addCutting.factoryNotes.id}
                        name={formData.manufacturing.addCutting.factoryNotes.id}
                        prompt={formData.manufacturing.addCutting.factoryNotes.prompt}
                        value={props.manuState.newCutFact.cuttingFactoryNotes}
                        change={event => newCuttingChangeInput(event)}
                    />
                </FormPopUp>

                <FormFieldset
                    prompt={formData.manufacturing.pagePrompts[3].prompt}
                    subprompt={formData.manufacturing.pagePrompts[3].subprompt}
                >
                    <FormCheckboxSection  
                        options={formData.manufacturing.certifications.options} 
                        check={props.manuState.certChecks}
                        change={event => certificationChange(event)}
                    />
                    <FormButton buttonText={formData.manufacturing.buttonText[1]} click={() => props.manuState.setCertPopUp(true)} />
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
                        value={props.manuState.newCert.newCertName}
                        change={event => newCertChangeInput(event)} 
                    />
                    <FormUrlInput
                        id='newCertWebsite'
                        name='newCertWebsite'
                        prompt={formData.manufacturing.newCertification.certWebsite.prompt}
                        value={props.manuState.newCert.newCertWebsite}
                        change={event => newCertChangeInput(event)}
                    />
                </FormPopUp>

                <FormFieldset
                    prompt={formData.manufacturing.additionalNotes.prompt}
                    subprompt={formData.manufacturing.additionalNotes.subprompt}
                >
                    <FormTextInput
                        id={formData.manufacturing.additionalNotes.id}
                        name={formData.manufacturing.additionalNotes.id}
                        value={props.manuState.additionalNotes}
                        change={event => additionalNotesChange(event)}
                    />
                </FormFieldset>
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
        </div>
    )  
}

export default NPFManufacturing;
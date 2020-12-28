import React from 'react'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPage from '../FormPage/FormPage'
import FormPopUp from '../FormPopUp/FormPopUp'
import NPFFooter from '../NPFFooter/NPFFooter'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import formData from '../FORM_DATA'
import './NPFFabrics.css'

const NPFFabrics = props => {
    const fabChange = event => {
        const fabFields = {...props.fabState.fabFact}
        fabFields[event.target.name] = event.target.value
        props.fabState.setFabFact(fabFields)
    }

    const certChange = event => {
        props.fabState.setCertChecks({...props.fabState.certChecks, [event.target.id]: !props.fabState.certChecks[event.target.id]})
    }

    const handleClose = () => {
        props.fabState.setCertPopUp(false)
        props.fabState.setFactPopUp(false)
        props.fabState.setMillPopUp(false)
    }

    const factPopUpStatus = () => {
        if (props.fabState.factPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const newFactChange                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      = event => {
        const newFields = {...props.fabState.newFact}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        newFields[event.target.name] = event.target.value
        props.fabState.setNewFact(newFields)
    }

    const factPopUp = (id, status, change) => (
        <FormPopUp
            id={id + 'NewFact'} 
            status={status}
            title='New Factory'
            click={() => handleClose()}
            buttonText='Submit Factory'
        >
            <FormPromptWithSub
                prompt='Add a factory'
                promptSubtitle=''
            />
            <FormTextInput 
                id={id + 'NewFactName'}
                name='factoryName'
                prompt='Name'
                value={props.fabState.newFact.factoryName}
                change={event => change(event)} 
            />
            <FormDropdown
                id={id + 'NewFactLocation'}
                name='factoryLocation'
                prompt='Location'
                value={props.fabState.newFact.factoryLocation}
                options={props.countries}
                change={event => change(event)} 
            />
            <FormUrlInput
                id={id + 'NewFactWebsite'}
                name='factoryWebsite'
                prompt='Website'
                value={props.fabState.newFact.factoryWebsite}
                change={event => change(event)}
            />
            <FormTextInput 
                id={id + 'NewFactNotes'}
                name='factoryNotes'
                prompt='Notes'
                value={props.fabState.newFact.factoryNotes}
                change={event => change(event)} 
            />
        </FormPopUp>
    )

    const millPopUpStatus = () => {
        if (props.fabState.millPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const newMillChange = event => {
        const newFields = {...props.fabState.newMill}
        newFields[event.target.name] = event.target.value
        props.fabState.setNewMill(newFields)
    }

    const millPopUp = (id, status, change) => (
        <FormPopUp
            id={id + 'NewMill'} 
            status={status}
            title='New Fabric Mill'
            click={() => handleClose()}
            buttonText='SUBMIT FABRIC MILL'
        >
            <FormPromptWithSub
                prompt='Add a fabric mill'
                promptSubtitle=''
            />
            <FormTextInput 
                id={id + 'NewMillName'}
                name='factoryName'
                prompt='Name'
                value={props.fabState.newFact.factoryName}
                change={event => change(event)} 
            />
            <FormDropdown
                id={id + 'NewMillLocation'}
                name='factoryLocation'
                prompt='Location'
                value={props.fabState.newFact.factoryLocation}
                options={props.countries}
                change={event => change(event)} 
            />
            <FormUrlInput
                id={id + 'NewMillWebsite'}
                name='factoryWebsite'
                prompt='Website'
                value={props.fabState.newFact.factoryWebsite}
                change={event => change(event)}
            />
            <FormTextInput 
                id={id + 'NewMillNotes'}
                name='factoryNotes'
                prompt='Notes'
                value={props.fabState.newFact.factoryNotes}
                change={event => change(event)} 
            />
        </FormPopUp>
    )

    const certPopUpStatus = () => {
        if (props.fabState.certPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const newCertChange = event => {
        const newCertFields = {...props.fabState.newCert}
        newCertFields[event.target.name] = event.target.value
        props.fabState.setNewCert(newCertFields)
    }

    const certPopUp = (id, status, change) => (
        <FormPopUp
            id={id + 'NewCert'} 
            status={status}
            title='New Certification'
            click={() => handleClose()}
            buttonText='SUBMIT CERTIFICATION'
        >
            <FormPromptWithSub
                prompt='Add a certification'
                promptSubtitle=''
            />
            <FormTextInput 
                id={id + 'NewCertName'}
                name='newCertName'
                prompt='Name'
                value={props.fabState.newCert.newCertName}
                change={event => change(event)} 
            />
            <FormUrlInput
                id={id + 'NewCertWebsite'}
                name='newCertWebsite'
                prompt='Website'
                value={id.newCertWebsite}
                change={event => change(event)}
            />
        </FormPopUp>
    )

    return (
        <div id='fabrics'>
            <FormPage title={props.title}>
                <FormPromptWithSub 
                    prompt='Please enter the fabric details provided on the product webpage.'
                    promptSubtitle='If the product page does not provide the information detailed below, please select "not disclosed" from the dropdown.'
                />
                <FormFieldset>
                    <FormDropdown 
                        id='dyeFinLocation'
                        name='dyeFinLocation'
                        prompt='Dyeing and finishing location'
                        value={props.fabState.fabFact.dyeFinLocation}
                        options={props.countries}
                        change={event => fabChange(event)} 
                    />

                    <FormDropdown 
                        id='dyeFinFactory'
                        name='dyeFinFactory'
                        prompt='Dyeing and finishing factory'
                        value={props.fabState.fabFact.dyeFinFactory}
                        options={props.factories}
                        change={event => fabChange(event)} 
                    />

                    <FormButton 
                        buttonText='ADD A FACTORY' 
                        click={() => props.fabState.setFactPopUp(true)}
                    />

                    {factPopUp(props.id, factPopUpStatus(), newFactChange)}
                
                    <FormDropdown 
                        id='wovKnitLocation'
                        name='wovKnitLocation'
                        prompt='Knitting or weaving location'
                        value={props.fabState.fabFact.wovKnitLocation}
                        options={props.countries}
                        change={event => fabChange(event)} 
                    />

                    <FormDropdown 
                        id='wovKnitFactory'
                        name='wovKnitFactory'
                        prompt='Fabric mill (knitting or weaving)'
                        value={props.fabState.fabFact.wovKnitFactory}
                        options={props.factories}
                        change={event => fabChange(event)} 
                    />

                    <FormButton 
                        buttonText='ADD A FABRIC MILL' 
                        click={() => props.fabState.setMillPopUp(true)}
                    />

                    {millPopUp(props.id, millPopUpStatus(), newMillChange)}

                    <FormPromptWithSub 
                        prompt='Does the primary fabric have any of the following certifications?'
                        promptSubtitle=''
                    />

                    <FormCheckboxSection
                        options={formData.manufacturing.certifications.options} 
                        check={props.fabState.certChecks}
                        change={event => certChange(event)}
                    />

                    <FormButton
                        buttonText='ADD A CERTIFICATION'
                        click={() => props.fabState.setCertPopUp(true)}
                    />

                    {certPopUp(props.id, certPopUpStatus(), newCertChange)}

                </FormFieldset>
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
        </div>
    )    
}

export default NPFFabrics
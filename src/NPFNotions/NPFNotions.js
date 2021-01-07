import React from 'react'
import '@fortawesome/react-fontawesome'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter';
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import formData from '../FORM_DATA'



const NPFNotions = props => {
    const notionTypePopUpStatus = () => {
        if (props.notTypePopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const notionMaterialPopUpStatus = () => {
        if (props.notMatPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const notionFactoryPopUpStatus = () => {
        if (props.notFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const notionCertificationPopUpStatus = () => {
        if (props.notCertPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const notionChangeInput = (event, index) => {
        const updatedNotions = [...props.notionFields]
        updatedNotions[index][event.target.name] = event.target.value
        props.setNotionFields(updatedNotions) 
    }

    const notionAddInput = () => {
        props.setNotionFields(
            [
                ...props.notionFields,
                { 
                    notionTypeId: '',
                    notionMaterialTypeId: '',
                    notionLocationId: '',
                    notionMaterialOriginId: '',
                    notionFactoryId: '',
                    notionNotes: '',
                    notionCertifications: Object.fromEntries(props.initialNotCertChecks)
                }
            ]
        )
    }

    const newNotFactChangeInput = event => {
        const newNotFactFields = {...props.newNotionFact}
        newNotFactFields[event.target.name] = event.target.value
        props.setNewNotionFact(newNotFactFields)
    }

    const newNotCertChangeInput = event => {
        const newCertFields = {...props.newNotCert}
        newCertFields[event.target.name] = event.target.value
        props.setNewNotCert(newCertFields)
    }

    const notionCertificationChange = (index, event, i) => {
        const updatedNotions = [...props.notionFields]
        updatedNotions[index].notionCertifications[i] = !props.notionFields[index].notionCertifications[i]
        props.setNotionFields(updatedNotions) 
    }

    return (
        <div id='notions'>
            <FormPage title={formData.notions.pageTitle}>
                <FormPromptWithSub
                    prompt={formData.notions.pagePrompts.prompt}
                    promptSubtitle={formData.notions.pagePrompts.promptSubtitle}
                />
                {props.notionFields.map((fieldset, index) => {
                    return (
                        <FormFieldset key={index}>
                            <FormDropdown
                                id={'notion-type' + index}
                                name='notionTypeId'
                                prompt='Notion type'
                                currentValue={fieldset.notionTypeId}
                                options={formData.notions.notionType.options}
                                handleChange={event => notionChangeInput(event, index)} 
                            />
            
                            <FormButton
                                buttonText='ADD A NOTION TYPE'
                                handleClick={() => props.setNotTypePopUp(true)}
                            />
            
                            <FormDropdown
                                id={'notion-location-id' + index}
                                name='notionLocationId'
                                prompt='Location of notion manufacturing'
                                currentValue={fieldset.notionLocationId}
                                options={props.countries}
                                handleChange={event => notionChangeInput(event, index)} 
                            />
            
                            <FormDropdown
                                id={'notion-factory-id' + index}
                                name='notionFactoryId'
                                prompt='Notion manufacturer'
                                currentValue={fieldset.notionFactoryId}
                                options={formData.manufacturing.factory.options}
                                handleChange={event => notionChangeInput(event, index)} 
                            />

                            <FormButton
                                buttonText='ADD A FACTORY'
                                handleClick={() => props.setNotFactPopUp(true)}
                            />

                            <FormDropdown
                                id={'notion-materialypeId' + index}
                                name='notionMaterialTypeId'
                                prompt='Notion material type'
                                currentValue={fieldset.notionMaterialTypeId}
                                options={formData.notions.notionMaterial.options}
                                handleChange={event => notionChangeInput(event, index)} 
                            />

                            <FormButton
                                buttonText='ADD A MATERIAL TYPE'
                                handleClick={() => props.setNotMatPopUp(true)}
                            />
            
                            <FormDropdown
                                id={'notion-material-origin-id' + index}
                                name='notionMaterialOriginId'
                                prompt='Origin of notion material'
                                currentValue={fieldset.notionMaterialOriginId}
                                options={props.countries}
                                handleChange={event => notionChangeInput(event, index)} 
                            />

                            <p>{formData.manufacturing.pagePrompts[3].prompt}</p>
                            <FormCheckboxSection
                                id={'notion-certifications' + index}
                                name='notionCertifications'
                                options={formData.manufacturing.certifications.options} 
                                selectedOptions={props.notionFields.certChecks}
                                handleChange={event => notionCertificationChange(index, event, event.target.id)}
                            />
                            <FormButton 
                                buttonText={formData.manufacturing.buttonText[1]} 
                                handleClick={() => props.setNotCertPopUp(true)} 
                            />
            
                            <FormTextInput 
                                id={'notionNotes' + index}
                                name='notionNotes'
                                prompt='If the brand offers additional information about notion materials or manufacturing, include them here.' 
                                currentValue={fieldset.notionNotes}
                                handleChange={event => notionChangeInput(event, index)} 
                            />
                        </FormFieldset>
                    )
                })}
                <FormButton
                    buttonText='ADD ANOTHER NOTION'
                    handleClick={() => notionAddInput()}
                />
                
                <FormPopUp
                    id='notionTypePopUp'
                    status={notionTypePopUpStatus()}
                    title='Add a Notion Type'
                    close={() => props.setNotTypePopUp(false)}
                    submit={() => props.setNotTypePopUp(false)}
                    buttonText='SUBMIT NOTION TYPE'
                >
                    <FormTextInput 
                        id='notionTypeName'
                        name='notionTypeName'
                        prompt='Notion type name' 
                        currentValue={props.newNotionFact.notionFactoryName}
                        handleChange={event => newNotFactChangeInput(event)} 
                    />
                </FormPopUp>

                <FormPopUp
                    id='notionMaterialPopUp'
                    status={notionMaterialPopUpStatus()}
                    title='Add a Material'
                    close={() => props.setNotMatPopUp(false)}
                    submit={() => props.setNotMatPopUp(false)}
                    buttonText='SUBMIT MATERIAL'
                >
                    <FormTextInput 
                        id='notionFactoryName'
                        name='notionFactoryName'
                        prompt='Factory name' 
                        currentValue={props.newNotionFact.notionFactoryName}
                        handleChange={event => newNotFactChangeInput(event)} 
                    />
                    <FormDropdown
                        id='notionFactoryLocation' 
                        name='notionFactoryLocation'
                        prompt='Location'
                        currentValue={props.newNotionFact.notionFactoryLocation}
                        options={props.countries}
                        handleChange={event => newNotFactChangeInput(event)}
                    />
                    <FormUrlInput 
                        id='sewingFactoryWebsite'
                        name='sewingFactoryWebsite'
                        prompt='Website'
                        currentValue={props.newNotionFact.notionFactoryWebsite}
                        handleChange={event => newNotFactChangeInput(event)}
                    />
                    <FormTextInput
                        id='sewingFactoryNotes'
                        name='sewingFactoryNotes'
                        prompt='Notes'
                        currentValue={props.newNotionFact.notionFactoryNotes}
                        handleChange={event => newNotFactChangeInput(event)}
                    />
                </FormPopUp>

                <FormPopUp
                    id='notionFactoryPopUp'
                    status={notionFactoryPopUpStatus()}
                    title='Add a Factory'
                    close={() => props.setNotFactPopUp(false)}
                    submit={() => props.setNotFactPopUp(false)}
                    buttonText='SUBMIT FACTORY'
                >
                    <FormPromptWithSub prompt={'Add a notion producer'} promptSubtitle='' />
                    <FormTextInput 
                        id='notionFactoryName'
                        name='notionFactoryName'
                        prompt='Factory name' 
                        currentValue={props.newNotionFact.notionFactoryName}
                        handleChange={event => newNotFactChangeInput(event)} 
                    />
                    <FormDropdown
                        id='notionFactoryLocation' 
                        name='notionFactoryLocation'
                        prompt='Location'
                        currentValue={props.newNotionFact.notionFactoryLocation}
                        options={props.countries}
                        handleChange={event => newNotFactChangeInput(event)}
                    />
                    <FormUrlInput 
                        id='sewingFactoryWebsite'
                        name='sewingFactoryWebsite'
                        prompt='Website'
                        currentValue={props.newNotionFact.notionFactoryWebsite}
                        handleChange={event => newNotFactChangeInput(event)}
                    />
                    <FormTextInput
                        id='sewingFactoryNotes'
                        name='sewingFactoryNotes'
                        prompt='Notes'
                        currentValue={props.newNotionFact.notionFactoryNotes}
                        handleChange={event => newNotFactChangeInput(event)}
                    />
                </FormPopUp>

                <FormPopUp
                    id={formData.manufacturing.certifications.id} 
                    status={notionCertificationPopUpStatus()}
                    title={formData.manufacturing.newCertification.title}
                    close={() => props.setNotCertPopUp(false)}
                    submit={() => props.setNotCertPopUp(false)}
                    buttonText={formData.manufacturing.newCertification.submitButton}
                >
                    <FormPromptWithSub prompt='Add a certification' promptSubtitle='' />
                    <FormTextInput 
                        id={formData.manufacturing.newCertification.certName.id}
                        name='newCertName'
                        prompt={formData.manufacturing.newCertification.certName.prompt} 
                        currentValue={props.newNotCert.newCertName}
                        handleChange={event => newNotCertChangeInput(event)} 
                    />
                    <FormUrlInput
                        id={formData.manufacturing.newCertification.certWebsite.id}
                        name='newCertWebsite'
                        prompt={formData.manufacturing.newCertification.certWebsite.prompt}
                        currentValue={props.newNotionFact.newCertWebsite}
                        handleChange={event => newNotCertChangeInput(event)}
                    />
                </FormPopUp>
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
        </div>
    )
}

NPFNotions.defaultProps = {
    countries: [],

    notTypePopUp: false,
    notMatPopUp: false,
    notFactPopUp: false,
    notCertPopUp: false,
    notionFields: [
        {
            notionTypeId: '',
            notionMaterialTypeId: '',
            notionLocationId: '',
            notionMaterialOriginId: '',
            notionFactoryId: '',
            notionNotes: '',

        }
    ],
    newNotionFact: {
        notionFactoryName: '',
        notionFactoryLocation: '',
        notionFactoryWebsite: '',
        notionFactoryNotes: ''
    },
    newNotCert: {
        newCertName: '',
        newCertWebsite: ''
    },
    notionChangeInput: () => {},
    setNotTypePopUp: () => {},
    setNotFactPopUp: () => {},
    setNotMatPopUp: () => {},
    notionCertificationChange: () => {},
    setNotCertPopUp: () => {},
    notionAddInput: () => {},
    notionTypePopUpStatus: () => {},
    newNotFactChangeInput: () => {},
    newNotCertChangeInput: () => {},
    currentPage: 0,
    setPage: () => {}
}

export default NPFNotions
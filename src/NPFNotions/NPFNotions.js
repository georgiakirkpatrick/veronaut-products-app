import React from 'react'
import config from '../config'
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

const NPFNotions = props => {
    const addCertification = certification => {
        props.fabricProps.setCertificationList([
            ...props.fabricProps.certificationList,
            {
                id: certification.id,
                text: certification.english_name,
                website: certification.website,
                approved: certification.approved_by_admin
            }
        ])

        props.setCertChecks({
            ...props.fabricProps.certChecks,
            [certification.id]: false
        })
    }

    const addNotion = () => {
        const initialCertChecks = props.fabricProps.certificationList.map(c => [c.id, false])
        const initialObject = Object.fromEntries(initialCertChecks)

        props.setNotionFields(
            [
                ...props.notionFields,
                {
                    typeId: 0,
                    countryId: 0,
                    factoryId: 0,
                    notes: '',
                    materialTypeId: 0,
                    materialOriginId: 0,
                    materialProducerId: 0,
                    certIds: initialObject
                }
            ]
        )
    }

    const makeCountryOptions = () => {
        const countries = props.fabricProps.countries.map((country, index) => ({
            id: index + 2,
            text: country.text,
            value: index + 2
        }))

        return [
            {
                id: 0,
                text: 'Select a country',
                value: 0
            },
            ...countries
        ]
    }

    const makeFactoryOptions = factType => {
        const factoryQty = props.fabricProps.factoryList.length
        const factories = props.fabricProps.factoryList.slice(1, factoryQty)
        const alphaFactories = factories.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

        const formattedFacts = alphaFactories.map(factory => ({
            id: factory.id,
            text: factory.english_name,
            value: factory.id
        }))

        return [
            {
                id: 0,
                text: `Select a ${factType}`,
                value: 0
            },
            {
                id: 1,
                text: 'Not disclosed',
                value: 1
            },
            ...formattedFacts
        ]
    }

    const makeMatTypeOptions = () => {
        const matTypeQty = props.fabricProps.fiberTypeList.length
        const matTypes = props.fabricProps.fiberTypeList.slice(1, matTypeQty)
        const alphaMatTypes = matTypes.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

        const materials = alphaMatTypes.map(matType => ({
            id: matType.id,
            text: matType.english_name,
            value: matType.id
        }))

        return [
            {
                id: 0,
                text: 'Select a fiber or material',
                value: 0
            },
            ...materials
        ]
    }

    const makeNotTypeOptions = () => {
        const notionTypes = props.notionTypeList.map(notionType => {
            return {
                id: notionType.id,
                text: notionType.english_name,
                value: notionType.id
            }
        })

        const alphaNotions = notionTypes.sort((a, b) => a.text > b.text ? 1 : -1)

        return [
            {
                id: 0,
                text: 'Select a notion type',
                value: 0
            },
            ...alphaNotions
        ]
    }

    const newNotCertChangeInput = event => {
        const newCertFields = {...props.fabricProps.newCert}
        newCertFields[event.target.name] = event.target.value
        props.fabricProps.setNewCert(newCertFields)
    }

    const newNotFactChangeInput = event => {
        const newNotFactFields = {...props.fabricProps.newFact}
        newNotFactFields[event.target.name] = event.target.value
        props.fabricProps.setNewFact(newNotFactFields)
    }

    const nextButton = () => { 
        if (props.notionFields.length === 0) {
            props.fabricProps.setPage(props.fabricProps.currentPage + 1)
        }
        props.notionFields.forEach(fieldset => {
            if (Number(fieldset.typeId) === 0) {
                alert(`Please select an option for each 'notion type' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else if (Number(fieldset.countryId) === 0) {
                alert(`Please select an option for each 'location of notion manufacturing' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else if (Number(fieldset.factoryId) === 0) {
                alert(`Please select an option for each 'notion manufacturer' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else if (Number(fieldset.materialTypeId) === 0) {
                alert(`Please select an option for each 'notion material' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else if (Number(fieldset.materialOriginId) === 0) {
                alert(`Please select an option for each 'origin of notion material' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else {
                props.fabricProps.setPage(props.fabricProps.currentPage + 1)
            }
        })    
    }

    // const nextButton = () => {
    //     props.fabricProps.setPage(props.fabricProps.currentPage + 1)
    // }

    const notCertChange = (notionIndex, changeId) => {
        const updatedNotions = [...props.notionFields]

        updatedNotions[notionIndex].certIds[changeId] = !props.notionFields[notionIndex].certIds[changeId]

        props.setNotionFields(updatedNotions) 
    }

    const notCertPopUpStatus = () => {
        if (props.fabricProps.certPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const notChangeInput = (event, index) => {
        console.log('event.target.name', event.target.name)
        console.log('event.target.value', event.target.value)
        const updatedNotions = [...props.notionFields]
        updatedNotions[index][event.target.name] = event.target.value
        props.setNotionFields(updatedNotions) 
    }

    const notFactPopUpStatus = () => {
        if (props.notFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }

        return 'FormPopUp__pop-up'
    }

    const notMaterialPopUpStatus = () => {
        if (props.materialPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const notTypePopUpStatus = () => {
        if (props.notionTypePopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const previousButton = () => {
        props.fabricProps.setPage(props.fabricProps.currentPage - props.backPageTurns)
    }

    const removeNotion = (index) => {
        const values = [...props.notionFields]
        values.splice(index, 1)
        props.setNotionFields(values)
    }

    const submitNewCert = () => {
        const missingFields = []

        Object.keys(props.fabricProps.newCert).forEach(key => {
            props.fabricProps.newCert[key] === '' && missingFields.push(
                key.replace( /([A-Z])/g, " $1" ).toLowerCase()
            )
        })

        if (missingFields.length === 1) {
            alert(`Please complete the '${missingFields[0]}' field`)
        } else if (missingFields.length > 1) {
            alert(`Please complete the following fields: ${missingFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFields.length === 0) {
            const data = {
                "english_name": props.fabricProps.newCert.name,
                "website": props.fabricProps.newCert.website,
                "approved_by_admin": false          
            }

            const postRequestParams = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            }

            fetch(`${config.API_URL}/api/certifications`,
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
            .then(responseJson => {
                addCertification(responseJson)
            })
            props.fabricProps.setCertPopUp(false)
            props.fabricProps.setNewCert({
                name: '',
                website: ''
            })
        }    
    }

    const submitNewManufacturer = index => {
        const data = {
            "english_name": props.fabricProps.newFact.name,
            "country": props.fabricProps.newFact.location,
            "website": props.fabricProps.newFact.website,
            "notes": props.fabricProps.newFact.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch(`${config.API_URL}/api/factories`, postRequestParams)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Server responded with an error!")
                }
                return response.json()
            })
            .then(newFactory => {
                const newFactArray = [
                    ...props.fabricProps.factoryList,
                    {
                        "id": Number(newFactory.id),
                        "english_name": newFactory.english_name,
                        "country": Number(newFactory.country),
                        "website": newFactory.website,
                        "notes": newFactory.notes,
                        "approved_by_admin": newFactory.approved_by_admin
                    }
                ]

                const factQty = newFactArray.length
                const factories = newFactArray.slice(1, factQty)
                const alphaFactories = factories.sort((a, b) => a.english_name > b.english_name ? 1 : -1)
                props.fabricProps.setFactoryList(alphaFactories)
    
                const newNotFields = props.notionFields
                newNotFields[index]['factoryId'] = newFactory.id
                props.setNotionFields(newNotFields)
            })

        props.setNotFactPopUp(false)
        props.fabricProps.setNewFact({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })
    }

    const submitNewMaterial = () => {
        const data = {
            "english_name": props.newNotionMaterial,
            "fiber_type_class": "undetermined"
        }

        const postRequestParams = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        }

        if (props.newNotionMaterial === '') {
            alert(`Please enter a new material.`)
        } else {
            fetch(`${config.API_URL}/api/fibers/fiber-types`, 
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Server responded with an error!")
                }
                return response.json()
            })
            .then(newMaterial => {
                console.log('newMaterial', newMaterial)
                const matTypes = [
                    ...props.fiberTypeList,
                    newMaterial
                ]

                const alphaMatTypes = matTypes.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

                props.setFiberTypeList(alphaMatTypes)
            })
        }

        // props.setMaterialPopUp(false)
        props.setNewNotionMaterial('')
        props.setMaterialPopUp(false)

    }

    const submitNewNotType = index => {
        const formattedNotType = () => {
            if (props.newNotionType) {
                const val = props.newNotionType.toLowerCase().split(" ")
            
                val[0] = val[0][0].toUpperCase() + val[0].substr(1)
            
                return val.join(" ")
            }
        }

        const data = {
            "english_name": formattedNotType(),
            "approved_by_admin": false
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch(
            `${config.API_URL}/api/notions/notion-types`,
            postRequestParams
        )
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Server responded with an error!")
            }

            return response.json()
        })
        .then(newNotionType => {
            const newNotionArray = [
                ...props.notionTypeList,
                {
                    "id": newNotionType.id,
                    "english_name": newNotionType.english_name,
                    "approved_by_admin": newNotionType.approved_by_admin,
                    "date_published": newNotionType.date_published
                }
            ]

            const notTypeQty = newNotionArray.length
            const notions = newNotionArray.slice(1, notTypeQty)
            const alphaNotions = notions.sort((a, b) => a.english_name > b.english_name ? 1 : -1)
            props.setNotionTypeList(alphaNotions)

            const newNotionFields = props.notionFields
            newNotionFields[index]['typeId'] = newNotionType.id
            props.setNotionFields(newNotionFields)
        })
        
        props.setNotionTypePopUp(false)
        props.setNewNotionType('')



        // props.setNotionFields(
        //     ...props.notionFields,

        // )
    }

    return (
        <div id='notions'>
            <FormPage title='Notions'>
                <FormPromptWithSub
                    prompt='If the product includes notions such as zippers or buttons, list them here.'
                    promptSubtitle='If the product does not include notions, skip this section.'
                />
                    {props.notionFields.map((notion, index) => {
                        return (
                            <FormFieldset key={index}>
                                <button
                                    className='NewProductForm__remove'
                                    type='button'
                                    onClick={() => removeNotion(index)}
                                >
                                    REMOVE
                                </button>

                                <FormDropdown
                                    id={'notion-type-' + index}
                                    name={'typeId'}
                                    prompt='Notion type'
                                    currentValue={notion['typeId']}
                                    options={makeNotTypeOptions()}
                                    handleChange={event => notChangeInput(event, index)} 
                                />
                
                                <FormButton
                                    buttonText='ADD A NOTION TYPE'
                                    handleClick={() => props.setNotionTypePopUp(true)}
                                />

                                <FormPopUp
                                    id='notion-type-pop-up'
                                    status={notTypePopUpStatus()}
                                    title='Add a Notion Type'
                                    close={() => props.setNotionTypePopUp(false)}
                                    submit={() => submitNewNotType(index)}
                                    buttonText='SUBMIT NOTION TYPE'
                                >
                                    <FormTextInput 
                                        id='new-not-type'
                                        name='newNotType'
                                        prompt='Notion type name' 
                                        currentValue={props.newNotionType}
                                        handleChange={event => props.setNewNotionType(event.target.value)}
                                    />
                                </FormPopUp>
                
                                <FormDropdown
                                    id={'notion-location-' + index}
                                    name='countryId'
                                    prompt='Location of notion manufacturing'
                                    currentValue={notion.countryId}
                                    options={makeCountryOptions()}
                                    handleChange={event => notChangeInput(event, index)} 
                                />
                
                                <FormDropdown
                                    id={'notion-factory-' + index}
                                    name='factoryId'
                                    prompt='Notion manufacturer'
                                    currentValue={notion.factoryId}
                                    options={makeFactoryOptions('manufacturer')}
                                    handleChange={event => notChangeInput(event, index)} 
                                />

                                <FormButton
                                    buttonText='ADD A MANUFACTURER'
                                    handleClick={() => props.setNotFactPopUp(true)}
                                />

                                <FormPopUp
                                    id='notion-factory-pop-up'
                                    status={notFactPopUpStatus()}
                                    title='Add a Manufacturer'
                                    close={() => props.setNotFactPopUp(false)}
                                    submit={() => submitNewManufacturer(index)}
                                    buttonText='SUBMIT MANUFACTURER'
                                >
                                    <FormPromptWithSub prompt='Add a notion manufacturer' promptSubtitle='' />
                                    
                                    <FormTextInput 
                                        id='notion-factory-name'
                                        name='name'
                                        prompt='Factory name' 
                                        currentValue={props.fabricProps.newFact.name}
                                        handleChange={event => newNotFactChangeInput(event)} 
                                    />
                                    
                                    <FormDropdown
                                        id='notion-factory-location' 
                                        name='location'
                                        prompt='Location'
                                        currentValue={props.fabricProps.newFact.location}
                                        options={makeCountryOptions()}
                                        handleChange={event => newNotFactChangeInput(event)}
                                    />
                                    
                                    <FormUrlInput 
                                        id='notion-factory-website'
                                        name='website'
                                        prompt='Website'
                                        currentValue={props.fabricProps.newFact.website}
                                        handleChange={event => newNotFactChangeInput(event)}
                                    />
                                    
                                    <FormTextInput
                                        id='notion-factory-notes'
                                        name='notes'
                                        prompt='Notes'
                                        currentValue={props.fabricProps.newFact.notes}
                                        handleChange={event => newNotFactChangeInput(event)}
                                    />
                                </FormPopUp>

                                <FormDropdown
                                    id={'notion-material-type-' + index}
                                    name='materialTypeId'
                                    prompt='Notion material'
                                    currentValue={notion.materialTypeId}
                                    options={makeMatTypeOptions()}
                                    handleChange={event => notChangeInput(event, index)} 
                                />

                                <FormButton
                                    buttonText='ADD A MATERIAL TYPE'
                                    handleClick={() => props.setMaterialPopUp(true)}
                                />

                                <FormPopUp
                                    id='new-material'
                                    status={notMaterialPopUpStatus()}
                                    title='Add a Material'
                                    close={() => props.setMaterialPopUp(false)}
                                    submit={() => submitNewMaterial()}
                                    buttonText='SUBMIT MATERIAL'
                                >
                                    <FormTextInput
                                        id='new-material-name'
                                        name='name'
                                        prompt='Material name'
                                        currentValue={props.newNotionMaterial}
                                        handleChange={event => {
                                            props.setNewNotionMaterial(event.target.value)
                                        }}
                                    />
                                </FormPopUp>

                                <FormDropdown
                                    id={'notion-material-origin-id-' + index}
                                    name='materialOriginId'
                                    prompt='Origin of notion material'
                                    currentValue={notion.materialOriginId}
                                    options={makeCountryOptions()}
                                    handleChange={event => notChangeInput(event, index)} 
                                />

                                <FormDropdown
                                    id={'notion-material-producer-id-' + index}
                                    name='materialProducerId'
                                    prompt='Notion material producer'
                                    currentValue={notion.materialProducerId}
                                    options={makeFactoryOptions('producer')}
                                    handleChange={event => notChangeInput(event, index)} 
                                />

                                <FormButton
                                    buttonText='ADD A MANUFACTURER'
                                    handleClick={() => props.setNotFactPopUp(true)}
                                />

                                <p>Does the notion have any of the following cerfications?</p>
                                <FormCheckboxSection
                                    id={'notion-certifications' + index}
                                    name='certIds'
                                    options={props.fabricProps.certificationList}
                                    selectedOptions={notion.certIds}
                                    handleChange={event => notCertChange(index, event.target.id)}
                                />

                                <FormButton 
                                    buttonText='ADD A CERTIFICATION'
                                    handleClick={() => props.fabricProps.setCertPopUp(true)} 
                                />

                                <FormPopUp
                                    id='not-cert-pop-up'
                                    status={notCertPopUpStatus()}
                                    title='New Certification'
                                    close={() => props.fabricProps.setCertPopUp(false)}
                                    submit={() => submitNewCert()}
                                    buttonText='SUBMIT CERTIFICATION'
                                >
                                    <FormPromptWithSub prompt='Add a certification' promptSubtitle='' />

                                    <FormTextInput 
                                        id='not-cert-name'
                                        name='name'
                                        prompt='Certification name'
                                        currentValue={props.fabricProps.newCert.name}
                                        handleChange={event => newNotCertChangeInput(event)} 
                                    />

                                    <FormUrlInput
                                        id='not-cert-website'
                                        name='website'
                                        prompt='Website'
                                        currentValue={props.fabricProps.newCert.website}
                                        handleChange={event => newNotCertChangeInput(event)}
                                    />
                                </FormPopUp>
                
                                <FormTextInput 
                                    id={'notes' + index}
                                    name='notes'
                                    prompt='If the brand offers additional information about notion materials or manufacturing, include them here.' 
                                    currentValue={notion.notes}
                                    handleChange={event => notChangeInput(event, index)} 
                                />
                            </FormFieldset>
                        )
                    })}
                <FormButton
                    buttonText='ADD A NOTION'
                    handleClick={() => addNotion()}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext'
                previousButton={() => previousButton()}
                nextButton={() => nextButton()}
            />
        </div>
    )
}

NPFNotions.defaultProps = {
    fabricProps: {
        certificationList: [],
        certPopUp: false,
        countries: [],
        currentPage: 0,
        factoryList: [],
        fiberTypeList: [],
        newCert: {
            name: '',
            website: ''
        },
        newFact: {
            name: '',
            countryId: '',
            website: '',
            notes: ''
        },
        setCertificationList: () => {},
        setFiberTypeList: () => {},
        setFactoryList: () => {},
        setCertPopUp: () => {},
        setNewCert: () => {},
        setNewFact: () => {},
        setPage: () => {},
    },
    materialPopUp: false,
    newNotionType: '',
    notFactPopUp: false,
    notionFields: [
        {
            typeId: 0,
            materialTypeId: 0,
            countryId: 0,
            materialOriginId: 0,
            factoryId: 0,
            notes: ''
        }
    ],
    notionTypeList: [],
    notionTypePopUp: false,
    setCertChecks: () => {},
    setMaterialPopUp: () => {},
    setNotFactPopUp: () => {},
    setNewNotionType: () => {},
    setNotionFields: () => {},
    setNotionTypeList: () => {},
    setNotionTypePopUp: () => {}
}

export default NPFNotions
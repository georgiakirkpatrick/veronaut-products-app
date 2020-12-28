import React, { useState } from 'react'
import '@fortawesome/react-fontawesome';
import Header from '../Header/Header'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFBrand from '../NPFBrand/NPFBrand'
import NPFFooter from '../NPFFooter/NPFFooter'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import currencies from '../CURRENCIES'
import countries from '../COUNTRIES'
import formData from '../FORM_DATA'
import NPFManufacturing from '../NPFManufacturing/NPFManufacturing'
import NPFFabrics from '../NPFFabrics/NPFFabrics'
import NPFFabricsQuestion from '../NPFFabricsQuestion/NPFFabricsQuestion'
import './NewProductForm.css'
import { Link } from 'react-router-dom'
import FormFieldset from '../FormFieldset/FormFieldset'

const makeCountryOptions = countries.map(country => {
    return { id: `${country.value}`, text: `${country.text}` }
})

const makeCurrencyOptions = currencies.map(currency => {
    return { id: `${currency.code}`, text: `${currency.code} - ${currency.name_plural} (${currency.symbol_native})` }
})

const NewProductForm = () => {
    const [currentPage, setPage] = useState(0)

    // BRAND STATE
    const [brands, setBrands] = useState([])
    const [brandPopUp, setBrandPopUp] = useState(false)
    const [brandId, setBrandId] = useState(1);

    console.log('brandId', brandId)

    const [newBrandFields, setNewBrandFields] = useState(
        {
            brandName: '',
            brandWebsite: '',
            brandCurrency: '',
            brandSizeSystem: ''
        }
    )

    // COLOR STATE
    const [colorFieldsets, setColorFieldsets] = useState([
        { 
            colorName: '', 
            colorDescription: '1' ,
            colorSwatchUrl: '',
            colorImageUrls: ['']
        }
    ])

    // FABRICS QUESTION STATE
    const [primCheck, setPrimCheck] = useState(true)
    const [secCheck, setSecCheck] = useState(false)
    const [linCheck, setLinCheck] = useState(false)

    // FABRIC POP UPS

    // PRIMARY FABRIC STATE
    const [primFabFact, setPrimFabFact] = useState({
        dyeFinLocation: '',
        dyeFinFactory: '',
        dyeFinNotes: '',
        wovKnitLocation: '',
        wovKnitFactory: '',
        wovKnitNotes: ''
    })
    const [primFactPopUp, setPrimFactPopUp] = useState(false)
    const [newPrimFact, setNewPrimFact] = useState({
        factoryName: '',
        factoryLocation: '',
        factoryWebsite: '',
        factoryNotes: ''
    })
    const [primMillPopUp, setPrimMillPopUp] = useState(false)
    const [newPrimMill, setNewPrimMill] = useState({
        millName: '',
        millLocation: '',
        millWebsite: '',
        millNotes: ''
    })
    const initCertChecks = formData.manufacturing.certifications.options.map(cert => [cert.id, false])
    const [primCertChecks, setPrimCertChecks] = useState(Object.fromEntries(initCertChecks))
    const [primCertPopUp, setPrimCertPopUp] = useState(false)
    const [newPrimCert, setNewPrimCert] = useState({
        newCertName: '',
        newCertWebsite: ''
    })

     // SECONDARY FABRIC CERTIFICATION
     const [secFabFact, setSecFabFact] = useState({
        dyeFinLocation: '',
        dyeFinFactory: '',
        dyeFinNotes: '',
        wovKnitLocation: '',
        wovKnitFactory: '',
        wovKnitNotes: ''
    })
    const [secFactPopUp, setSecFactPopUp] = useState(false)
    const [newSecFact, setNewSecFact] = useState({
        factoryName: '',
        factoryLocation: '',
        factoryWebsite: '',
        factoryNotes: ''
    })
    const [secCertChecks, setSecCertChecks] = useState(Object.fromEntries(initCertChecks))
    const [secCertPopUp, setSecCertPopUp] = useState(false)
    const [newSecCert, setNewSecCert] = useState({
        newCertName: '',
        newCertWebsite: ''
    })
    const [secMillPopUp, setSecMillPopUp] = useState(false)
    const [newSecMill, setNewSecMill] = useState({
        millName: '',
        millLocation: '',
        millWebsite: '',
        millNotes: ''
    })

    // LINING FABRIC CERTIFICATION
    const [linFabFact, setLinFabFact] = useState({
        dyeFinLocation: '',
        dyeFinFactory: '',
        dyeFinNotes: '',
        wovKnitLocation: '',
        wovKnitFactory: '',
        wovKnitNotes: ''
    })
    const [linFactPopUp, setLinFactPopUp] = useState(false)
    const [newLinFact, setNewLinFact] = useState({
        factoryName: '',
        factoryLocation: '',
        factoryWebsite: '',
        factoryNotes: ''
    })
    const [linCertChecks, setLinCertChecks] = useState(Object.fromEntries(initCertChecks))
    const [linCertPopUp, setLinCertPopUp] = useState(false)
    const [newLinCert, setNewLinCert] = useState({
        newCertName: '',
        newCertWebsite: ''
    })
    const [linMillPopUp, setLinMillPopUp] = useState(false)
    const [newLinMill, setNewLinMill] = useState({
        millName: '',
        millLocation: '',
        millWebsite: '',
        millNotes: ''
    })

    // MANUFACTURING STATE
    const [sewFact, setSewFact] = useState({location: '', factory: ''})
    const [sewFactPopUp, setSewFactPopUp] = useState(false)
    const [newSewFact, setNewSewFact] = useState({
        sewingFactoryName: '',
        sewingFactoryLocation: '',
        sewingFactoryWebsite: '',
        sewingFactoryNotes: ''
    })

    const [cutFact, setCutFact] = useState({location: '', factory: ''})
    const [cutFactPopUp, setCutFactPopUp] = useState(false)
    const [newCutFact, setNewCutFact] = useState({
        cuttingFactoryName: '',
        cuttingFactoryLocation: '',
        cuttingFactoryWebsite: '',
        cuttingFactoryNotes: ''
    })

    const initialCertChecks = formData.manufacturing.certifications.options.map(cert => [cert.id, false])
    const [certChecks, setCertChecks] = useState(Object.fromEntries(initialCertChecks))
    const [certPopUp, setCertPopUp] = useState(false)
    const [newCert, setNewCert] = useState({
        newCertName: '',
        newCertWebsite: ''
    })

    const [additionalNotes, setAdditionalNotes] = useState('')

    // BRAND
    const addBrand = newBrand => {
        setBrands([...brands, newBrand])
        setBrandId(newBrand.id)
    }

    const brand = (
        <NPFBrand
            addBrand={addBrand}
            currentBrandId={brandId}
            setCurrentBrandId={setBrandId}
            newBrandFields={newBrandFields}
            setNewBrandFields={setNewBrandFields}
            brands={brands}
            setBrands={setBrands}
            brandPopUp={brandPopUp}
            setBrandPopUp={setBrandPopUp}
            currentPage={currentPage}
            setPage={setPage}
            currencies={makeCurrencyOptions}
        />
    )
    
    // COLORS
    const colorsChangeInput = (index, event) => {
        const values = [...colorFieldsets]
        values[index][event.target.name] = event.target.value
        setColorFieldsets(values)
    }

    const addAColor = () => {
        setColorFieldsets(
            [
                ...colorFieldsets, 
                { 
                    colorName: '', 
                    colorDescription: '', 
                    colorSwatchUrl: '',
                    colorImageUrls: ['']
                }
            ]
        )
    }

    const removeColor = (index) => {
        const values = [...colorFieldsets]
        values.splice(index, 1)
        setColorFieldsets(values)
    }

    const colorsSubmit = (e) => {
        console.log('colorFieldsets', colorFieldsets)
    }    

    const colors = (
        <div>
            <FormPage title={formData.colors.pageTitle}>
                <div id='color-inputs'>
                    <FormPromptWithSub prompt={formData.colors.pagePrompts[1].prompt} promptSubtitle={formData.colors.pagePrompts[1].promptSubtitle} />
                    {colorFieldsets.map((colorFieldset, index) => (
                        <fieldset key={index} className='NewProductForm_fieldset'>
                            <button className='NewProductForm_remove' type='button' onClick={() => removeColor(index)}>
                                REMOVE
                            </button>
                            <FormTextInput 
                                id={formData.colors.colorName.id + index}
                                name={formData.colors.colorName.name}
                                prompt={formData.colors.colorName.prompt} 
                                value={colorFieldset.colorName} 
                                change={event => {
                                    colorsChangeInput(index, event)
                                }}
                            />
                            <FormDropdown 
                                id={formData.colors.colorDescription.id + index} 
                                name={formData.colors.colorDescription.id}
                                prompt={formData.colors.colorDescription.prompt} 
                                options={formData.colors.colorDescription.options}
                                value={colorFieldset.colorDescription} 
                                change={event => {
                                    colorsChangeInput(index, event)
                                }}
                            />
                        </fieldset>
                    ))}
                </div>

                <FormButton 
                    buttonText='ADD A COLOR' 
                    click={() => addAColor() } 
                />                

            </FormPage>
            <NPFFooter
                buttons='prevNext'
                previousButton={() => setPage(currentPage - 1)} 
                nextButton={() => {
                    setPage(currentPage + 1)
                    colorsSubmit()
                }}
            />
        </div>
    )

    // PRIMARY FABRIC PAGE
    const primFabState = {
        fabFact: primFabFact,
        setFabFact: setPrimFabFact,
        factPopUp: primFactPopUp,
        setFactPopUp: setPrimFactPopUp,
        newFact: newPrimFact,
        setNewFact: setNewPrimFact,
        certChecks: primCertChecks,
        setCertChecks: setPrimCertChecks,
        certPopUp: primCertPopUp,
        setCertPopUp: setPrimCertPopUp,
        newCert: newPrimCert,
        setNewCert: setNewPrimCert,
        millPopUp: primMillPopUp,
        setMillPopUp: setPrimMillPopUp,
        newMill: newPrimMill,
        setNewMill: setNewPrimMill
    }

    const factories = formData.manufacturing.factory.options

    const primFabric = (
        <NPFFabrics
            id='prim'
            currentPage={currentPage}
            setPage={setPage}
            title='Primary Fabric'
            fabState={primFabState}
            countries={makeCountryOptions}
            factories={factories}
        />
    )

    // SECONDARY FABRIC PAGE
    const secFabState = {
        fabFact: secFabFact,
        setFabFact: setSecFabFact,
        factPopUp: secFactPopUp,
        setFactPopUp: setSecFactPopUp,
        newFact: newSecFact,
        setNewFact: setNewSecFact,
        certChecks: secCertChecks,
        setCertChecks: setSecCertChecks,
        certPopUp: secCertPopUp,
        setCertPopUp: setSecCertPopUp,
        newCert: newSecCert,
        setNewCert: setNewSecCert,
        millPopUp: secMillPopUp,
        setMillPopUp: setSecMillPopUp,
        newMill: newSecMill,
        setNewMill: setNewSecMill
    }

    const secFabric = (
        <NPFFabrics
            id='sec'
            currentPage={currentPage}
            setPage={setPage}
            title='Secondary Fabric'
            fabState={secFabState}
            countries={makeCountryOptions}
            factories={factories}
        />
    )

    // LINING FABRIC PAGE
    const linFabState = {
        fabFact: linFabFact,
        setFabFact: setLinFabFact,
        factPopUp: linFactPopUp,
        setFactPopUp: setLinFactPopUp,
        newFact: newLinFact,
        setNewFact: setNewLinFact,
        certChecks: linCertChecks,
        setCertChecks: setLinCertChecks,
        certPopUp: linCertPopUp,
        setCertPopUp: setLinCertPopUp,
        newCert: newLinCert,
        setNewCert: setNewLinCert,
        millPopUp: linMillPopUp,
        setMillPopUp: setLinMillPopUp,
        newMill: newLinMill,
        setNewMill: setNewLinMill
    }

    const linFabric = (
        <NPFFabrics
            id='lin'
            currentPage={currentPage}
            setPage={setPage}
            title='Lining Fabric'
            fabState={linFabState}
            countries={makeCountryOptions}
            factories={factories}
        />
    )

    // FABRICS QUESTION PAGE
    const fabricsQuestion = (
        <NPFFabricsQuestion 
            currentPage={currentPage}
            setPage={setPage}
            primCheck={primCheck}
            setPrimCheck={setPrimCheck}
            secCheck={secCheck}
            setSecCheck={setSecCheck}
            linCheck={linCheck}
            setLinCheck={setLinCheck}
        />
    )

    // FINISH
    const finish = (
        <div>
            <FormPage>
                <p className='NewProductForm_big-text'>
                    That's it!
                </p>
                <Link className='NewProductForm_button-like' to='/'>HOME</Link>
            </FormPage>
            <NPFFooter buttons='prev' previousButton={() => setPage(currentPage - 1)} nextButton={() => setPage(currentPage + 1)} />
        </div>
    )

    const addAnImage = (index) => {
        const fieldsetToUpdate = colorFieldsets[index]
        fieldsetToUpdate.colorImageUrls.push('')
        setColorFieldsets([ ...colorFieldsets ])    
    }

    const changeSwatchInput = (index, event) => {
        const values = [...colorFieldsets]
        values[index][event.target.name] = event.target.value
        setColorFieldsets(values)
    }

    const changeImageInput = (index, i, e) => {
        const values = [...colorFieldsets]
        values[index][e.target.name][i] = e.target.value
    }

    const images = (
        <div>
            <FormPage title={formData.images.pageTitle}>
                <FormPromptWithSub prompt={formData.images.pagePrompts.prompt} promptSubtitle={formData.images.pagePrompts.promptSubtitle} />
                {colorFieldsets.map((colorFieldset, index) => (
                    <FormFieldset key={index} className='NewProductForm_fieldset'>
                        <FormPromptWithSub prompt={colorFieldset.colorName} promptSubtitle='' />
                        <FormUrlInput 
                            id={formData.images.colorSwatchUrlFieldset.id + index}
                            name={formData.images.colorSwatchUrlFieldset.id}
                            prompt={formData.images.colorSwatchUrlFieldset.prompt}
                            name={formData.images.colorSwatchUrlFieldset.name}
                            value={colorFieldset.colorSwatchUrl}
                            change={event => {
                                changeSwatchInput(index, event)
                            }}
                        />
                        {colorFieldsets[index].colorImageUrls.map((colorImageUrl, i) => (
                            <FormUrlInput
                                key={i}
                                id={i}
                                name={i}
                                prompt={formData.images.imageUrl.prompt}
                                name={formData.images.imageUrl.name}
                                value={colorImageUrl}
                                change={e => {
                                    changeImageInput(index, i, e)
                                }}
                            />
                        ))}
                        
                        <FormButton
                            buttonText='ADD AN IMAGE FOR THIS COLOR'
                            click={() => addAnImage(index)}
                        />
                   </ FormFieldset>
                ))}
                <div id={formData.images.colorSwatchUrlFieldset.id}>
                    {/* this is where color swatch and image fieldsets should go */}
                </div>    
                    


            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => setPage(currentPage - 1)} 
                nextButton={() => { 
                    setPage(currentPage + 1) 
                    colorsSubmit()
                }}
            />
        </div>
    )

    

    // // MANUFACTURING
    const manuState = {
        sewFact: sewFact,
        setSewFact: setSewFact,
        sewFactPopUp: sewFactPopUp,
        setSewFactPopUp: setSewFactPopUp,
        newSewFact: newSewFact,
        setNewSewFact: setNewSewFact,
        cutFact: cutFact,
        setCutFact: setCutFact,
        cutFactPopUp: cutFactPopUp,
        setCutFactPopUp: setCutFactPopUp,
        newCutFact: newCutFact,
        setNewCutFact: setNewCutFact,
        certChecks: certChecks,
        setCertChecks: setCertChecks,
        certPopUp: certPopUp,
        setCertPopUp: setCertPopUp,
        newCert: newCert,
        setNewCert: setNewCert,
        additionalNotes: additionalNotes,
        setAdditionalNotes: setAdditionalNotes
    }

    const manufacturing = <NPFManufacturing 
        currentPage={currentPage} 
        setPage={setPage} 
        countries={makeCountryOptions}
        factories={factories}
        manuState={manuState}
    />

    // NEW PRODUCT
    const [newProductFields, setNewProductFields] = useState({
            productName: '', 
            productUrl: '' ,
            category: '',
            featureImageUrl: '',
            currency: '',
            price: '',
            wash: '',
            dry: ''
        }
    )

    const newProductChange = event => {
        setNewProductFields({...newProductFields, [event.target.name]: event.target.value})
    }

    const newProduct = (
        <div>
            <FormPage title={formData.newProduct.pageTitle}>
                <FormTextInput
                    id='productName'
                    name='productName'
                    prompt='Product name'
                    value={newProductFields.productName}
                    change={event => newProductChange(event)}
                />
                <FormUrlInput 
                    id='productUrl'
                    name='productUrl'
                    prompt='Product URL'
                    value={newProductFields.productUrl}
                    change={event => newProductChange(event)}
                />
                <FormDropdown
                    id='productCategory'
                    name='productCategory'
                    prompt='Category'
                    change={event => newProductChange(event)}
                    value={newProductFields.category}
                    options={formData.newProduct.category.options}
                />
                <FormUrlInput
                    id={formData.newProduct.featureImageUrl.id}
                    prompt={formData.newProduct.featureImageUrl.prompt}
                    name={formData.newProduct.featureImageUrl.id}
                    value={newProductFields.featureImageUrl}
                    change={event => newProductChange(event)}
                />
                <FormPromptWithSub 
                    prompt={formData.newProduct.currency.prompt}
                    promptSubtitle={formData.newProduct.currency.promptSubtitle}
                />
                <FormDropdown
                    id={formData.newProduct.currency.id}
                    name={formData.newProduct.currency.id}
                    prompt={formData.newProduct.currency.prompt}
                    name={formData.newProduct.currency.id}
                    change={event => newProductChange(event)}
                    value={newProductFields.currency}
                    options={makeCurrencyOptions}
                />
                <FormTextInput
                    id={formData.newProduct.price.id}
                    name={formData.newProduct.price.id}
                    prompt={formData.newProduct.price.prompt}
                    value={newProductFields.price}
                    change={event => newProductChange(event)}
                />
                <FormPromptWithSub 
                    prompt={formData.newProduct.careInstructions.prompt}
                    promptSubtitle=''
                />
                <FormDropdown
                    id={formData.newProduct.wash.id}
                    name={formData.newProduct.wash.id}
                    prompt={formData.newProduct.wash.prompt}
                    name={formData.newProduct.wash.id}
                    change={event => newProductChange(event)}
                    value={newProductFields.wash}
                    options={formData.newProduct.wash.options}
                />
                <FormDropdown
                    id={formData.newProduct.dry.id}
                    name={formData.newProduct.dry.id}
                    prompt={formData.newProduct.dry.prompt}
                    name={formData.newProduct.dry.id}
                    change={event => newProductChange(event)}
                    value={newProductFields.dry}
                    options={formData.newProduct.dry.options}
                />
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => setPage(currentPage - 1)} nextButton={() => setPage(currentPage + 1)}/> 
        </div>
    )

    // NOT PERMITTED
    // const notPermitted = (
    //     <div>
    //         <FormPage>
    //             <p className='NewProductForm_big-text'>
    //                 {formData.notPermitted.message}
    //             </p>
    //             <Link className='NewProductForm_button-like' to={formData.notPermitted.buttons[0].link}>{formData.notPermitted.buttons[0].text}</Link>
    //             <Link className='NewProductForm_button-like' to={formData.notPermitted.buttons[1].link}>{formData.notPermitted.buttons[1].text}</Link>
    //         </FormPage>
    //         <NPFFooter buttons='prev' previousButton={() => setPage(currentPage - 1)} nextButton={() => setPage(currentPage + 1)} />
    //     </div>
    // )

    // NOTIONS
    // const [notionNumber, setNotionNumber] = useState(1)
    const [notionFields, setNotionFields] = useState([
        {
            notionTypeId: '',
            notionMaterialTypeId: '',
            notionLocationId: '',
            notionMaterialOriginId: '',
            notionFactoryId: '',
            notionNotes: ''
        }
    ])

    const notionChangeInput = (event, index) => {
        const updatedNotions = [...notionFields]
        updatedNotions[index][event.target.name] = event.target.value
        setNotionFields(updatedNotions) 
    }

    const notionAddInput = () => {
        setNotionFields(
            [
                ...notionFields,
                { 
                    notionTypeId: '',
                    notionMaterialTypeId: '',
                    notionLocationId: '',
                    notionMaterialOriginId: '',
                    notionFactoryId: '',
                    notionNotes: ''
                }
            ]
        )
    }

    // const [notFact, setNotFact] = useState({location: '', factory: ''})
    const [notTypePopUp, setNotTypePopUp] = useState(false)

    const notionTypePopUpStatus = () => {
        if (notTypePopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const [notMatPopUp, setNotMatPopUp] = useState(false)

    const notionMatPopUpStatus = () => {
        if (notMatPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const [notFactPopUp, setNotFactPopUp] = useState(false)

    const notionFactoryPopUpStatus = () => {
        if (notFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const newNotFactChangeInput = event => {
        const newNotFactFields = {...newNotionFact}
        newNotFactFields[event.target.name] = event.target.value
        setNewNotionFact(newNotFactFields)
    }

    const [newNotionFact, setNewNotionFact] = useState({
        notionFactoryName: '',
        notionFactoryLocation: '',
        notionFactoryWebsite: '',
        notionFactoryNotes: ''
    })

    const handleClose = () => {
        setNotTypePopUp(false)
        setNotMatPopUp(false)
        setNotFactPopUp(false)
    }

    const initialNotCertChecks = formData.manufacturing.certifications.options.map(cert => [cert.id, false])
    const [notCertChecks, setNotCertChecks] = useState(Object.fromEntries(initialNotCertChecks))
    const [notCertPopUp, setNotCertPopUp] = useState(false)
    const [newNotCert, setNewNotCert] = useState({
        newCertName: '',
        newCertWebsite: ''
    })

    const notCertPopUpStatus = () => {
        if (notCertPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const newNotCertChangeInput = event => {
        const newCertFields = {...newNotCert}
        newCertFields[event.target.name] = event.target.value
        setNewNotCert(newCertFields)
    }

    const handleNotCertClose = () => {
        setNotCertPopUp(false)
    }

    const notionCertificationChange = event => {
        setNotCertChecks({...notCertChecks, [event.target.id]: !notCertChecks[event.target.id]})
    }

    const notions = (
        <div id={formData.notions.id}>
            <FormPage title={formData.notions.pageTitle}>
            <FormPromptWithSub
                    prompt='If the product includes notions such as zippers or buttons, list them here.'
                    promptSubtitle="If the product does not include notions, skip this section by clicking 'next'"
                />
                {notionFields.map((fieldset, index) => {
                    return (
                        <FormFieldset key={index}>
                            <FormDropdown
                                id={'notionTypeId' + index}
                                name='notionTypeId'
                                prompt='Notion type'
                                value={fieldset.notionTypeId}
                                options={formData.notions.notionType.options}
                                change={event => notionChangeInput(event, index)} 
                            />
            
                            <FormButton
                                buttonText='ADD A NOTION TYPE'
                                click={() => setNotTypePopUp(true)}
                            />
            
                            <FormDropdown
                                id={'notionLocationId' + index}
                                name='notionLocationId'
                                prompt='Location of notion manufacturing'
                                value={fieldset.notionLocationId}
                                options={makeCountryOptions}
                                change={event => notionChangeInput(event, index)} 
                            />
            
                            <FormDropdown
                                id={'notionFactoryId' + index}
                                name='notionFactoryId'
                                prompt='Notion manufacturer'
                                value={fieldset.notionFactoryId}
                                options={formData.manufacturing.factory.options}
                                change={event => notionChangeInput(event, index)} 
                            />

                            <FormButton
                                buttonText='ADD A FACTORY'
                                click={() => setNotFactPopUp(true)}
                            />

                            <FormDropdown
                                id={'notionMaterialTypeId' + index}
                                name='notionMaterialTypeId'
                                prompt='Notion material type'
                                value={fieldset.notionMaterialTypeId}
                                options={formData.notions.notionMaterial.options}
                                change={event => notionChangeInput(event, index)} 
                            />

                            <FormButton
                                buttonText='ADD A MATERIAL TYPE'
                                click={() => setNotMatPopUp(true)}
                            />
            
                            <FormDropdown
                                id={'notionMaterialOriginId' + index}
                                name='notionMaterialOriginId'
                                prompt='Origin of notion material'
                                value={fieldset.notionMaterialOriginId}
                                options={makeCountryOptions}
                                change={event => notionChangeInput(event, index)} 
                            />

                            <p>{formData.manufacturing.pagePrompts[3].prompt}</p>
                            <FormCheckboxSection  
                                options={formData.manufacturing.certifications.options} 
                                check={notCertChecks}
                                change={event => notionCertificationChange(event)}
                            />
                            <FormButton 
                                buttonText={formData.manufacturing.buttonText[1]} 
                                click={() => setNotCertPopUp(true)} 
                            />
            
                            <FormTextInput 
                                id={'notionNotes' + index}
                                name='notionNotes'
                                prompt='If the brand offers additional information about notion materials or manufacturing, include them here.' 
                                value={fieldset.notionNotes}
                                change={event => notionChangeInput(event, index)} 
                            />
                        </FormFieldset>
                    )
                })}
                <FormButton
                    buttonText='ADD ANOTHER NOTION'
                    click={() => notionAddInput()}
                />
                
                <FormPopUp
                    id='notionTypePopUp'
                    status={notionTypePopUpStatus()}
                    title='Add a Notion Type'
                    click={() => handleClose()}
                    buttonText='SUBMIT NOTION TYPE'
                >
                    <FormTextInput 
                        id='notionTypeName'
                        name='notionTypeName'
                        prompt='Notion type name' 
                        value={newNotionFact.notionFactoryName}
                        change={event => newNotFactChangeInput(event)} 
                    />
                </FormPopUp>

                <FormPopUp
                    id='notionMaterialPopUp'
                    status={notionMatPopUpStatus()}
                    title='Add a Material'
                    click={() => handleClose()}
                    buttonText='SUBMIT MATERIAL'
                >
                    <FormTextInput 
                        id='notionFactoryName'
                        name='notionFactoryName'
                        prompt='Factory name' 
                        value={newNotionFact.notionFactoryName}
                        change={event => newNotFactChangeInput(event)} 
                    />
                    <FormDropdown
                        id='notionFactoryLocation' 
                        name='notionFactoryLocation'
                        prompt='Location'
                        value={newNotionFact.notionFactoryLocation}
                        options={makeCountryOptions}
                        change={event => newNotFactChangeInput(event)}
                    />
                    <FormUrlInput 
                        id='sewingFactoryWebsite'
                        name='sewingFactoryWebsite'
                        prompt='Website'
                        value={newNotionFact.notionFactoryWebsite}
                        change={event => newNotFactChangeInput(event)}
                    />
                    <FormTextInput
                        id='sewingFactoryNotes'
                        name='sewingFactoryNotes'
                        prompt='Notes'
                        value={newNotionFact.notionFactoryNotes}
                        change={event => newNotFactChangeInput(event)}
                    />
                </FormPopUp>

                <FormPopUp
                    id='notionFactoryPopUp'
                    status={notionFactoryPopUpStatus()}
                    title='Add a Factory'
                    click={() => handleClose()}
                    buttonText='SUBMIT FACTORY'
                >
                    <FormPromptWithSub prompt={'Add a notion producer'} promptSubtitle='' />
                    <FormTextInput 
                        id='notionFactoryName'
                        name='notionFactoryName'
                        prompt='Factory name' 
                        value={newNotionFact.notionFactoryName}
                        change={event => newNotFactChangeInput(event)} 
                    />
                    <FormDropdown
                        id='notionFactoryLocation' 
                        name='notionFactoryLocation'
                        prompt='Location'
                        value={newNotionFact.notionFactoryLocation}
                        options={makeCountryOptions}
                        change={event => newNotFactChangeInput(event)}
                    />
                    <FormUrlInput 
                        id='sewingFactoryWebsite'
                        name='sewingFactoryWebsite'
                        prompt='Website'
                        value={newNotionFact.notionFactoryWebsite}
                        change={event => newNotFactChangeInput(event)}
                    />
                    <FormTextInput
                        id='sewingFactoryNotes'
                        name='sewingFactoryNotes'
                        prompt='Notes'
                        value={newNotionFact.notionFactoryNotes}
                        change={event => newNotFactChangeInput(event)}
                    />
                </FormPopUp>

                <FormPopUp
                    id={formData.manufacturing.certifications.id} 
                    status={notCertPopUpStatus()}
                    title={formData.manufacturing.newCertification.title}
                    click={() => handleNotCertClose()}
                    buttonText={formData.manufacturing.newCertification.submitButton}
                >
                    <FormPromptWithSub prompt='Add a certification' promptSubtitle='' />
                    <FormTextInput 
                        id={formData.manufacturing.newCertification.certName.id}
                        name='newCertName'
                        prompt={formData.manufacturing.newCertification.certName.prompt} 
                        value={newNotCert.newCertName}
                        change={event => newNotCertChangeInput(event)} 
                    />
                    <FormUrlInput
                        id={formData.manufacturing.newCertification.certWebsite.id}
                        name='newCertWebsite'
                        prompt={formData.manufacturing.newCertification.certWebsite.prompt}
                        value={newNotCert.newCertWebsite}
                        change={event => newNotCertChangeInput(event)}
                    />
                </FormPopUp>
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => setPage(currentPage - 1)} nextButton={() => setPage(currentPage + 1)} />
        </div>

        
    )    

    // PERMITTED CATEGORIES
    const initialPCatChecks = formData.permittedCategories.categoryOptions.map(cert => [cert.id, false])
    const [pCatChecks, setPCatChecks] = useState(Object.fromEntries(initialPCatChecks))
    const pCatChange = event => {
        setPCatChecks({...pCatChecks, [event.target.id]: !pCatChecks[event.target.id]})
    }

    const permittedCategories = (
        <div>
            <FormPage title={formData.permittedCategories.pageTitle}>
                <FormPromptWithSub
                    prompt={formData.permittedCategories.pagePrompt.prompt} 
                    promptSubtitle={formData.permittedCategories.pagePrompt.promptSubtitle} 
                />

                <FormCheckboxSection 
                    options={formData.permittedCategories.categoryOptions}
                    check={pCatChecks}
                    change={event => pCatChange(event)}
                />
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => setPage(currentPage - 1)} nextButton={() => setPage(currentPage + 1)}/>
        </div>
    )

    // PROHIBITED FIBERS
    const initialPFiberChecks = formData.prohibitedFibers.fiberOptions.map(fiber => [fiber.id, false])
    const [pFiberChecks, setPFiberChecks] = useState(Object.fromEntries(initialPFiberChecks))

    const pFiberChange = event => {
        setPFiberChecks({...pFiberChecks, [event.target.id]: !pFiberChecks[event.target.id]})
    }

    const prohibitedFibers = (
        <div>
            <FormPage title={formData.prohibitedFibers.pageTitle}>
                <FormPromptWithSub
                    prompt={formData.prohibitedFibers.pagePrompt.prompt} 
                    promptSubtitle={formData.prohibitedFibers.pagePrompt.promptSubtitle} 
                />

                <FormCheckboxSection 
                    options={formData.prohibitedFibers.fiberOptions}
                    check={pFiberChecks}
                    change={event => pFiberChange(event)}
                />
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => setPage(currentPage - 1)} nextButton={() => setPage(currentPage + 1)}/>
        </div>
    )

    // SIZES
    const allSizeOptions = []
    formData.sizes.sizeSections.map(section => {
        const sectionOptions = section.checkboxOptions.map(opt => [opt.id, false])
        allSizeOptions.push(...sectionOptions)
    })

    const [sizeChecks, setSizeChecks] = useState(Object.fromEntries(allSizeOptions))


    const sizeChange = event => {
        setSizeChecks({...sizeChecks, [event.target.id]: !sizeChecks[event.target.id]})
    }

    const sizes = (
        <div>
            <FormPage title={formData.sizes.pageTitle}>
                <FormPromptWithSub 
                    prompt={formData.sizes.pagePrompt.prompt} 
                    promptSubtitle={formData.sizes.pagePrompt.promptSubtitle}
                />

                <FormCheckboxSection 
                    prompt={formData.sizes.sizeSections[0].prompt} 
                    options={formData.sizes.sizeSections[0].checkboxOptions}
                    check={sizeChecks}
                    change={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={formData.sizes.sizeSections[1].prompt} 
                    options={formData.sizes.sizeSections[1].checkboxOptions}
                    check={sizeChecks}
                    change={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={formData.sizes.sizeSections[2].prompt} 
                    options={formData.sizes.sizeSections[2].checkboxOptions}
                    check={sizeChecks}
                    change={event => sizeChange(event)}
                />

                <FormCheckboxSection 
                    prompt={formData.sizes.sizeSections[3].prompt} 
                    options={formData.sizes.sizeSections[3].checkboxOptions}
                    check={sizeChecks}
                    change={event => sizeChange(event)}
                />
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => setPage(currentPage - 1)} nextButton={() => setPage(currentPage + 1)}/>
        </div>
    )

    const start = (
        <div>
            <FormPage title='Add a Product'>
                <FormButton buttonText='START' click={() => setPage(currentPage + 1)}/>
            </FormPage>
            <NPFFooter buttons='next' previousButton={() => setPage(currentPage - 1)} nextButton={() => setPage(currentPage + 1)} />
        </div>
    )

    const formPages = [
        start,
        prohibitedFibers,
        permittedCategories,
        // notPermitted,
        brand,
        newProduct,
        sizes,
        colors,
        images,
        manufacturing,
        fabricsQuestion,
        primFabric,
        secFabric,
        linFabric,
        notions,
        finish
    ]

    return (
        <div className='NewProductForm'>
                <Header />
                {formPages[currentPage]}
        </div>
    )
}

export default NewProductForm;
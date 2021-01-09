import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/react-fontawesome'
import countries from '../COUNTRIES'
import currencies from '../CURRENCIES'
import sizeData from '../SIZES'
import Header from '../Header/Header'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import NPFBrand from '../NPFBrand/NPFBrand'
import NPFColors from '../NPFColors/NPFColors'
import NPFFooter from '../NPFFooter/NPFFooter'
import formData from '../FORM_DATA'
import NPFManufacturing from '../NPFManufacturing/NPFManufacturing'
import NPFFabrics from '../NPFFabrics/NPFFabrics'
import NPFFabricsQuestion from '../NPFFabricsQuestion/NPFFabricsQuestion'
import NPFImages from '../NPFImages/NPFImages'
import NPFNotions from '../NPFNotions/NPFNotions'
import NPFNewProduct from '../NPFNewProduct/NPFNewProduct'
import NPFPermittedCategories from '../NPFPermittedCategories/NPFPermittedCategories'
import NPFProhibFibers from '../NPFProhibFibers/NPFProhibFibers'
import NPFSizes from '../NPFSizes/NPFSizes'
import './NewProductForm.css'

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
    const [brandId, setBrandId] = useState(1)

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

    // FABRICS
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

    // FABRICS    
        // SECONDARY FABRIC STATE
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

    // FABRICS
        // LINING FABRIC STATE
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

    // NEW PRODUCT
    const [newProductFields, setNewProductFields] = useState({
        productName: '', 
        productUrl: '' ,
        productCategory: '',
        featureImageUrl: '',
        productCurrency: '',
        price: '',
        wash: '',
        dry: ''
    })


    // NOTIONS
    const initialNotCertChecks = formData.manufacturing.certifications.options.map(cert => [cert.id, false])
    const [notionFields, setNotionFields] = useState([
        {
            notionTypeId: '',
            notionMaterialTypeId: '',
            notionLocationId: '',
            notionMaterialOriginId: '',
            notionFactoryId: '',
            notionNotes: '',
            notionCertifications: Object.fromEntries(initialNotCertChecks)
        }
    ])
    const [notTypePopUp, setNotTypePopUp] = useState(false)
    const [notMatPopUp, setNotMatPopUp] = useState(false)
    const [notFactPopUp, setNotFactPopUp] = useState(false)
    const [notCertPopUp, setNotCertPopUp] = useState(false)
    const [newNotionFact, setNewNotionFact] = useState({
        notionFactoryName: '',
        notionFactoryLocation: '',
        notionFactoryWebsite: '',
        notionFactoryNotes: ''
    })
    const [newNotCert, setNewNotCert] = useState({
        newCertName: '',
        newCertWebsite: ''
    })

    // PERMITTED CATEGORIES
    const initialPCategories = formData.permittedCategories.categoryOptions.map(cert => [cert.id, false])
    const [selectedPCategories, setSelectedPCategories] = useState(Object.fromEntries(initialPCategories))

    // PROHIBITED FIBERS STATE
    const initialPFiberChecks = formData.prohibitedFibers.map(fiber => [fiber.id, false])
    const [pFiberChecks, setPFiberChecks] = useState(Object.fromEntries(initialPFiberChecks))

    // SIZES STATE
    const allSizeOptions = [
        ...sizeData.women.dressSizes.standard.map(option => [option.id, false]),
        ...sizeData.women.dressSizes.petite.map(option => [option.id, false]),
        ...sizeData.women.dressSizes.tall.map(option => [option.id, false]),
        ...sizeData.women.dressSizes.maternity.map(option => [option.id, false])
    ]

    const [selectedSizeOptions, setSelectedSizeOptions] = useState(Object.fromEntries(allSizeOptions))

    // BRAND
    const brand = (
        <NPFBrand
            currentBrandId={brandId}
            setCurrentBrandId={setBrandId}
            newBrandFields={newBrandFields}
            setNewBrandFields={setNewBrandFields}
            brands={brands}
            setBrands={setBrands}
            brandPopUp={brandPopUp}
            setBrandPopUp={setBrandPopUp}
            currentPage={currentPage}
            setBrandId={setBrandId}
            setPage={setPage}
            currencies={makeCurrencyOptions}
        />
    )
    
    // COLORS
    const colors = (
        <NPFColors
            colorFieldsets={colorFieldsets}
            setColorFieldsets={setColorFieldsets}
            currentPage={currentPage}
            setPage={setPage}
        />
    )

    // FABRICS
        // PRIMARY FABRIC PAGE

        const factories = formData.manufacturing.factory.options

        const primFabric = (
            <NPFFabrics
                id='prim'
                currentPage={currentPage}
                setPage={setPage}
                title='Primary Fabric'
                countries={makeCountryOptions}
                factories={factories}
                fabFact= {primFabFact}
                setFabFact= {setPrimFabFact}
                factPopUp= {primFactPopUp}
                setFactPopUp= {setPrimFactPopUp}
                newFact= {newPrimFact}
                setNewFact= {setNewPrimFact}
                certChecks= {primCertChecks}
                setCertChecks= {setPrimCertChecks}
                certPopUp= {primCertPopUp}
                setCertPopUp= {setPrimCertPopUp}
                newCert= {newPrimCert}
                setNewCert= {setNewPrimCert}
                millPopUp= {primMillPopUp}
                setMillPopUp= {setPrimMillPopUp}
                newMill= {newPrimMill}
                setNewMill= {setNewPrimMill}
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
                <p className='NewProductForm__big-text'>
                    That's it!
                </p>
                <Link className='NewProductForm__button-like' to='/'>HOME</Link>
            </FormPage>

            <NPFFooter 
                buttons='prev' 
                previousButton={() => setPage(currentPage - 1)} 
                nextButton={() => setPage(currentPage + 1)} 
            />
        </div>
    )

    // IMAGES
    const images = (
        <NPFImages 
            currentPage={currentPage} 
            setPage={setPage}
            colorFieldsets={colorFieldsets}
            setColorFieldsets={setColorFieldsets}
        />
    )

    // MANUFACTURING
    const manufacturing = (
        <NPFManufacturing 
            currentPage={currentPage} 
            setPage={setPage} 
            countries={makeCountryOptions}
            factories={factories}
            sewFact={sewFact}
            setSewFact={setSewFact}
            sewFactPopUp={sewFactPopUp}
            setSewFactPopUp={setSewFactPopUp}
            newSewFact={newSewFact}
            setNewSewFact={setNewSewFact}
            cutFact={cutFact}
            setCutFact={setCutFact}
            cutFactPopUp={cutFactPopUp}
            setCutFactPopUp={setCutFactPopUp}
            newCutFact={newCutFact}
            setNewCutFact={setNewCutFact}
            certChecks={certChecks}
            setCertChecks={setCertChecks}
            certPopUp={certPopUp}
            setCertPopUp={setCertPopUp}
            newCert={newCert}
            setNewCert={setNewCert}
            additionalNotes={additionalNotes}
            setAdditionalNotes={setAdditionalNotes}
        />
    )

    // NEW PRODUCTS
    const newProduct = (
        <NPFNewProduct 
            currencies={makeCurrencyOptions}
            currentPage={currentPage}
            newProductFields={newProductFields}
            setNewProductFields={setNewProductFields}
            setPage={setPage}
        />
    )

    // NOT PERMITTED
    const notPermitted = (
        <div>
            <FormPage>
                <p className='NewProductForm__big-text'>
                    {formData.notPermitted.message}
                </p>

                <FormButton 
                    buttonText={formData.notPermitted.buttons[1].text}
                    handleClick={() => setPage(0)}
                />

                <Link 
                    className='NewProductForm__button-like'
                    to={formData.notPermitted.buttons[0].link}>{formData.notPermitted.buttons[0].text}
                </Link>
            </FormPage>

            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => setPage(currentPage - 1)} 
                nextButton={() => setPage(currentPage + 1)} 
            />
        </div>
    )

    // NOTIONS    
    const notions = (
        <NPFNotions
            notTypePopUp={notTypePopUp}
            setNotTypePopUp={setNotTypePopUp}
            notMatPopUp={notMatPopUp}
            setNotMatPopUp={setNotMatPopUp}
            notFactPopUp={notFactPopUp}
            setNotFactPopUp={setNotFactPopUp}
            notCertPopUp={notCertPopUp}
            setNotCertPopUp={setNotCertPopUp}
            newNotionFact={newNotionFact}
            setNewNotionFact={setNewNotionFact}
            notionFields={notionFields}
            setNotionFields={setNotionFields}
            newNotCert={newNotCert}
            setNewNotCert={setNewNotCert}
            countries={makeCountryOptions}
            initialNotCertChecks={initialNotCertChecks}
            currentPage={currentPage}
            setPage={setPage}
        />
    )  

    // PERMITTED CATEGORIES
    const pCatChange = event => {
        setSelectedPCategories({...selectedPCategories, [event.target.id]: !selectedPCategories[event.target.id]})
    }

    const permittedCategories = (
        <NPFPermittedCategories
            selectedOptions={selectedPCategories}
            handleChange={event => pCatChange(event)}
            currentPage={currentPage}
            setPage={setPage}
        />
    )

    // PROHIBITED FIBERS
    const pFiberChange = event => {
        setPFiberChecks({...pFiberChecks, [event.target.id]: !pFiberChecks[event.target.id]})
    }

    const prohibitedFibers = (
        <NPFProhibFibers
            selectedOptions={pFiberChecks}
            handleChange={event => pFiberChange(event)}
            currentPage={currentPage}
            setPage={setPage}
        />
    )

    // SIZES
    const sizes = (
        <NPFSizes
            selectedSizeOptions={selectedSizeOptions}
            setSelectedSizeOptions={setSelectedSizeOptions}
            currentPage={currentPage}
            setPage={setPage}
        />
    )

    const start = (
        <div>
            <FormPage title='Add a Product'>
                <FormButton buttonText='START' handleClick={() => setPage(currentPage + 1)}/>
            </FormPage>

            <NPFFooter 
                buttons='next' 
                previousButton={() => setPage(currentPage - 1)} 
                nextButton={() => setPage(currentPage + 1)}
            />
        </div>
    )

    const formPages = [
        start,
        prohibitedFibers,
        permittedCategories,
        notPermitted,
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

export default NewProductForm
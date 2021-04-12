import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/react-fontawesome'
import countries from '../COUNTRIES'
import currencies from '../CURRENCIES'
import formData from '../FORM_DATA'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import NPFBrand from '../NPFBrand/NPFBrand'
import NPFColors from '../NPFColors/NPFColors'
import NPFFooter from '../NPFFooter/NPFFooter'
import NPFFabrics from '../NPFFabrics/NPFFabrics'
import NPFFabricsQuestion from '../NPFFabricsQuestion/NPFFabricsQuestion'
import NPFImages from '../NPFImages/NPFImages'
import NPFManufacturing from '../NPFManufacturing/NPFManufacturing'
import NPFNewProduct from '../NPFNewProduct/NPFNewProduct'
import NPFNotions from '../NPFNotions/NPFNotions'
import NPFPermittedCategories from '../NPFPermittedCategories/NPFPermittedCategories'
import NPFProhibFibers from '../NPFProhibFibers/NPFProhibFibers'
import NPFSizes from '../NPFSizes/NPFSizes'
import NPFSubmit from '../NPFSubmit/NPFSubmit'
import config from '../config'
import './NewProductForm.css'

const formatCountries = countries.map((country, index) => {
    return { id: index, text: country.text }
})

const makeCurrencyOptions = currencies.map((currency, index) => {
    return {
        id: index + 1, 
        text: `${currency.code} - ${currency.name_plural} (${currency.symbol_native})`,
        value: index + 1 
    }
})

const NewProductForm = props => {
    const { certificationList, setCertificationList } = props
    const [factoryList, setFactoryList] = useState([])
    const [fiberTypeList, setFiberTypeList] = useState([])
    const [notionTypeList, setNotionTypeList] = useState([])

    useEffect(() => {
        const getRequestParams = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }
        
        const getFactories = () => {
          fetch(`${config.API_URL}/api/factories`, getRequestParams)
            .then(response => {
                if (response.status >= 400) {
                    console.log('There was a problem.  Status code: ' + response.status)
                    throw new Error("Server responded with an error!")
                }
                return response.json()
            })
            .then(factoryArray => {
                setFactoryList(factoryArray)
            })
        }

        const getFiberTypes = () => {
            fetch(`${config.API_URL}/api/fabrics/fiber-types`, getRequestParams)
                .then(response => {
                    if (response.status >= 400) {
                        console.log('There was a problem.  Status code: ' + response.status)
                        throw new Error('Server responded with an error!')
                    }
                    return response.json()
                })
                .then(fiberTypeList => {
                    setFiberTypeList(fiberTypeList)
                })
        }

        const getNotionsTypes = () => {
            fetch(`${config.API_URL}/api/fabrics/notion-types`, getRequestParams)
                .then(response => {
                    if (response.status >= 400) {
                        console.log('There was a problem.  Status code: ' + response.status)
                        throw new Error("Server responded with an error!")
                    }
                    return response.json()
                })
                .then(notionTypeArray => {
                    setNotionTypeList(notionTypeArray)
                })
            }
    
        getFactories()
        getFiberTypes()
        getNotionsTypes()
    }, [])

// STATE
    // FORM PAGE
    const [currentPage, setPage] = useState(0)

    // BRAND STATE
    const [brandList, setBrandList] = useState([
        // {
        //     approved_by_admin: true,
        //     date_published: "2021-02-22T03:09:41.039Z",
        //     english_name: "Sézane",
        //     home_currency: 1,
        //     id: 0,
        //     size_system: 2,
        //     website: "https://www.sezane.com/fr"
        // },
        // {
        //     approved_by_admin: true,
        //     date_published: "2021-02-22T03:09:41.039Z",
        //     english_name: "Sézane",
        //     home_currency: 1,
        //     id: 1,
        //     size_system: 2,
        //     website: "https://www.sezane.com/fr"
        // }
    ])
    const [brandPopUp, setBrandPopUp] = useState(false)
    const [newBrandFields, setNewBrandFields] = useState(
        {
            brandName: '',
            brandWebsite: '',
            brandCurrency: 0,
            brandSizeSystem: 0
        }
    )

    // CERTIFICATIONS
    const [initCerts, setInitCerts] = useState({})

    // COLOR AND IMAGE STATE
    const [colorFieldsets, setColorFieldsets] = useState([
        { 
            name: '',
            descriptionId: 0,
            swatchUrl: '',
            imageUrls: ['']
        }
    ])

    // FABRICS QUESTION STATE
    const [primCheck, setPrimCheck] = useState(true)
    const [secCheck, setSecCheck] = useState(false)
    const [linCheck, setLinCheck] = useState(false)

    // FABRICS
        const [newCert, setNewCert] = useState({
            name: '',
            website: ''
        })
        const [newFact, setNewFact] = useState({
            name: '',
            countryId: '',
            website: '',
            notes: ''
        })
        const [newFiber, setNewFiber] = useState({
            name: ''
        })
        const [newMill, setNewMill] = useState({
            name: '',
            countryId: '',
            website: '',
            notes: ''
        })
        const [certPopUp, setCertPopUp] = useState(false)
        const [factPopUp, setFactPopUp] = useState(false)
        const [fiberPopUp, setFiberPopUp] = useState(false)
        const [millPopUp, setMillPopUp] = useState(false)

        // PRIMARY FABRIC STATE
        const [primCertChecks, setPrimCertChecks] = useState({})
        const [primFabFact, setPrimFabFact] = useState({
            dyeFinCountryId: '',
            dyeFinId: '',
            dyeFinNotes: '',
            wovKnitCountryId: '',
            wovKnitId: '',
            wovKnitNotes: ''
        })
        const [primFiberFieldsets, setPrimFiberFieldsets] = useState([
            {
                fiberTypeId: 0,
                percentage: '',
                originId: 0,
                producerId: 0,
                producerNotes: '',
                certIds: []
            }
        ])

        // SECONDARY FABRIC STATE
        const [secCertChecks, setSecCertChecks] = useState({})
        const [secFabFact, setSecFabFact] = useState({
            dyeFinCountryId: '',
            dyeFinId: '',
            dyeFinNotes: '',
            wovKnitCountryId: '',
            wovKnitId: '',
            wovKnitNotes: ''
        })
        const [secFiberFieldsets, setSecFiberFieldsets] = useState([
            {
                fiberTypeId: 0,
                percentage: '',
                originId: 0,
                producerId: 0,
                producerNotes: '',
                certIds: []
            }
        ])

        // LINING FABRIC STATE
        const [linCertChecks, setLinCertChecks] = useState({})
        const [linFabFact, setLinFabFact] = useState({
            dyeFinCountryId: '',
            dyeFinId: '',
            dyeFinNotes: '',
            wovKnitCountryId: '',
            wovKnitId: '',
            wovKnitNotes: ''
        })
        const [linFiberFieldsets, setLinFiberFieldsets] = useState([
            {
                fiberTypeId: 0,
                percentage: '',
                originId: 0,
                producerId: 0,
                producerNotes: '',
                certIds: []
            }
        ])

    // MANUFACTURING STATE
    const [sewFact, setSewFact] = useState({countryId: '', factoryId: ''})
    const [cutFact, setCutFact] = useState({countryId: '', factoryId: ''})
    const [manCertChecks, setManCertChecks] = useState({})
    const [cmtNotes, setCmtNotes] = useState('')

    // NEW PRODUCT
    const [newProductFields, setNewProductFields] = useState({
        name: '', 
        url: '' ,
        categoryId: 0,
        featureImageUrl: '',
        currencyId: 0,
        price: '',
        washId: 0,
        dryId: 0
    })
    const [newProductId, setNewProductId] = useState('')

    // NOTIONS
    const [notionFields, setNotionFields] = useState([])
    const [notionTypePopUp, setNotionTypePopUp] = useState(false)
    const [materialPopUp, setMaterialPopUp] = useState(false)
    const [newNotionType, setNewNotionType] = useState('')
    const [newNotionMaterial, setNewNotionMaterial] = useState('')

    // SET INITIAL CHECKBOX STATE VALUES
        // CERTIFICATION CHECKBOX VALUES
        React.useEffect(() => {
            const initialCertChecks = certificationList.map(c => [c.id, false])
            const initialObject = Object.fromEntries(initialCertChecks)
            setInitCerts(initialObject)
            setManCertChecks(initialObject)
            setPrimCertChecks(initialObject)
            setSecCertChecks(initialObject)
            setLinCertChecks(initialObject)
        }, [])
        
        // PERMITTED CATEGORIES
        const initialPCategories = formData.permittedCategories.categoryOptions.map(cert => [cert.id, false])
        const [selectedPCategories, setSelectedPCategories] = useState(Object.fromEntries(initialPCategories))

        // PROHIBITED FIBERS STATE
        const initialPFiberChecks = formData.prohibitedFibers.map(fiber => [fiber.id, false])
        const [pFiberChecks, setPFiberChecks] = useState(Object.fromEntries(initialPFiberChecks))

        // SIZES CHECKBOX VALUES
        const brandInfo = brandList.length >= 1 ? brandList.find(brand => brand.id === props.brandId) : null
        const sizeSystem = brandInfo ? brandInfo.size_system : 1
        
        // const sizeSystem = brandInfo.size_system
        const allSizeIds = () => {
            const sizeArray = []

            for (let i=1; i<=420; i++) {
                sizeArray.push([i, false])
            }

            const sizeObject = Object.fromEntries(sizeArray)

            return sizeObject
        }
        const [selectedSizeOptions, setSelectedSizeOptions] = useState(allSizeIds())

// SUBMIT FORM
    const submitProduct = () => {

    // PREPARE DATA
        const fabricArray = []
        const certArray = certObject => {
            const checkedCerts = []

            for (const [key, value] of certObject) {
                if (value) {
                    checkedCerts.push(key)
                }
            }
        }

        if (primCheck) {
            fabricArray.push({
                certs: certArray(primCertChecks),
                fabric_details: primFabFact,
                fiber_array: primFiberFieldsets,
                relationship: "primary"
            })
        }

        if (secCheck) {
            fabricArray.push({
                certs: certArray(secCertChecks),
                fabric_details: secFabFact,
                fiber_array: secFiberFieldsets,
                relationship: "secondary"
            })
        }

        if (linCheck) {
            fabricArray.push({
                certs: certArray(linCertChecks),
                fabric_details: linFabFact,
                fiber_array: linFiberFieldsets,
                relationship: "lining"
            })
        }

        const manCertArray = []

        for (const [key, value] of Object.entries(manCertChecks)) {
            if (value) {
                manCertArray.push(key)
            }
        }

        const sizeArray = []

        for (const [key, value] of Object.entries(selectedSizeOptions)) {
            if (value) {
                sizeArray.push(key)
            }
        }

        if (notionFields > 1) {

            notionFields.forEach(notion => {
                const checkedCerts = []

                for (const [key, value] of notion.certIds) {
                    if (value) {
                        checkedCerts.push(key)
                    }
                }

                notion.certIds = checkedCerts
            })
        }

        const data = {
            "english_name": newProductFields.name,
            "brand_id": props.brandId,
            "category_id": props.newProductFields.categoryId,
            "product_url": props.newProductFields.url,
            "feature_image_url": props.newProductFields.featureImageUrl,
            "multiple_color_options": props.colorFieldsets.length > 1 ? true : false,
            "cost_in_home_currency": props.newProductFields.price,
            "wash_id": Number(props.newProductFields.washId),
            "dry_id": Number(props.newProductFields.dryId),
            "cmt_notes": cmtNotes,
            "color_fieldsets": colorFieldsets,
            "sew_fact": sewFact,
            "cut_fact": cutFact,
            "man_cert_checks": manCertArray,
            "fabrics": fabricArray,
            "notions": notionFields,
            "selected_sizes": sizeArray,
            "approved_by_admin": false
        }

    // CHECK ALL REQUIRED FIELDS ARE INCLUDED
        const isObject = variable => (
            Object.prototype.toString.call(variable) === '[object Object]'
        )
        
        for (const [key, value] of Object.entries(data)) {
            if (value === undefined || 0) {
                throw new Error(`'${key}' is a required field.  Please enter a value and submit the form again.`)
            }

            if (isObject(value)) {
                for (const [subKey, subValue] of Object.entries(value)) {
                    if (subValue === undefined || 0) {
                        throw new Error(`'${key}: ${subKey}' is a required field.  Please enter a value and submit the form again.`)
                    }
                }
            }
        }

    // POST THE DATA
        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch(`${config.API_URL}/api/products/product-form`,
            postRequestParams
        )
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Server responded with an error!')
            }
            return response.json()
        })
        .then(responseJson => {
            console.log('responseJson', responseJson)
        })
}

// FORM PAGES
    // BRAND
    const brand = (
        <NPFBrand
            currentPage={currentPage}
            setPage={setPage}
            currentBrandId={props.brandId}
            setCurrentBrandId={props.setBrandId}
            newBrandFields={newBrandFields}
            setNewBrandFields={setNewBrandFields}
            newProductFields={newProductFields}
            setNewProductFields={setNewProductFields}
            brandList={brandList}
            setBrandList={setBrandList}
            brandPopUp={brandPopUp}
            setBrandPopUp={setBrandPopUp}
            setBrandId={props.setBrandId}
            currencies={makeCurrencyOptions}
        />
    )
    
    // COLORS
    const colors = (
        <NPFColors
            currentPage={currentPage}
            setPage={setPage}
            colorFieldsets={colorFieldsets}
            setColorFieldsets={setColorFieldsets}
        />
    )

    // FABRICS
    const fabricProps = {
        currentPage: currentPage,
        setPage: setPage,
        countries: formatCountries,
        certificationList: certificationList,
        initCerts: initCerts,
        setCertificationList: setCertificationList,
        factoryList: factoryList,
        setFactoryList: setFactoryList,
        fiberTypeList: fiberTypeList,
        setFiberTypeList: setFiberTypeList,
        certPopUp: certPopUp,
        setCertPopUp: setCertPopUp,
        factPopUp: factPopUp,
        setFactPopUp: setFactPopUp,
        fiberPopUp: fiberPopUp,
        setFiberPopUp: setFiberPopUp,
        millPopUp: millPopUp,
        setMillPopUp: setMillPopUp,
        newCert: newCert,
        setNewCert: setNewCert,
        newFact: newFact,
        setNewFact: setNewFact,
        newFiber: newFiber,
        setNewFiber: setNewFiber,
        newMill: newMill,
        setNewMill: setNewMill,
    }
        // PRIMARY FABRIC PAGE
        const primFabric = (
            <NPFFabrics
                fabricProps={fabricProps}
                id='prim'
                title='Primary Fabric'
                fabFact={primFabFact}
                setFabFact={setPrimFabFact}
                fiberFieldsets={primFiberFieldsets}
                setFiberFieldsets={setPrimFiberFieldsets}
                certChecks={primCertChecks}
                setCertChecks={setPrimCertChecks}
            />
        )

        // SECONDARY FABRIC PAGE
        const secFabric = (
            <NPFFabrics
                fabricProps={fabricProps}
                id='sec'
                title='Secondary Fabric'
                fabFact={secFabFact}
                setFabFact={setSecFabFact}
                fiberFieldsets={secFiberFieldsets}
                setFiberFieldsets={setSecFiberFieldsets}
                certChecks={secCertChecks}
                setCertChecks={setSecCertChecks}
            />
        )

        // LINING FABRIC PAGE
        const linFabric = (
            <NPFFabrics
                fabricProps={fabricProps}
                id='lin'
                title='Lining Fabric'
                fabFact={linFabFact}
                setFabFact={setLinFabFact}
                fiberFieldsets={linFiberFieldsets}
                setFiberFieldsets={setLinFiberFieldsets}
                certChecks={linCertChecks}
                setCertChecks={setLinCertChecks}
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
            brandId={props.brandId}
            newProductFields={newProductFields}
            newProductId={newProductId}
            setNewProductId={setNewProductId}
            colorFieldsets={colorFieldsets}
            setColorFieldsets={setColorFieldsets}
        />
    )

    // MANUFACTURING
    const manufacturing = (
        <NPFManufacturing
            currentPage={currentPage} 
            setPage={setPage} 
            brandId={props.brandId}
            cutFact={cutFact}
            setCutFact={setCutFact}
            sewFact={sewFact}
            setSewFact={setSewFact}
            cmtNotes={cmtNotes}
            setCmtNotes={setCmtNotes}
            certChecks={manCertChecks}
            setCertChecks={setManCertChecks}
            fabricProps={fabricProps}
        />
    )

    // NEW PRODUCTS
    const newProduct = (
        <NPFNewProduct
            currentPage={currentPage}
            setPage={setPage}
            brandId={props.brandId}
            brandList={brandList}
            setBrandList={setBrandList}
            newProductFields={newProductFields}
            setNewProductFields={setNewProductFields}
        />
    )

    // NOT PERMITTED
    const notPermitted = (
        <div>
            <FormPage>
                <p className='NewProductForm__big-text'>
                    Veronaut does accept products made with synthetic fabrics, with exceptions for outerwear, shoes, and swimwear
                </p>

                <FormButton 
                    buttonText={formData.notPermitted.buttons[1].text}
                    handleClick={() => setPage(0)}
                />

                <Link 
                    className='NewProductForm__button-like'
                    to='/about'>
                        FIND OUT WHY
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
            fabricProps={fabricProps}
            materialPopUp={materialPopUp}
            setMaterialPopUp={setMaterialPopUp}
            fiberTypeList={fiberTypeList}
            setFiberTypeList={setFiberTypeList}
            newNotionMaterial={newNotionMaterial}
            setNewNotionMaterial={setNewNotionMaterial}
            newNotionType={newNotionType}
            setNewNotionType={setNewNotionType}
            notionFields={notionFields}
            setNotionFields={setNotionFields}
            notionTypeList={notionTypeList}
            setNotionTypeList={setNotionTypeList}
            notionTypePopUp={notionTypePopUp}
            setNotionTypePopUp={setNotionTypePopUp}
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
            currentPage={currentPage}
            setPage={setPage}
            selectedOptions={pFiberChecks}
            handleChange={event => pFiberChange(event)}
        />
    )

    // SIZES
    const sizes = (
        <NPFSizes
            currentPage={currentPage}
            setPage={setPage}
            brandId={props.brandId}
            brandList={brandList}
            category={newProductFields.category}
            newProductId={newProductId}
            sizeSystem={sizeSystem}
            selectedSizeOptions={selectedSizeOptions}
            setSelectedSizeOptions={setSelectedSizeOptions}
        />
    )

    const start = (
        <div>
            <FormPage title='Add a Product'>
                <FormButton buttonText='START' handleClick={() => setPage(currentPage + 1)}/>
            </FormPage>
        </div>
    )

    const submit = (
        <NPFSubmit
            currentPage={currentPage}
            setPage={setPage}
            selectedSizeOptions={selectedSizeOptions}
            submitProduct={submitProduct}
        />
    )

    const formPages = [
        start,
        brand,
        newProduct,
        manufacturing,
        colors,
        images,
        sizes,
        fabricsQuestion,
        primFabric,
        secFabric,
        linFabric,
        notions,
        submit,
        finish,
        prohibitedFibers,
        permittedCategories,
        notPermitted
    ]

    if (Object.keys(manCertChecks) < 1) {
        return <div> Loading... </div>
    } else if (Object.keys(manCertChecks) < 1) {
        return <div> Loading... </div>
    } else if (Object.keys(manCertChecks) < 1) {
        return <div> Loading... </div>
    } else if (Object.keys(manCertChecks) < 1) {
        return <div> Loading... </div>
    } else {
        return (
            <div className='NewProductForm'>
                {formPages[currentPage]}
            </div>
        )
    }
}

NewProductForm.defaultProps = {
    certificationList: [],
    setCertificationList: () => {},
    brandId: 0,
    setBrandId: () => {}
}

export default NewProductForm
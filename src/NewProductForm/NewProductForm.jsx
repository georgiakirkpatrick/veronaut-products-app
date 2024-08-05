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
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import config from '../config'
import TokenService from '../services/token-service'
import './NewProductForm.css'

const makeCurrencyOptions = currencies.map((currency, index) => {
  return {
    id: index + 1,
    text: `${currency.code} - ${currency.name_plural} (${currency.symbol_native})`,
    value: index + 1
  }
})

const countryQty = countries.length
const sliceCountries = countries.slice(1, countryQty)
const formatedCountries = sliceCountries.map((country, index) => ({
  id: index + 2,
  text: country.text,
  value: index + 2
}))

const dropDownCountries = [
  {
    id: 0,
    text: 'Select a country',
    value: 0
  },
{
    id: 1,
    text: 'Not disclosed',
    value: 1
  },
  ...formatedCountries
]

const NewProductForm = ({
  brandArray = [],
  brandId = 0,
  certArray = [],
  factArray = [],
  setBrandArray = () => {},
  setBrandId = () => {},
  setCertArray = () => {},
  setFactArray = () => {}
}) => {
  const [fiberTypeArray, setFiberTypeArray] = useState([])
  const [notionTypeArray, setNotionTypeArray] = useState([])

  useEffect(() => {
    const getRequestParams = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }

    const getFiberTypes = () => {
      fetch(`${import.meta.env.development.VITE_API_URL}/api/fibers/fiber-types`, getRequestParams)
        .then(response => {
          if (response.status >= 400) {
            console.log('There was a problem.  Status code: ' + response.status)
            throw new Error('Server responded with an error!')
          }

          return response.json()
        })
        .then(fiberTypeArray => {
          setFiberTypeArray(fiberTypeArray)
        })
    }

    const getNotionTypes = () => {
      fetch(`${import.meta.env.development.VITE_API_URL}/api/notions/notion-types`, getRequestParams)
        .then(response => {
          if (response.status >= 400) {
            console.log('There was a problem.  Status code: ' + response.status)
            throw new Error("Server responded with an error!")
          }
          return response.json()
        })
        .then(notionTypeArray => {
          setNotionTypeArray(notionTypeArray)
        })
    }
    getFiberTypes()
    getNotionTypes()
  }, [])

// STATE
  // FORM PAGE
  const [currentPage, setPage] = useState(0)

  // BRAND STATE
  const [brandPopUp, setBrandPopUp] = useState(false)
  const [newBrandFields, setNewBrandFields] = useState(
    {
      name: '',
      website: '',
      currencyId: 0,
      sizeSystemId: 0
    }
  )

  // CERTIFICATIONS
  const [initCerts, setInitCerts] = useState({})
  const initialCertChecks = certArray.map(c => [c.text, false])
  const initialObject = Object.fromEntries(initialCertChecks)

  // COLOR AND IMAGE STATE
  const [colorFieldsets, setColorFieldsets] = useState([
    { 
      name: '',
      descriptionId: 0,
      // swatchUrl: '',
      imageUrls: ['']
    }
  ])

  // FABRICS QUESTION STATE
  const [primCheck, setPrimCheck] = useState(true)
  const [secCheck, setSecCheck] = useState(false)
  const [linCheck, setLinCheck] = useState(false)

  // FABRICS
  const [primPageTurns, setPrimPageTurns] = useState(3)
  const [secPageTurns, setSecPageTurns] = useState(2)
  const linPageTurns = 1
  const [backPageTurns, setBackPageTurns] = useState(3)
  const [newCert, setNewCert] = useState({
    name: '',
    website: ''
  })
  const [newFact, setNewFact] = useState({
    name: '',
    countryId: 0,
    website: '',
    notes: ''
  })
  const [newFiber, setNewFiber] = useState({
    name: ''
  })

  const [newMill, setNewMill] = useState({
    name: '',
    countryId: 0,
    website: '',
    notes: ''
  })
  const [newProducer, setNewProducer] = useState({
    name: '',
    countryId: 0,
    website: '',
    notes: ''
  })
  const [certPopUp, setCertPopUp] = useState(false)
  const [dyeFactPopUp, setDyeFactPopUp] = useState(false)
  const [fiberPopUp, setFiberPopUp] = useState(false)
  const [millPopUp, setMillPopUp] = useState(false)
  const [producerPopUp, setProducerPopUp] = useState(false)

  // PRIMARY FABRIC STATE
  const [primCertChecks, setPrimCertChecks] = useState({...initialObject})

  const [primFabFact, setPrimFabFact] = useState({
    dyeFinCountryId: 0,
    dyeFinId: 0,
    dyeFinNotes: '',
    wovKnitCountryId: 0,
    wovKnitId: 0,
    wovKnitNotes: ''
  })

  const [primFiberFieldsets, setPrimFiberFieldsets] = useState([
    {
      fiberTypeId: 0,
      percentage: 0,
      originId: 0,
      producerId: 0,
      producerNotes: '',
      certIds: {...initialObject}
    }
  ])

  // SECONDARY FABRIC STATE
  const [secCertChecks, setSecCertChecks] = useState({...initialObject})

  const [secFabFact, setSecFabFact] = useState({
    dyeFinCountryId: 0,
    dyeFinId: 0,
    dyeFinNotes: '',
    wovKnitCountryId: 0,
    wovKnitId: 0,
    wovKnitNotes: ''
  })
  const [secFiberFieldsets, setSecFiberFieldsets] = useState([
    {
      fiberTypeId: 0,
      percentage: 0,
      originId: 0,
      producerId: 0,
      producerNotes: '',
      certIds: {...initialObject}
    }
  ])

  // LINING FABRIC STATE
  const [linBackPageTurns, setLinBackPageTurns] = useState(1)
  const [linCertChecks, setLinCertChecks] = useState({...initialObject})

  const [linFabFact, setLinFabFact] = useState({
    dyeFinCountryId: 0,
    dyeFinId: 0,
    dyeFinNotes: '',
    wovKnitCountryId: 0,
    wovKnitId: 0,
    wovKnitNotes: ''
  })
  const [linFiberFieldsets, setLinFiberFieldsets] = useState([
    {
      fiberTypeId: 0,
      percentage: 0,
      originId: 0,
      producerId: 0,
      producerNotes: '',
      certIds: {...initialObject}
    }
  ])

  // MANUFACTURING STATE
  const [sewFact, setSewFact] = useState({countryId: 0, factoryId: 0})
  const [cutFact, setCutFact] = useState({countryId: 0, factoryId: 0})
  const [cutFactPopUp, setCutFactPopUp] = useState(false)
  const [sewFactPopUp, setSewFactPopUp] = useState(false)
  const [manCertChecks, setManCertChecks] = useState(initialObject)
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

  // NOTIONS
  const [notFactPopUp, setNotFactPopUp] = useState(false)
  const [notionFields, setNotionFields] = useState([])
  const [notionTypePopUp, setNotionTypePopUp] = useState(false)
  const [materialPopUp, setMaterialPopUp] = useState(false)
  const [newNotionType, setNewNotionType] = useState('')
  const [newNotionMaterial, setNewNotionMaterial] = useState('')

  // SET INITIAL CHECKBOX STATE VALUES
    // CERTIFICATION CHECKBOX VALUES
    useEffect(() => {
      const initialCertChecks = certArray.map(c => [c.text, false])
      const initialObject = Object.fromEntries(initialCertChecks)
      setInitCerts(initialObject)
    }, [certArray])
    
    // PERMITTED CATEGORIES
    const initialPCategories = formData.permittedCategories.map(cert => [cert.id, false])
    const pCatObject = Object.fromEntries(initialPCategories)
    const [nonePCategories, setNonePCategories] = useState({101: false})
    const [pCategories, setPCategories] = useState(pCatObject)

    // PROHIBITED FIBERS STATE
    const initialPFiberChecks = formData.prohibitedFibers.map(fiber => [fiber.id, false])
    const pFibObject = Object.fromEntries(initialPFiberChecks)
    const [nonePFiber, setNonePFiber] = useState({100: false})
    const [pageTurns, setPageTurns] = useState(1)
    const [pFiberChecks, setPFiberChecks] = useState(pFibObject)

    // SIZES CHECKBOX VALUES
    const brandInfo = brandArray.length >= 1 ? brandArray.find(brand => brand.id === brandId) : null
    const sizeSystemId = brandInfo ? brandInfo.sizeSystemId : 1
    
    const allSizeIds = () => {
      const sizeArray = []

      for (let i=1; i<=420; i++) {
        sizeArray.push([i, false])
      }

      const sizeObject = Object.fromEntries(sizeArray)

      return sizeObject
    }
    const [selectedSizeOptions, setSelectedSizeOptions] = useState(allSizeIds())

  // PREPARE FORM
  // const NPFContent = () => {
  //     if (TokenService.getAuthToken()) {
  //         return <FormButton 
  //             buttonText='START'
  //             handleClick={() => setPage(currentPage + 1)}
  //         />
  //     } else {
  //         return <div className='login-links'>
  //             <p>
  //                 Want to add a product to Veronaut's product listings?
  //             </p>

  //             <p>
  //                 To get started, sign into your account or create an account now.
  //             </p>
              
  //             <Link
  //                 to='/login'>
  //                 Log in
  //             </Link>
  
  //             <Link 
  //                 to='/create-account'>
  //                 Create an account
  //             </Link>
  //         </div> 
  //     }
  // }

  // PREPARE DATA
  const selectedCertArray = certObject => {
    const checkedCerts = []

    for (const [key, value] of Object.entries(certObject)) {
      if (value) {
        checkedCerts.push(key)
      }
    }

    return checkedCerts
  }

  const formatFibers = fibFieldsets => {
    const formattedFieldsets = []

    fibFieldsets.forEach(fiber => {
      formattedFieldsets.push({
        ...fiber,
        certIds: selectedCertArray(fiber.certIds)
      })
    })

    return formattedFieldsets
  }

  const formatName = name => {
    if (name) {
      const formattedName = name.toLowerCase().split(" ")

      formattedName[0] = formattedName[0][0].toUpperCase() + formattedName[0].substr(1)

      return formattedName.join(" ")
    }
  }

  const formatUrl = url => {
    if (url) {
      return url.toLowerCase()
    }
  }

  // SUBMIT FORM
  const submitProduct = () => {
    // PREPARE DATA - COLORS
    const colorArray = []
    colorFieldsets.forEach(color => {
      const urlArray = color.imageUrls.map(url => formatUrl(url))

      colorArray.push({
        name: formatName(color.name),
        descriptionId: color.descriptionId,
        swatchUrl: urlArray[0],
        imageUrls: urlArray
      })
    })

    // PREPARE DATA - FABRICS
    const fabricArray = []
    if (primCheck) {
      fabricArray.push({
        certs: selectedCertArray(primCertChecks),
        fabric_details: primFabFact,
        fiber_array: formatFibers(primFiberFieldsets),
        relationship: "primary"
      })
    }

    if (secCheck) {
      fabricArray.push({
        certs: selectedCertArray(secCertChecks),
        fabric_details: secFabFact,
        fiber_array: formatFibers(secFiberFieldsets),
        relationship: "secondary"
      })
    }

    if (linCheck) {
      fabricArray.push({
        certs: selectedCertArray(linCertChecks),
        fabric_details: linFabFact,
        fiber_array: formatFibers(linFiberFieldsets),
        relationship: "lining"
      })
    }

    // PREPARE DATA - MANUFACTURING
    const manCertArray = []
    for (const [key, value] of Object.entries(manCertChecks)) {
      if (value) {
        manCertArray.push(key)
      }
    }

    // PREPARE DATA - NOTIONS
    const notionArray = []
    if (notionFields.length > 0) {
      notionFields.forEach(notion => {
        notionArray.push({
          ...notion,
          certIds: selectedCertArray(notion.certIds)
        })
      })
    }

    // PREPARE DATA - SIZES
    const sizeArray = []
    for (const [key, value] of Object.entries(selectedSizeOptions)) {
      if (value) {
        sizeArray.push(key)
      }
    }

const data = {
  "english_name": formatName(newProductFields.name),
  "brand_id": brandId,
  "category_id": newProductFields.categoryId,
  "product_url": formatUrl(newProductFields.url),
  "feature_image_url": formatUrl(newProductFields.featureImageUrl),
  "multiple_color_options": colorArray.length > 1 ? true : false,
  "cost_in_home_currency": newProductFields.price,
  "wash_id": Number(newProductFields.washId),
  "dry_id": Number(newProductFields.dryId),
  "cmt_sew_country": sewFact.countryId,
  "cmt_cut_country": cutFact.countryId,
  "cmt_notes": cmtNotes,
  "color_fieldsets": colorArray,
  "sew_fact": sewFact,
  "cut_fact": cutFact,
  "man_cert_checks": selectedCertArray(manCertChecks),
  "fabrics": fabricArray,
  "notions": notionArray,
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
    headers: { 
      'Content-type': 'application/json',
      'Authorization': `basic ${TokenService.getAuthToken()}`
    },
    body: JSON.stringify(data)
  }

  fetch(`${import.meta.env.development.VITE_API_URL}/api/products/product-form`,
    postRequestParams
  )
  .then(response => {
    if (response.status >= 400) {
        throw new Error('Server responded with an error!')
    }
    return response.json()
  })        
}


// FORM PAGES
  // BRAND
  const brand = (
    <NPFBrand
      brandArray={brandArray}
      brandPopUp={brandPopUp}
      currencies={makeCurrencyOptions}
      currentBrandId={brandId}
      currentPage={currentPage}
      formatName={formatName}
      formatUrl={formatUrl}
      newBrandFields={newBrandFields}
      newProductFields={newProductFields}
      pageTurns={pageTurns}
      setBrandArray={setBrandArray}
      setBrandPopUp={setBrandPopUp}
      setCurrentBrandId={setBrandId}
      setNewBrandFields={setNewBrandFields}
      setNewProductFields={setNewProductFields}
      setPage={setPage}
    />
  )
  
  // COLORS
  const colors = (
    <NPFColors
      colorFieldsets={colorFieldsets}
      currentPage={currentPage}
      formatName={formatName}
      setColorFieldsets={setColorFieldsets}
      setPage={setPage}
    />
  )

  const fabricProps = {
    certArray: certArray,
    certPopUp: certPopUp,
    countries: dropDownCountries,
    currentPage: currentPage,
    dyeFactPopUp: dyeFactPopUp,
    initCerts: initCerts,
    factArray: factArray,
    fiberPopUp: fiberPopUp,
    fiberTypeArray: fiberTypeArray,
    formatName: formatName,
    formatUrl: formatUrl,
    millPopUp: millPopUp,
    newCert: newCert,
    newFact: newFact,
    newFiber: newFiber,
    newMill: newMill,
    newProducer: newProducer,
    producerPopUp: producerPopUp,
    setCertArray: setCertArray,
    setDyeFactPopUp: setDyeFactPopUp,
    setFiberTypeArray: setFiberTypeArray,
    setFactArray: setFactArray,
    setCertPopUp: setCertPopUp,
    setFiberPopUp: setFiberPopUp,
    setInitCerts: setInitCerts,
    setMillPopUp: setMillPopUp,
    setNewCert: setNewCert,
    setNewFact: setNewFact,
    setNewFiber: setNewFiber,
    setNewMill: setNewMill,
    setNewProducer: setNewProducer,
    setPage: setPage,
    setProducerPopUp: setProducerPopUp,
    setSewFactPopUp: setSewFactPopUp,
    sewFactPopUp: sewFactPopUp
  }
      
  // PRIMARY FABRIC PAGE
  const primFabric = (
    <NPFFabrics
      certChecks={primCertChecks}
      fabFact={primFabFact}
      fabricProps={fabricProps}
      fiberFieldsets={primFiberFieldsets}
      id='prim'
      pageTurns={primPageTurns}
      setFabFact={setPrimFabFact}
      setFiberFieldsets={setPrimFiberFieldsets}
      setCertChecks={setPrimCertChecks}
      title='Primary Fabric'
    />
  )

  // SECONDARY FABRIC PAGE
  const secFabric = (
    <>
      <ScrollToTop />
      <NPFFabrics
        certChecks={secCertChecks}
        fabFact={secFabFact}
        fabricProps={fabricProps}
        fiberFieldsets={secFiberFieldsets}
        id='sec'
        setFabFact={setSecFabFact}
        setFiberFieldsets={setSecFiberFieldsets}
        setCertChecks={setSecCertChecks}
        title='Secondary Fabric'
        pageTurns={secPageTurns}
      />
    </>
  )

  // LINING FABRIC PAGE
  const linFabric = (
    <>
      <ScrollToTop />
      <NPFFabrics
        certChecks={linCertChecks}
        fabFact={linFabFact}
        fabricProps={fabricProps}
        fiberFieldsets={linFiberFieldsets}
        id='lin'
        linBackPageTurns={linBackPageTurns}
        setFabFact={setLinFabFact}
        setFiberFieldsets={setLinFiberFieldsets}
        setCertChecks={setLinCertChecks}
        title='Lining Fabric'
        pageTurns={linPageTurns}
      />
    </>    
  )

  // FABRICS QUESTION PAGE
  const fabricsQuestion = (
    <NPFFabricsQuestion
      currentPage={currentPage}
      linCheck={linCheck}
      primCheck={primCheck}
      setBackPageTurns={setBackPageTurns}
      secCheck={secCheck}
      setLinCheck={setLinCheck}
      setLinBackPageTurns={setLinBackPageTurns}
      setPage={setPage}
      setPrimCheck={setPrimCheck}
      setPrimPageTurns={setPrimPageTurns}
      setSecCheck={setSecCheck}
      setSecPageTurns={setSecPageTurns}
    />
  )

  // FINISH
  const finish = (
    <div className='NPFFinish'>
      <FormPage>
        <header>
          <h1>
            That's it!
          </h1>
        </header>

        <Link className='NewProductForm__button-like' to='/'>HOME</Link>
      </FormPage>

      <NPFFooter 
        buttons='prev'
        nextButton={() => setPage(currentPage + 1)}
        previousButton={() => setPage(currentPage - 1)}
      />
    </div>
  )

  // IMAGES
  const images = (
    <NPFImages
      colorFieldsets={colorFieldsets}
      currentPage={currentPage}
      setColorFieldsets={setColorFieldsets}
      setPage={setPage}
    />
  )

  // MANUFACTURING
  const manufacturing = (
    <NPFManufacturing
      certChecks={manCertChecks}
      cmtNotes={cmtNotes}
      currentPage={currentPage} 
      cutFact={cutFact}
      cutFactPopUp={cutFactPopUp}
      fabricProps={fabricProps}
      setCutFact={setCutFact}
      setCutFactPopUp={setCutFactPopUp}
      sewFact={sewFact}
      sewFactPopUp={sewFactPopUp}
      setCertChecks={setManCertChecks}
      setCmtNotes={setCmtNotes}
      setPage={setPage}
      setSewFact={setSewFact}
      setSewFactPopUp={setSewFactPopUp}
    />
  )

  // NEW PRODUCTS
  const newProduct = (
    <NPFNewProduct
      brandId={brandId}
      brandArray={brandArray}
      currentPage={currentPage}
      formatName={formatName}
      formatUrl={formatUrl}
      newProductFields={newProductFields}
      setNewProductFields={setNewProductFields}
      setPage={setPage}
    />
  )

  // NOT PERMITTED
  const notPermitted = (
    <div>
      <FormPage>
        <p>
          Veronaut does not accept products made with more than 10% synthetic fibers, with exceptions for the following categories: outerwear, underwear, shoes, socks and tights, and swimwear.
        </p>

        <Link 
          className='NewProductForm__button-like'
          to='/about'>
              FIND OUT WHY
        </Link>

        <FormButton 
          buttonText='SUBMIT A DIFFERENT PRODUCT'
          handleClick={() => setPage(0)}
        />
      </FormPage>

      <NPFFooter
        buttons='prev'
        previousButton={() => setPage(currentPage - 1)}
      />
    </div>
  )

  // NOTIONS
  const notions = (
    <NPFNotions
      backPageTurns={backPageTurns}
      fabricProps={fabricProps}
      fiberTypeArray={fiberTypeArray}
      materialPopUp={materialPopUp}
      newNotionMaterial={newNotionMaterial}
      newNotionType={newNotionType}
      notFactPopUp={notFactPopUp}
      notionFields={notionFields}
      notionTypeArray={notionTypeArray}
      notionTypePopUp={notionTypePopUp}
      setFiberTypeArray={setFiberTypeArray}
      setNewNotionMaterial={setNewNotionMaterial}
      setNewNotionType={setNewNotionType}
      setNotFactPopUp={setNotFactPopUp}
      setNotionTypePopUp={setNotionTypePopUp}
      setMaterialPopUp={setMaterialPopUp}
      setNotionFields={setNotionFields}
      setNotionTypeArray={setNotionTypeArray}
    />
  )

  // PERMITTED CATEGORIES
  const pCatChange = event => {
    if (pCategories[event.target.id] === false) {
      setPCategories(
        {
          ...pCategories,
          [event.target.id]: true
        }
      )
      setNonePCategories({101: false})
      setPageTurns(2)
    } else {
      setPCategories(
        {
          ...pCategories, 
          [event.target.id]: false
        }
      )
    }
  }

  const nonePCatChange = () => {
    if (nonePCategories[101] === false) {
      setPCategories(pCatObject)
      setNonePCategories({101: true})
      setPageTurns(1)
    } else {
      setNonePCategories({101: false})
    }
  }

  const permittedCategories = (
    <NPFPermittedCategories
      currentPage={currentPage}
      none={nonePCategories}
      noneChange={nonePCatChange}
      pageTurns={pageTurns}
      pCatChange={event => pCatChange(event)}
      pCategories={pCategories}
      setPage={setPage}
      setPageTurns={setPageTurns}
    />
  )

  // PROHIBITED FIBERS
  const pFiberChange = event => {
    if (pFiberChecks[event.target.id] === false) {
      setPFiberChecks(
        {
          ...pFiberChecks, 
          [event.target.id]: true
        }
      )

      setNonePFiber({100: false})
      setPageTurns(1)
    } else {
      setPFiberChecks(
        {
          ...pFiberChecks,
          [event.target.id]: false
        }
      )
    }
  }

  const nonePFiberChange = () => {
    if (nonePFiber[100] === false) {
      setPFiberChecks(pFibObject)
      setNonePFiber({100: true})
      setPageTurns(3)
    } else {
      setNonePFiber({100: false})
    }
  }

  const prohibitedFibers = (
    <NPFProhibFibers
      currentPage={currentPage}
      setPage={setPage}
      none={nonePFiber}
      noneChange={nonePFiberChange}
      pFiberChecks={pFiberChecks}
      pFiberChange={event => pFiberChange(event)}
      pageTurns={pageTurns}
      setPageTurns={setPageTurns}
    />
  )

  // SIZES
  const sizes = (
    <NPFSizes
      currentPage={currentPage}
      selectedSizeOptions={selectedSizeOptions}
      setPage={setPage}
      setSelectedSizeOptions={setSelectedSizeOptions}
      sizeSystemId={sizeSystemId}
    />
  )

  const start = (
    <div>
      <FormPage title='Add a product'>
        {<FormButton 
          buttonText='START'
          handleClick={() => setPage(currentPage + 1)}
    />}
      </FormPage>
    </div>
  )

  const submit = (
    <NPFSubmit
      currentPage={currentPage}
      selectedSizeOptions={selectedSizeOptions}
      setPage={setPage}
      submitProduct={submitProduct}
    />
  )

  const formPages = [
    start,
    prohibitedFibers,
    permittedCategories,
    notPermitted, 
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
    finish
  ]

  if (
    certArray.length < 1
    || factArray.length < 1 
    || fiberTypeArray.length < 1
    || notionTypeArray.length < 1
  ) { 
      return <div> Loading... </div>
  } else {
    return (
      <div className='NewProductForm'>
        {formPages[currentPage]}
      </div>
    )
  }
}

export default NewProductForm
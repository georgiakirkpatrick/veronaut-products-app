// import config from 'config'
   
//     const submitColor = (productId, name, descId, swatchUrl, primaryId) => {
//         const data = {
//             "product_id": productId,
//             "color_description_id": descId,
//             "color_english_name": name,
//             "swatch_image_url": swatchUrl,
//             "primary_image_for_color": primaryId
//         }

//         const postRequestParams = {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(data)
//         }

//         fetch(`${config.API_URL}/api/products/${productId}/colors`,
//             postRequestParams
//         )
//         .then(response => {
//             if (response.status >= 400) {
//                 throw new Error('Server responded with an error!')
//             }
//             return response.json()
//         })
//         .then(responseJson => {
//             console.log('responseJson', responseJson)
//         })
//     }

//     const submitImage = (newProductId, colorDescId, swatchUrl, colorName, imageUrl, primaryUrl) => {
//         const data = {
//             "product_id": newProductId,
//             "product_image_url": imageUrl,
//             "swatch_image_url": swatchUrl,
//             "color_english_name": colorName,
//             "color_description_id": colorDescId,
//             "primary_image_for_color": primaryUrl
//         }

//         const postRequestParams = {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(data)
//         }

//         fetch(`${config.API_URL}/api/products/${newProductId}/images`,
//             postRequestParams
//         )
//         .then(response => {
//             if (response.status >= 400) {
//                 throw new Error('Server responded with an error!')
//             }
//             return response.json()
//         })
//         .then(responseJson => {
//             const imageId = responseJson.id

//             props.colorFieldsets.forEach(colorFieldset => {
//                 const productId = newProductId
//                 const colorDescId = Number(colorFieldset.description)
//                 const colorName = colorFieldset.name
//                 const colorSwatchUrl = colorFieldset.swatchUrl
//                 const primaryImageId = imageId

//                 submitColor(
//                     productId,
//                     colorName,
//                     colorDescId,
//                     colorSwatchUrl,
//                     primaryImageId
//                 )
//             })
//         })
//     }

//     const submitProduct = () => {
//         const data = {
//             "english_name": props.newProductFields.productName,
//             "brand_id": props.brandId,
//             "category_id": props.newProductFields.category,
//             "product_url": props.newProductFields.productUrl,
//             "feature_image_url": props.newProductFields.featureImageUrl,
//             "multiple_color_options": props.colorFieldsets.length > 1 ? true : false,
//             "cost_in_home_currency": props.newProductFields.price,
//             "wash_id": Number(props.newProductFields.washingInstructions),
//             "dry_id": Number(props.newProductFields.dryingInstructions),
//             "cmt_country": "RA",
//             "cmt_factory_notes": "",
//             "approved_by_admin": false
//         }

//         const postRequestParams = {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify(data)
//         }

//         fetch(`${config.API_URL}/api/products`,
//             postRequestParams
//         )
//         .then(response => {
//             if (response.status >= 400) {
//                 throw new Error('Server responded with an error!')
//             }
//             return response.json()
//         })
//         .then(responseJson => {
//             props.setNewProductId(responseJson.id)
//             props.colorFieldsets.forEach(colorFieldset => {
//                 const newProductId = responseJson.id
//                 const colorDescId = Number(colorFieldset.description)
//                 const firstUrl = colorFieldset.imageUrls[0]
//                 const swatchUrl = colorFieldset.swatchUrl
//                 const colorName = colorFieldset.name

//                 submitImage(newProductId, colorDescId, swatchUrl, colorName, firstUrl, true)

//                 for (let i=1; i < colorFieldset.imageUrls.length; i++) {
//                     submitImage(newProductId, colorDescId, swatchUrl, colorName, colorFieldset.imageUrls[i], false)
//                 }
//             })
//         })

//     }
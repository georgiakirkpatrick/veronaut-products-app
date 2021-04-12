import React from 'react'
import config from '../config'
import FormButton from '../FormButton/FormButton'
import FormPage from '../FormPage/FormPage'

const NPFSubmit = props => {
    // const sizesToSubmit = () => {
    //     Object.keys(props.selectedSizeOptions)
    // }    

    // const submitSize = sizeId => {
    //     const data = {
    //         "size_id": sizeId,
    //         "product_id": newProductId
    //     }
    
    //     const postRequestParams = {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify(data)
    //     }
    
    //     fetch(`${config.API_URL}/api/products/${newProductId}/sizes`,
    //         postRequestParams
    //     )
    //     .then(response => {
    //         if (response.status >= 400) {
    //             throw new Error('Server responded with an error!')
    //         }
    //         return response.json()
    //     })
    // }
    
    const submitColor = (productId, name, descId, swatchUrl, primaryId) => {
        const data = {
            "product_id": productId,
            "color_description_id": descId,
            "color_english_name": name,
            "swatch_image_url": swatchUrl,
            "primary_image_for_color": primaryId
        }
    
        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }
    
        fetch(`${config.API_URL}/api/products/${productId}/colors`,
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
    
    const submitImage = (newProductId, colorDescId, swatchUrl, colorName, imageUrl, primaryUrl) => {
        const data = {
            "product_id": newProductId,
            "product_image_url": imageUrl,
            "swatch_image_url": swatchUrl,
            "color_english_name": colorName,
            "color_description_id": colorDescId,
            "primary_image_for_color": primaryUrl
        }
    
        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }
    
        fetch(`${config.API_URL}/api/products/${newProductId}/images`,
            postRequestParams
        )
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Server responded with an error!')
            }
            return response.json()
        })
        .then(responseJson => {
            const imageId = responseJson.id
    
            props.colorFieldsets.forEach(colorFieldset => {
                const productId = newProductId
                const colorDescId = Number(colorFieldset.descriptionId)
                const colorName = colorFieldset.name
                const colorSwatchUrl = colorFieldset.swatchUrl
                const primaryImageId = imageId
    
                submitColor(
                    productId,
                    colorName,
                    colorDescId,
                    colorSwatchUrl,
                    primaryImageId
                )
            })
        })
    }
    
    const submitButton = () => {
        props.submitProduct()
        props.setPage(props.currentPage + 1)
    }

    return (
        <div>
            <FormPage title='Ready to submit?'>
                <FormButton 
                    buttonText='SUBMIT PRODUCT' 
                    handleClick={() => submitButton()}
                />
            </FormPage>
        </div>
    )
}

NPFSubmit.defaultProps = {
    currentPage: 0,
    setPage: () => {},
    selectedSizeOptions: {}
}

export default NPFSubmit
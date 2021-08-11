import React from 'react'
import countries from '../COUNTRIES'
import './NotionCarousel.css'

const NotionCarousel = props => {
    const {
        certArray,
        notionArray,
        factoryList
    } = props

    const getFactory = factoryId => factoryList.filter(factory => factory.id === factoryId)[0].english_name
    const formatCerts = notion => {
        console.log('notion', notion.certification_ids)
        const notionCerts = notion.certification_ids.map(id => certArray.filter(cert => cert.id === id)[0].text)
        return notionCerts.toString()
    }

    const formattedNotions = notionArray.map(notion => {
        return (
            <section key={notion.id}>
                <h4>{notion.type}</h4>
                <p className="NotionCarousel__stage">Manufacturer</p>
                <p>Country: {countries[notion.manufacturer_country - 1].text}</p>
                <p>Factory: {getFactory(notion.manufacturer_id)}</p>
                {notion.manufacturer_notes ? <p>Manufacturer notes: {notion.manufacturer_notes}</p> : null}

                <p className="NotionCarousel__stage">Material producer</p>
                <p>Country: {countries[notion.material_origin_id - 1].text}</p>
                <p>Factory: {getFactory(notion.material_producer_id)}</p>
                {notion.material_notes ? <p>Producer notes: {notion.manufacturer_id}</p>: null}

                <p className="NotionCarousel__stage">Notion certifications</p>
                <p>{formatCerts(notion)}</p>
            </section>
        )
    })

    return (
        <div 
            className='NotionCarousel'
        >
            <div className='NotionCarousel__items'>
                {formattedNotions}
            </div>
        </div>
    )
}

NotionCarousel.defaultProps = {
    certArray: [],
    notionArray: [],
    factoryList: []
}

export default NotionCarousel
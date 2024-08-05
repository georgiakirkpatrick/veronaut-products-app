import React from 'react'
import countries from '../COUNTRIES'
import './NotionCarousel.css'

const NotionCarousel = ({
  certArray = [],
  notionArray = [],
  factArray = []
}) => {
  const getFactory = factoryId => factArray.filter(factory => factory.id === factoryId)[0].english_name
  const formatCerts = notion => {
    const notionCerts = notion.certification_ids.map(id => certArray.filter(cert => cert.id === id)[0].text)

    return notionCerts.toString()
  }

  const formattedNotions = notionArray.length > 0
    ? notionArray.map(notion => {
      return (
        <li key={'notion' + notion.id}>
          <section className='NotionCarousel__notion'>
            <h4>{notion.notion_type}</h4>

            <div>
              <p className='NotionCarousel__stage'>Manufacturing</p>
              <p>Manufacturer: {getFactory(notion.manufacturer_id)}</p>
              {notion.manufacturer_notes ? <p>Manufacturer notes: {notion.manufacturer_notes}</p> : null}
              <p>Country: {countries[notion.manufacturer_country - 1].text}</p>
            </div>
              
            <div>
              <p className='NotionCarousel__stage'>Primary material</p>
              <p>Primary material: {notion.material_type}</p>
              <p>Producer: {getFactory(notion.material_producer_id)}</p>
              {notion.material_notes ? <p>Producer notes: {notion.material_notes}</p>: null}
              <p>Country: {countries[notion.material_origin_id - 1].text}</p>
            </div>
              
            {
              notion.certification_ids.length > 0
                ? <div>
                  <p className="NotionCarousel__stage">Notion certifications</p>
                  <p>{formatCerts(notion)}</p>
                </div>
                : <div>
                  <p className="NotionCarousel__stage">Notion certifications</p>
                  <p>None</p>
                </div>
            }
          </section>
        </li>
      )
    })
    : <p>This product does not have any notions</p>

  return (
    <div 
        className='NotionCarousel'
    >
      <ul className='NotionCarousel__items'>
        {formattedNotions}
      </ul>
    </div>
  )
}

export default NotionCarousel
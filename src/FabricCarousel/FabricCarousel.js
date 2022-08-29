import React from 'react'
import countries from '../COUNTRIES'
import './FabricCarousel.css'

const FabricCarousel = props => {
    const {
        certArray,
        factoryArray,
        ordFabArray
    } = props

    const getFactory = factoryId => factoryArray.filter(factory => factory.id === factoryId)[0].english_name
    const formatCerts = f => {
        if (f.certification_ids.length > 0) {
            const certInfo = id => certArray.filter(cert => cert.id === id)
            const fCerts = f.certification_ids.map(id => certInfo(id)[0].text)
            
            return fCerts.length >= 1 ? fCerts.join(', ') : 'None'
        } else {
            return 'None'
        }
    }

    const formattedfabrics = ordFabArray.map(fabric => {
        if (fabric) {
            const formattedTitle = fabric.relationship[0].toUpperCase() + fabric.relationship.substr(1)
            const orderedFibers = fabric.fibers.sort((a, b) => a.percent_of_fabric < b.percent_of_fabric ? 1 : -1)
            const formattedFibers = orderedFibers.map(fiber => (
                <li key={'fiber-' + fiber.id}>
                    <div>
                        <p>
                            {fiber.fiber_type_id === 1 ? 'Fiber type: ' : null}
                            {fiber.percent_of_fabric ? `${fiber.percent_of_fabric}% ` : null}
                            {fiber.fiber_type}
                        </p>
                        <p>Origin: {countries[fiber.factory_country - 1].text}</p>
                        <p>Producer: {fiber.producer}</p>
                        <p>Fiber certifications: {formatCerts(fiber)}</p>
                    </div>
                </li>
            ))
            
            return (
                <li key={'fabric-' + fabric.id} className='FabricCarousel__fabric'>
                    <section>
                        <h4 className='FabricCarousel__fabric-title'>{formattedTitle} fabric</h4>
                        <div>
                            <p className='FabricCarousel__stage'>Dyeing and finishing</p>
                            <p>Factory: {getFactory(fabric.dye_print_finish_id)}</p>
                            <p>Country: {countries[fabric.dye_print_finish_country - 1].text}</p>
                        </div>

                        <div>
                            <p className='FabricCarousel__stage'>Fabric mill</p>
                            <p>Mill: {getFactory(fabric.fabric_mill_id)}</p>
                            <p>Country: {countries[fabric.fabric_mill_country - 1].text}</p>
                        </div>

                        <div>  
                            <p className='FabricCarousel__stage'>Fabric certifications</p>
                            <p>{formatCerts(fabric)}</p>
                        </div>
                    </section>

                    <section className='FabricCarousel__fiber'>
                        <h4 className='FabricCarousel__fiber-title'>{fabric.fibers.length === 1 ? 'Fiber' : 'Fibers'}</h4>
                        <ul>
                            {formattedFibers}
                        </ul>
                    </section>
                </li>
            )
        } else {
            return null
        }
    })

    return (
        <div className='FabricCarousel'>
            <ul className='FabricCarousel__items'>
                {formattedfabrics}
            </ul>
        </div>
    )
}

FabricCarousel.defaultProps = {
    certArray: [],
    factoryArray: [],
    ordFabArray: []
}

export default FabricCarousel
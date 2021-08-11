import React from 'react'
import countries from '../COUNTRIES'
import './FabricCarousel.css'

const FabricCarousel = props => {
    const {
        certArray,
        fabricArray,
        factoryList
    } = props

    const getFactory = factoryId => factoryList.filter(factory => factory.id === factoryId)[0].english_name
    const formatCerts = f => {
        if (f.certification_ids.length > 0) {
            const certInfo = id => certArray.filter(cert => cert.id === id)
            const fCerts = f.certification_ids.map(id => certInfo(id)[0].text)
            
            return fCerts.length >= 1 ? fCerts.join(', ') : 'None'
        } else {
            return 'None'
        }
    }

    const orderedFabrics = () => {
        const inOrder = []

        const primaryFabric = fabricArray.find(fabric => fabric.relationship === 'primary')
        if (primaryFabric) inOrder.push(primaryFabric)

        const secondaryFabric = fabricArray.find(fabric => fabric.relationship === 'secondary')
        if (secondaryFabric) inOrder.push(secondaryFabric)

        const liningFabric = fabricArray.find(fabric => fabric.relationship === 'lining')
        if (liningFabric) inOrder.push(liningFabric)

        return inOrder
    }

    const formattedfabrics = orderedFabrics().map(fabric => {
        if (fabric) {
            const formattedTitle = fabric.relationship[0].toUpperCase() + fabric.relationship.substr(1)
            const formattedFibers = fabric.fibers.map(fiber => (
                <li key={'fiber-' + fiber.id}>
                    {/* <h4>{fabric.fibers.length === 1 ? 'Fiber' : 'Fibers'}</h4> */}
                    <p className="FabricCarousel__fiber">
                        {fiber.fiber_type_id === 1 ? 'Fiber type: ' : null}
                        {fiber.percent_of_fabric ? `${fiber.percent_of_fabric}%` : null}
                        {fiber.fiber_type}
                    </p>
                    <p>Origin: {countries[fiber.factory_country - 1].text}</p>
                    <p>Producer: {fiber.producer}</p>

                    <p className="FabricCarousel__stage">Fiber certifications</p>
                    <p>{formatCerts(fiber)}</p>
                </li>
            ))

            return <li key={'fabric-' + fabric.id}>
                <section>
                    <h4>{formattedTitle} fabric</h4>
                    <p className="FabricCarousel__stage">Dyeing and finishing</p>
                    <p>Country: {countries[fabric.dye_print_finish_country - 1].text}</p>
                    <p>Factory: {getFactory(fabric.dye_print_finish_id)}</p>

                    <p className="FabricCarousel__stage">Fabric mill</p>
                    <p>Country: {countries[fabric.fabric_mill_country - 1].text}</p>
                    <p>Factory: {getFactory(fabric.fabric_mill_id)}</p>
                    <p className="FabricCarousel__stage">Fabric certifications</p>
                    <p>{formatCerts(fabric)}</p>
                </section>

                <ul>
                    <h4>{fabric.fibers.length === 1 ? 'Fiber' : 'Fibers'}</h4>
                    {formattedFibers}
                </ul>
            </li>
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
    fabricArray: [],
    factoryList: []
}

export default FabricCarousel
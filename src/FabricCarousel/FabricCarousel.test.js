import React from 'react'
import ReactDOM from 'react-dom'
import FabricCarousel from './FabricCarousel'
import renderer from 'react-test-renderer'

describe ('FabricCarousel', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FabricCarousel />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<FabricCarousel />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
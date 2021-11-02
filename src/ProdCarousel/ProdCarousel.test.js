import React from 'react'
import ReactDOM from 'react-dom'
import ProdCarousel from './ProdCarousel'
import renderer from 'react-test-renderer'

describe ('ProdCarousel', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ProdCarousel />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ProdCarousel />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
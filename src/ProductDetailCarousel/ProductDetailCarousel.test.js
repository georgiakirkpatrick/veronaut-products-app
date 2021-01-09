import React from 'react'
import ReactDOM from 'react-dom'
import ProductDetailCarousel from './ProductDetailCarousel'
import renderer from 'react-test-renderer'

describe ('ProductDetailCarousel', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ProductDetailCarousel />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ProductDetailCarousel />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
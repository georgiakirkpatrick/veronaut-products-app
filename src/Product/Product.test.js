import React from 'react'
import ReactDOM from 'react-dom'
import Product from './Product'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

const productProps = {
    id: 1999,
    categoryId: '369',
    pathToImg: 'www.google.com',
    imgAlt: 'Woman in dress',
    brand: 'Sezane',
    productTitle: 'long-sleeved dress',
    price: 98
}

describe ('Product', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Router><Product /></Router>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Router><Product /></Router>)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
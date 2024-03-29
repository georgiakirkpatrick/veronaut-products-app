import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NPFNewProduct from './NPFNewProduct'
import currencies from '../CURRENCIES'

describe('NPFNewProduct', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFNewProduct />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<NPFNewProduct />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import NewProductForm from './NewProductForm'

describe('NewProductForm', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Router><NewProductForm /></Router>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<Router><NewProductForm /></Router>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
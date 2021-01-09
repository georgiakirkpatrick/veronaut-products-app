import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'

describe('ForgotPassword', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Router><ForgotPassword /></Router>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<Router><ForgotPassword /></Router>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
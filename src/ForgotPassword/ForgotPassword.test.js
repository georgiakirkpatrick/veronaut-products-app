import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ForgotPassword from './ForgotPassword'

describe('ForgotPassword', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ForgotPassword />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<ForgotPassword />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
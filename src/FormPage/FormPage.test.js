import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FormPage from './FormPage'

describe('FormPage', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FormPage />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FormPage />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
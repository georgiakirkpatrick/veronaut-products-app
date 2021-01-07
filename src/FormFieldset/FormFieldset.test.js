import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FormFieldset from './FormFieldset'

describe('FormFieldset', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FormFieldset />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FormFieldset />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
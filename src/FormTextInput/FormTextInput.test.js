import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FormTextInput from './FormTextInput'

describe('FormTextInput', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FormTextInput />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FormTextInput />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
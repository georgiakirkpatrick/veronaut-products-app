import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FormNumberInput from './FormNumberInput'

describe('FormNumberInput', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FormNumberInput />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FormNumberInput />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FormUrlInput from './FormUrlInput'

describe('FormUrlInput', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FormUrlInput />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FormUrlInput />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
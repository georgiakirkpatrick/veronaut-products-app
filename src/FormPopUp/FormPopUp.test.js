import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FormPopUp from './FormPopUp'

describe('FormPopUp', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FormPopUp />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FormPopUp />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
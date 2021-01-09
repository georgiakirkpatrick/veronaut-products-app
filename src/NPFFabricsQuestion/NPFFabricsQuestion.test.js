import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NPFFabricsQuestion from './NPFFabricsQuestion'

describe('NPFFabricsQuestion', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFFabricsQuestion />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<NPFFabricsQuestion />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
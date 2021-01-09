import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NPFFooter from './NPFFooter'

describe('NPFFooter', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFFooter />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<NPFFooter />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
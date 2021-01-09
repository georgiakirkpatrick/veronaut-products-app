import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NPFManufacturing from './NPFManufacturing'

describe('NPFManufacturing', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFManufacturing />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<NPFManufacturing />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
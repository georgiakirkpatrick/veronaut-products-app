import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NPFImages from './NPFImages'

describe('NPFImages', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFImages />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<NPFImages />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
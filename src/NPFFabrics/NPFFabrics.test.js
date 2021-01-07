import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NPFFabrics from './NPFFabrics'

describe('NPFFabrics', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFFabrics />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<NPFFabrics />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
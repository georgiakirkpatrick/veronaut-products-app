import React from 'react'
import ReactDOM from 'react-dom'
import NPFSizes from './NPFSizes'
import renderer from 'react-test-renderer'

describe ('NPFSizes', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFSizes />, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<NPFSizes />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
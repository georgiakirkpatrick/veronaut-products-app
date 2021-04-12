import React from 'react'
import ReactDOM from 'react-dom'
import NPFSubmit from './NPFSubmit'
import renderer from 'react-test-renderer'

describe ('NPFSubmit', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFSubmit />, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<NPFSubmit />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
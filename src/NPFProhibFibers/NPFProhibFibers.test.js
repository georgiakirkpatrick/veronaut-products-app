import React from 'react'
import ReactDOM from 'react-dom'
import NPFProhibFibers from './NPFProhibFibers'
import renderer from 'react-test-renderer'

describe ('NPFProhibFibers', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFProhibFibers />, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<NPFProhibFibers />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
import React from 'react'
import ReactDOM from 'react-dom'
import NPFPermittedCategoriess from './NPFPermittedCategoriess'
import renderer from 'react-test-renderer'

describe ('NPFPermittedCategoriess', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFPermittedCategoriess />, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<NPFPermittedCategoriess />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
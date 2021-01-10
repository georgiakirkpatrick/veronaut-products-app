import React from 'react'
import ReactDOM from 'react-dom'
import NPFPermittedCategories from './NPFPermittedCategories'
import renderer from 'react-test-renderer'

describe ('NPFPermittedCategories', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NPFPermittedCategories />, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<NPFPermittedCategories />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
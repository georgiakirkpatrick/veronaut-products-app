import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MenuItem from './MenuItem'
import { BrowserRouter as Router } from 'react-router-dom'

describe ('MenuItem', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Router><MenuItem /></Router>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Router><MenuItem /></Router>)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
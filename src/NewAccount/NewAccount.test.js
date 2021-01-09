import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowswerRouter as Router } from 'react-router-dom'
import NewAccount from './NewAccount'

describe ('NewAccount', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Router><NewAccount /></Router>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                <Router>
                    <NewAccount />
                </Router>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
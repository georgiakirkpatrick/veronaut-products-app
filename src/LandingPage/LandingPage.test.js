import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './LandingPage'

describe ('LandingPage', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Router><LandingPage /></Router>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Router><LandingPage /></Router>)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
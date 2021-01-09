import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import ReadMoreLink from './ReadMoreLink'


describe ('ReadMoreLink', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Router><ReadMoreLink /></Router>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Router><ReadMoreLink /></Router>)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Category from './Category'

describe ('Category', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Router>
                <Category />
            </Router>
            , div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<Category />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
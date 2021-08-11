import React from 'react'
import ReactDOM from 'react-dom'
import PhotoCarousel from './PhotoCarousel'
import renderer from 'react-test-renderer'

describe ('PhotoCarousel', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<PhotoCarousel />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<PhotoCarousel />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
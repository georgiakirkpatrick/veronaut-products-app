import React from 'react'
import ReactDOM from 'react-dom'
import CatCarousel from './CatCarousel'
import renderer from 'react-test-renderer'

describe ('CatCarousel', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<CatCarousel />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<CatCarousel />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
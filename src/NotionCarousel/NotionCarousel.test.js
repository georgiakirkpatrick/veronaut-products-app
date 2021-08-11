import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NotionCarousel from './NotionCarousel'

describe('NotionCarousel', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NotionCarousel />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<NotionCarousel />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
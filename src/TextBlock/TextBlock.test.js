import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TextBlock from './TextBlock'

describe ('TextBlock', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<TextBlock />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<TextBlock />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
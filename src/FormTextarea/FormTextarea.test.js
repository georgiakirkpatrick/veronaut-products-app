import React from 'react'
import ReactDOM from 'react-dom'
import FormTextarea from './FormTextarea'
import renderer from 'react-test-renderer'

describe ('FormTextarea', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FormTextarea />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<FormTextarea />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
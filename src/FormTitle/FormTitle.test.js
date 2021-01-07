import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FormTitle from './FormTitle'

describe('FormTitle', () => {
        it ('renders without crashing', () => {
            const div = document.createElement('div')
            ReactDOM.render(<FormTitle />, div)
            ReactDOM.unmountComponentAtNode(div)
        })
    
        it ('render the UI as expected', () => {
            const tree = renderer
                .create(<FormTitle />)
                .toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
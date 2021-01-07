import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NPFNotions from './NPFNotions'

describe('NPFNotions', () => {
        it ('renders without crashing', () => {
            const div = document.createElement('div')
            ReactDOM.render(<NPFNotions />, div)
            ReactDOM.unmountComponentAtNode(div)
        })
    
        it ('render the UI as expected', () => {
            const tree = renderer
                .create(<NPFNotions />)
                .toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
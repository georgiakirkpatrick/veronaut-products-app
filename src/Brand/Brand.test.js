import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Brand from './Brand'

describe ('Brand', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Brand />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<Brand />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Account from './Account'

describe ('Account', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Account />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<Account />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
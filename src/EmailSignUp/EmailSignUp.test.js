import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import EmailSignUp from './EmailSignUp';

describe ('EmailSignUp', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<EmailSignUp />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<EmailSignUp />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
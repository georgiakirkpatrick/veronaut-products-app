import React from 'react';
import ReactDOM from 'react-dom';
import NewsletterSignup from './NewsletterSignup';
import renderer from 'react-test-renderer';

describe ('NewsletterSignup', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NewsletterSignup />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<NewsletterSignup />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
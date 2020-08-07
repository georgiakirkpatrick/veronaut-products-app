import React from 'react';
import ReactDOM from 'react-dom';
import ReadMoreLink from './ReadMoreLink';
import renderer from 'react-test-renderer';

describe ('ReadMoreLink', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ReadMoreLink />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ReadMoreLink />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
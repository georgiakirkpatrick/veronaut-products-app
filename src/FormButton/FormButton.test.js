import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FormButton from './FormButton';

describe('FormButton', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FormButton />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FormButton />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    })
})
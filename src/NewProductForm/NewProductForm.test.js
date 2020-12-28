import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewProductForm from './NewProductForm';

describe('NewProductForm', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewProductForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<NewProductForm />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});
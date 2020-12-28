import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FormDropdown from './FormDropdown';

describe.only('FormDropdown', () => {
        it ('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<FormDropdown />, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    
        it ('render the UI as expected', () => {
            const tree = renderer
                .create(<FormDropdown />)
                .toJSON();
            expect(tree).toMatchSnapshot()
        });
    });
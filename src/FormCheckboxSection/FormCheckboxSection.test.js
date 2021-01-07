import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FormCheckboxSection from './FormCheckboxSection';

describe('FormCheckboxSection', () => {
        it ('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<FormCheckboxSection />, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    
        it ('render the UI as expected', () => {
            const tree = renderer
                .create(<FormCheckboxSection />)
                .toJSON();
            expect(tree).toMatchSnapshot()
        });
    });
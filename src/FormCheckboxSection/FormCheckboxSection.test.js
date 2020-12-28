import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FormRadioSection from './FormRadioSection';

describe('FormRadioSection', () => {
        it ('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<FormRadioSection />, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    
        it ('render the UI as expected', () => {
            const tree = renderer
                .create(<FormRadioSection />)
                .toJSON();
            expect(tree).toMatchSnapshot()
        });
    });
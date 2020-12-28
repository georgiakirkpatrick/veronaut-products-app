import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FormPromptWithSub from './FormPromptWithSub';

describe('FormPromptWithSub', () => {
        it ('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<FormPromptWithSub />, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    
        it ('render the UI as expected', () => {
            const tree = renderer
                .create(<FormPromptWithSub />)
                .toJSON();
            expect(tree).toMatchSnapshot()
        });
    });
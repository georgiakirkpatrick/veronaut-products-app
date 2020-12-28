import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
        it ('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<NotFoundPage />, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    
        it ('render the UI as expected', () => {
            const tree = renderer
                .create(<NotFoundPage />)
                .toJSON();
            expect(tree).toMatchSnapshot()
        });
    });
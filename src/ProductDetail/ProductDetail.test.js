import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail';
import renderer from 'react-test-renderer';

describe ('ProductDetail', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ProductDetail />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ProductDetail />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
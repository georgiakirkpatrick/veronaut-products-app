import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetailSection from './ProductDetailSection';
import renderer from 'react-test-renderer';

describe ('ProductDetailSection', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ProductDetailSection />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ProductDetailSection />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
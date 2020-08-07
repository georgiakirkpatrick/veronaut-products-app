import React from 'react';
import ReactDOM from 'react-dom';
import ProductListPage from './ProductListPage';
import renderer from 'react-test-renderer';

const productList = [
    {
        id: 1619,
        category: 'Dresses',
        categoryId: 'dresses',
        pathToImg: 'www.google.com',
        imgAlt: 'A dress',
        brand: 'Sezane',
        productTitle: 'The Georgia Dress',
        price: '98'
    }
]

describe ('ProductListPage', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ProductListPage />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ProductListPage productList={productList} />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
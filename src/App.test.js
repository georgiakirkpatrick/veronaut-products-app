import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

const data = [
  {
    productList: [
      {
        id: 'c90672ba-e529-4fd7-a06f-dbfe6579fced',
        category: 'Dresses',
        categoryId: 'dresses',
        pathToImg: 'https://res.cloudinary.com/dwunpjzlo/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_1514,q_auto:best,w_1080/v1591191901/website/product/y8saioc8gylnginsrz7q.jpg',
        imgAlt: 'Jennie Dress - Short-sleeved maxi dress',
        brand: 'Sézane',
        productTitle: 'Jennie Dress',
        price: 210
      }
    ]
  }
]

describe ('App', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it ('renders the UI as expected', () => {
    const tree = renderer
      .create(<App data={data}/>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  });
});
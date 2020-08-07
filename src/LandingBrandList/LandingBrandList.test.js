import React from 'react';
import ReactDOM from 'react-dom';
import LandingBrandList from './LandingBrandList';
import renderer from 'react-test-renderer';

const brands = [
    {
        id: 6860598,
        pathToImage: 'https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_1.0,f_auto,q_auto,w_auto:100:1200/v1/i/1bc014ee_3f92.jpg',
        imgAlt: `A 5'10" model is wearing a size 2 The Relaxed Air Shirt in Blue / White Stripe`,
        brandName: 'Everlane',
        brandLink: 'www.google.com'
    }
]

describe ('LandingBrandList', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<LandingBrandList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<LandingBrandList brands={brands}/>)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
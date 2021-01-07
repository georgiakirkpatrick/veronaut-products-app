import React from 'react'
import ReactDOM from 'react-dom'
import LandingCategoryList from './LandingCategoryList'
import renderer from 'react-test-renderer'

const categories = [
    {
        id: 3694424,
        pathToImage: 'https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_1.0,f_auto,q_auto,w_auto:100:1200/v1/i/1bc014ee_3f92.jpg',
        altText: `A 5'10" model is wearing a size 2 The Relaxed Air Shirt in Blue / White Stripe`,
        category: 'Tops'
    }
]

describe ('LandingCategoryList', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<LandingCategoryList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<LandingCategoryList categories={categories}/>)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
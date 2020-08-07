import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Category from './Category'

const categoryProps = [
    'key=7676', 
    'id=7676', 
    'pathToImage="www.google.com"', 
    'imgAlt="alternate text"', 
    'categoryName="tops"', 
    'categoryLink="www.google.com"'
] 

describe ('Category', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Category />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<Category {...categoryProps} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
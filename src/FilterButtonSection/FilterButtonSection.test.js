import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FilterButtonSection from './FilterButtonSection';

describe ('FilterButtonSection', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FilterButtonSection />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<FilterButtonSection />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
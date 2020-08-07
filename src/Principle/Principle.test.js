import React from 'react';
import ReactDOM from 'react-dom';
import Principle from './Principle';
import renderer from 'react-test-renderer';

const principleDescription = 'We value versatile styles that bring out our best selves in the office and at happy hour.  That hold up on our bike commutes and school pick-ups.  Our ideal clothing is bra-friendly, easy care, and has pockets.'
const principleTitle = 'Good design'

describe ('Principle', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Principle />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Principle principleTitle={principleTitle} principleDescription={principleDescription} />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})
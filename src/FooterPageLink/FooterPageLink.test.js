import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FooterPageLink from './FooterPageLink';

const testLink = [
    {
        id: 1,
        name: 'About',
        route: '/about'
    }
]

describe('FooterPageLink', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')

        ReactDOM.render(<FooterPageLink 
            key={testLink.id}
            route={testLink.route}
            name={testLink.name}
        />, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<FooterPageLink 
                key={testLink.id}
                route={testLink.route}
                name={testLink.name}
            />)
            .toJSON()
            
        expect(tree).toMatchSnapshot()
    });
});    
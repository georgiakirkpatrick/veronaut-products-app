import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FooterSocialLink from './FooterSocialLink';

const socialLink = [
    {
        id: 1,
        name: 'About',
        route: '/about'
    }
]

describe('FooterSocialLink', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FooterSocialLink 
            key={socialLink.id}
            route={socialLink.route}
            name={socialLink.name}
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<FooterSocialLink 
                key={socialLink.id}
                route={socialLink.route}
                name={socialLink.name}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});    
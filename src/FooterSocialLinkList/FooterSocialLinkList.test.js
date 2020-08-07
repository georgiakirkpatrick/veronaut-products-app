import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FooterSocialLinkList from './FooterSocialLinkList';

const socialLinks = [
    {
        id: 10101,
        pathToProfile: 'https://www.instagram.com/shewantspockets/',
        pathToImage: 'https://images.app.goo.gl/8ophL7f6ksAuhBZR6',
        platform: 'Instagram'
    }
];

describe('FooterSocialLinkList', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FooterSocialLinkList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FooterSocialLinkList socialLinks={socialLinks} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});
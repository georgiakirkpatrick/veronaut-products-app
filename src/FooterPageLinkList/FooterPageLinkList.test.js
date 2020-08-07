import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FooterPageLinkList from './FooterPageLinkList';

const testLinks = [  
    {
        id: 10101,
        pathToProfile: 'https://www.instagram.com/shewantspockets/',
        pathToImage: 'https://images.app.goo.gl/8ophL7f6ksAuhBZR6',
        platform: 'Instagram'
    }
];

describe ('FooterPageLinkList', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FooterPageLinkList footerLinks={testLinks} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<FooterPageLinkList footerLinks={testLinks} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});    
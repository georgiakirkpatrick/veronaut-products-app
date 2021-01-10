import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FooterSocialLinkList from './FooterSocialLinkList'

describe('FooterSocialLinkList', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FooterSocialLinkList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(<FooterSocialLinkList />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
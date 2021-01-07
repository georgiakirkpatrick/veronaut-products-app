import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FooterSocialLink from './FooterSocialLink'

describe('FooterSocialLink', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FooterSocialLink />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it ('renders the UI as expected', () => {
        const tree = renderer
            .create(<FooterSocialLink />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})    
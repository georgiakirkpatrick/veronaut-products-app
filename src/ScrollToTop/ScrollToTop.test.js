import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
    const div = document.createElement('div')

    return ReactDOM.render(
        <BrowserRouter>
            {ui}
        </BrowserRouter>,
        div
    )
}

describe('ScrollToTop', () => {
    it ('renders without crashing', () => {
        const route = '/some-route'
        renderWithRouter(<ScrollToTop />, { route })
    })

    it ('render the UI as expected', () => {
        const tree = renderer
            .create(
                <MemoryRouter>
                    <ScrollToTop />
                </MemoryRouter>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import NewAccount from './NewAccount'

describe ('NewAccount', () => {
    it ('renders without crashing', () => {
        render(<Router><NewAccount /></Router>)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<Router><NewAccount /></Router>)
        expect(tree).toMatchSnapshot()    
    })
})
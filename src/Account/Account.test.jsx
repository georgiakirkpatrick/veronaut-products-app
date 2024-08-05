import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Account from './Account'

describe('Account', () => {
    it ('renders without crashing', () => {
        render(<Router><Account /></Router>)
        screen.debug()
    })

    it ('renders the UI as expected', () => {
        const tree = render(<Router><Account /></Router>)
        expect(tree).toMatchSnapshot()
    })
})
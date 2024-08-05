import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductListPage from './ProductListPage'

describe ('ProductListPage', () => {
    it ('renders without crashing', () => {
        render(<Router><ProductListPage /></Router>)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<Router><ProductListPage /></Router>)
        expect(tree).toMatchSnapshot()    
    })
})
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import RequireAuth from './RequireAuth'

console.log('RequireAuth', RequireAuth())

describe ('RequireAuth', () => {
    it ('renders without crashing', () => {
        render(
        <Router>
          <Routes>
            <RequireAuth />
          </Routes>
        </Router>)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<Router><RequireAuth /></Router>)
        expect(tree).toMatchSnapshot()    
    })
})
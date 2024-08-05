import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Backdrop from './Backdrop'

describe ('Backdrop', () => {
    it ('renders without crashing', () => {
        render(<Backdrop />)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<Backdrop />)
        expect(tree).toMatchSnapshot()    
    })
})
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFNewProduct from './NPFNewProduct'
import currencies from '../CURRENCIES'

describe('NPFNewProduct', () => {
    it ('renders without crashing', () => {
        render(<NPFNewProduct />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<NPFNewProduct />)
        expect(tree).toMatchSnapshot()
    })
})
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFFabrics from './NPFFabrics'

describe('NPFFabrics', () => {
    it ('renders without crashing', () => {
        render(<NPFFabrics />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<NPFFabrics />)
        expect(tree).toMatchSnapshot()
    })
})
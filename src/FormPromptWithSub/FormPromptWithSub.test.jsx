import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormPromptWithSub from './FormPromptWithSub'

describe('FormPromptWithSub', () => {
    it ('renders without crashing', () => {
        render(<FormPromptWithSub />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<FormPromptWithSub />)
        expect(tree).toMatchSnapshot()
    })
})
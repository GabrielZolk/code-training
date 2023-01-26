import { render, screen } from '@testing-library/react'
import App from './App'

describe('Jest', () => {
    it('should work', () => {
        expect(1).toBe(1)
    })
    it.skip('should work2', () => {
        expect(2).toBe(2)
    })
    it('should display elements', () => {
        render(<App />)

        //console.log
        screen.debug()
    })
    it('should display elements', () => {
        render(<App />)

        expect(screen.getByRole('heading', { name: /vite \+ react/i })) //Regex para tratamento de letras maísculas ou minúsculas e transformar o '+' em string
.toBeInTheDocument()
    })
})
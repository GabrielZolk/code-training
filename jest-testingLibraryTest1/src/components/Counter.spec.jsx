import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

describe('<Counter />', () => {
    it('should init with counter zero', () => {
        render(<Counter initialCount={0} />)

        screen.debug()
    })

    it('should increment 1 when click at increment button', () => {
        render(<Counter initialCount={0} />)

        const buttonIncrement = screen.getByRole("button", { name: 'increment' })

        expect(buttonIncrement).toBeEnabled()
        fireEvent.click(buttonIncrement)
        expect(screen.getByTestId('countNumber').textContent).toEqual('Count: 1')
    })

    it('should decrement 1 when click at increment button', () => {
        render(<Counter initialCount={0} />)

        const buttonDecrement = screen.getByRole("button", { name: 'decrement' })

        expect(buttonDecrement).toBeEnabled()
        fireEvent.click(buttonDecrement)
        expect(screen.getByTestId('countNumber').textContent).toEqual('Count: -1')
    })

    it('should initialCount be equal zero', () => {
        render(<Counter initialCount={0} />)

        const buttonRestart = screen.getByRole("button", { name: 'restart' })

        expect(buttonRestart).toBeEnabled()
        fireEvent.click(buttonRestart)
        expect(screen.getByTestId('countNumber').textContent).toEqual('Count: 0')
    })

    it('should switch positive or negative', () => {
        render(<Counter initialCount={1} />)

        const buttonSwitch = screen.getByRole("button", { name: 'switchSigns' })

        expect(buttonSwitch).toBeEnabled()
        fireEvent.click(buttonSwitch)
        expect(screen.getByTestId('countNumber').textContent).toEqual('Count: -1')
    })
})

test('should init with counter zero' , () => {
    render(<Counter initialCount={0} />)

    const value = screen.getByTestId('countNumber').textContent
    console.log(value)
    expect(value).toEqual('Count: 0')
    screen.debug()
})
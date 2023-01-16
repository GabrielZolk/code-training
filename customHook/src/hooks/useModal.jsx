import { useState } from "react"


export const useModal = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }   

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleMulti = () => {
        setIsOpen(!isOpen)
    }

    return { isOpen, handleOpen, handleClose, handleMulti }
}


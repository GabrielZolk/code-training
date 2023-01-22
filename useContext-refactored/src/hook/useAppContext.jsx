import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export function useAppContext() {
    const context = useContext(AppContext)


    // error handling
    if(context === undefined) {
        throw new Error('Not in context')
    }
    return context
}
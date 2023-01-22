import { useState } from "react"
import { AppContext } from "./AppContext"

export function AppProvider({ children }) {
    const [name, setName] = useState('Zolk')
    const numberExample = 10

    return (
        <AppContext.Provider value={{ name, setName, numberExample }}>
            {children}
        </AppContext.Provider>
    )
}
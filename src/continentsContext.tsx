import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Continent {
    id: number
    name: string
}

interface ContinentsProviderProps {
    children: ReactNode
}

export const ContinentsContext = createContext<Continent[]>([])

export function ContinentsProvider({children}: ContinentsProviderProps) {
    const [continents, setContinents] = useState<Continent[]>([])

    useEffect(() => {
        api.get("/continents")
            .then(response => setContinents(response.data))
    }, [])

    return (
        <ContinentsContext.Provider value={continents}>
            {children}
        </ContinentsContext.Provider>
    )
}
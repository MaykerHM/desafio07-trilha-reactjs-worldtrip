import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface City {
    id: number
    name: string
    country: string
    cityIMG: string
    flag: string
}

interface Continent {
    id: number
    name: string
    shortDescription: string
    continentIMG: string
    description: string
    countriesNumber: string
    languagesNumber: string
    mostVisited100: string
    cities: City[]
}

interface ContinentsProviderProps {
    children: ReactNode
}

export const ContinentsContext = createContext<Continent[]>([])

export function ContinentsProvider({ children }: ContinentsProviderProps) {
    const [continents, setContinents] = useState<Continent[]>([])

    useEffect(() => {
        api.get("/continents")
            .then(response => setContinents(response.data.continents))
    }, [])

    return (
        <ContinentsContext.Provider value={ continents }>
            { children }
        </ContinentsContext.Provider>
    )
}
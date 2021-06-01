import { useContext } from 'react'
import { ContinentsContext } from '../continentsContext'

import { makeServer } from "../server"

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

export default function Continent() {
    const data = useContext(ContinentsContext)

    return(
        <h1>{data.toString()}</h1>
    )
}
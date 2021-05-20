import {useRouter} from 'next/router'

export default function Continent() {
    const router = useRouter()
    return(
        <h1>{router.query.continent}</h1>
    )
}
import { GetStaticPaths, GetStaticProps } from 'next'
import { useContext } from 'react'
import { ContinentsContext } from '../../continentsContext'

interface ContinentProps {
  slug: string
}

export default function Continent({ slug }: ContinentProps) {
  const continents = useContext(ContinentsContext)

  const continent = continents.filter(data => {
    if (data.name === slug) {
      return data
    }
  })

  return (
    <>
      { continent.map(continentSelected => (
        <h1> { continentSelected.name } </h1>
      ))
      }
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  return {
    props: {
      slug
    }
  }
}
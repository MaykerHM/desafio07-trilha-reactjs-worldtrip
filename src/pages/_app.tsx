import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../styles/theme'

import { Header } from '../components/Header'
import { ContinentsProvider } from '../continentsContext';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../components/Slider/styles.scss'

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    continent: Model,
  },

  seeds(server) {
    server.db.loadData({
      continents: [
        {
          id: 1,
          name: 'América do Norte',
          description: "O continente do novo mundo.",
          continentIMG: "assets/north_america.jpg",
        },
        {
          id: 2,
          name: 'América do Sul',
          description: "O continente da biodiversidade.",
          continentIMG: "assets/south_america.jpg",
        },
        {
          id: 3,
          name: 'Asia',
          description: "O maior continente do mundo.",
          continentIMG: "assets/asia.jpg",
        },
        {
          id: 4,
          name: 'Africa',
          description: "O continente da diversidade cultural.",
          continentIMG: "assets/africa.jpg",
        },
        {
          id: 5,
          name: 'Europa',
          description: "O continente mais antigo.",
          continentIMG: "assets/europe.svg",
        },
        {
          id: 6,
          name: 'Oceania',
          description: "O continente das ilhas.",
          continentIMG: "assets/oceania.jpg",
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/continents', () => {
      return this.schema.all('continent')
    })

    this.passthrough((request) => {
      if (request.url === '/_next/static/development/_devPagesManifest.json') {
        return true
      }
    })
  },
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContinentsProvider>
      <ChakraProvider theme={ theme }>
        <Header />
        <Component { ...pageProps } />
      </ChakraProvider>
    </ContinentsProvider>
  )
}

export default MyApp

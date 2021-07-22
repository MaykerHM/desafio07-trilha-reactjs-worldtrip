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
          shortDescription: "O continente do novo mundo.",
          continentIMG: "/assets/north_america.jpg",
          description: "",
          countriesNumber: "35",
          languagesNumber: "605",
          mostVisited100: "10",
          cities: []
        },
        {
          id: 2,
          name: 'América do Sul',
          shortDescription: "O continente da biodiversidade.",
          continentIMG: "/assets/south_america.jpg",
          description: "",
          countriesNumber: "13",
          languagesNumber: "456",
          mostVisited100: "3",
          cities: []
        },
        {
          id: 3,
          name: 'Asia',
          shortDescription: "O maior continente do mundo.",
          continentIMG: "/assets/asia.jpg",
          description: "",
          countriesNumber: "50",
          languagesNumber: "2294",
          mostVisited100: "53",
          cities: []
        },
        {
          id: 4,
          name: 'Africa',
          shortDescription: "O continente da diversidade cultural.",
          continentIMG: "/assets/africa.jpg",
          description: "",
          countriesNumber: "54",
          languagesNumber: "2144",
          mostVisited100: "4",
          cities: []
        },
        {
          id: 5,
          name: 'Europa',
          shortDescription: "O continente mais antigo.",
          continentIMG: "/assets/europe.svg",
          description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
          countriesNumber: "44",
          languagesNumber: "287",
          mostVisited100: "28",
          cities: []
        },
        {
          id: 6,
          name: 'Oceania',
          shortDescription: "O continente das ilhas.",
          continentIMG: "/assets/oceania.jpg",
          description: "",
          countriesNumber: "14",
          languagesNumber: "1313",
          mostVisited100: "2",
          cities: []
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

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
          description: "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).",
          countriesNumber: "35",
          languagesNumber: "605",
          mostVisited100: "10",
          cities: [
            {
              id: 1,
              name: 'Nova York',
              country: 'Estados Unidos',
              cityIMG: '/assets/cities/new_york.jpg',
              flag: '/assets/flags/united_states.png',
            },
            {
              id: 2,
              name: 'Miami',
              country: 'Estados Unidos',
              cityIMG: '/assets/cities/miami.jpg',
              flag: '/assets/flags/united_states.png',
            },
            {
              id: 3,
              name: 'Toronto',
              country: 'Canadá',
              cityIMG: '/assets/cities/toronto.jpg',
              flag: '/assets/flags/canada.png',
            },
            {
              id: 4,
              name: 'Cancún',
              country: 'México',
              cityIMG: '/assets/cities/cancun.jpg',
              flag: '/assets/flags/mexico.png',
            },
            {
              id: 5,
              name: 'Los Angeles',
              country: 'Estados Unidos',
              cityIMG: '/assets/cities/los_angeles.jpg',
              flag: '/assets/flags/united_states.png',
            },
          ]
        },
        {
          id: 2,
          name: 'América do Sul',
          shortDescription: "O continente da biodiversidade.",
          continentIMG: "/assets/south_america.jpg",
          description: "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.",
          countriesNumber: "13",
          languagesNumber: "456",
          mostVisited100: "3",
          cities: [
            {
              id: 1,
              name: 'Buenos Aires',
              country: 'Argentina',
              cityIMG: '/assets/cities/buenos_aires.jpg',
              flag: '/assets/flags/argentina.png',
            },
            {
              id: 2,
              name: 'Lima',
              country: 'Peru',
              cityIMG: '/assets/cities/lima.jpg',
              flag: '/assets/flags/peru.png',
            },
            {
              id: 3,
              name: 'Rio de Janeiro',
              country: 'Brasil',
              cityIMG: '/assets/cities/rio_de_janeiro.jpg',
              flag: '/assets/flags/brazil.png',
            },
            {
              id: 4,
              name: 'Santiago',
              country: 'Chile',
              cityIMG: '/assets/cities/santiago.jpg',
              flag: '/assets/flags/chile.png',
            },
            {
              id: 5,
              name: 'Maringá',
              country: 'Brasil',
              cityIMG: '/assets/cities/maringa.jpg',
              flag: '/assets/flags/brazil.png',
            },
          ]
        },
        {
          id: 3,
          name: 'Asia',
          shortDescription: "O maior continente do mundo.",
          continentIMG: "/assets/asia.jpg",
          description: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
          countriesNumber: "50",
          languagesNumber: "2294",
          mostVisited100: "53",
          cities: [
            {
              id: 1,
              name: 'Bangkok',
              country: 'Tailândia',
              cityIMG: '/assets/cities/bangkok.jpg',
              flag: '/assets/flags/thailand.png',
            },
            {
              id: 2,
              name: 'Tokyo',
              country: 'Japão',
              cityIMG: '/assets/cities/tokyo.jpg',
              flag: '/assets/flags/japan.png',
            },
            {
              id: 3,
              name: 'Singapura',
              country: 'Singapura',
              cityIMG: '/assets/cities/singapore.jpg',
              flag: '/assets/flags/singapore.png',
            },
            {
              id: 4,
              name: 'Kuala Lumpur',
              country: 'Malásia',
              cityIMG: '/assets/cities/kuala_lampur.jpg',
              flag: '/assets/flags/malaysia.png',
            },
            {
              id: 5,
              name: 'Istanbul',
              country: 'Turquia',
              cityIMG: '/assets/cities/istambul.jpg',
              flag: '/assets/flags/turkey.png',
            },
          ]
        },
        {
          id: 4,
          name: 'Africa',
          shortDescription: "O continente da diversidade cultural.",
          continentIMG: "/assets/africa.jpg",
          description: "A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.",
          countriesNumber: "54",
          languagesNumber: "2144",
          mostVisited100: "4",
          cities: [
            {
              id: 1,
              name: 'Johanesburgo',
              country: 'África do Sul',
              cityIMG: '/assets/cities/johannesburg.jpg',
              flag: '/assets/flags/south_africa.png',
            },
            {
              id: 2,
              name: 'Cairo',
              country: 'Egito',
              cityIMG: '/assets/cities/cairo.jpg',
              flag: '/assets/flags/egypt.png',
            },
            {
              id: 3,
              name: 'Hurgada',
              country: 'Egito',
              cityIMG: '/assets/cities/hurghada.jpg',
              flag: '/assets/flags/egypt.png',
            },
            {
              id: 4,
              name: 'Marrakech',
              country: 'Marrocos',
              cityIMG: '/assets/cities/marrakech.jpg',
              flag: '/assets/flags/morocco.png',
            },
          ]
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
          cities: [
            {
              id: 1,
              name: 'Paris',
              country: 'França',
              cityIMG: '/assets/cities/paris.jpg',
              flag: '/assets/flags/france.png',
            },
            {
              id: 2,
              name: 'Roma',
              country: 'Itália',
              cityIMG: '/assets/cities/rome.jpg',
              flag: '/assets/flags/italy.png',
            },
            {
              id: 3,
              name: 'Amsterdã',
              country: 'Holanda',
              cityIMG: '/assets/cities/amsterdam.jpg',
              flag: '/assets/flags/netherlands.png',
            },
            {
              id: 4,
              name: 'Milão',
              country: 'Itália',
              cityIMG: '/assets/cities/milan.jpg',
              flag: '/assets/flags/italy.png',
            },
            {
              id: 5,
              name: 'Viena',
              country: 'Áustria',
              cityIMG: '/assets/cities/vienna.jpg',
              flag: '/assets/flags/austria.png',
            },
          ]
        },
        {
          id: 6,
          name: 'Oceania',
          shortDescription: "O continente com mais ilhas.",
          continentIMG: "/assets/oceania.jpg",
          description: "Oceania é uma região geográfica que inclui a Australásia, Melanésia, Micronésia e Polinésia. Abrangendo os hemisférios oriental e ocidental, a Oceania tem uma área de 8.525.989 quilômetros quadrados e uma população de mais de 41 milhões.",
          countriesNumber: "14",
          languagesNumber: "1313",
          mostVisited100: "2",
          cities: [
            {
              id: 1,
              name: 'Melbourne',
              country: 'Austrália',
              cityIMG: '/assets/cities/melbourne.jpg',
              flag: '/assets/flags/australia.png',
            },
            {
              id: 2,
              name: 'Auckland',
              country: 'Nova Zelândia',
              cityIMG: '/assets/cities/auckland.jpg',
              flag: '/assets/flags/new_zealand.png',
            },
            {
              id: 3,
              name: 'Sidney',
              country: 'Austrália',
              cityIMG: '/assets/cities/sydney.jpg',
              flag: '/assets/flags/australia.png',
            },
            {
              id: 4,
              name: 'Ilhas Yasawa',
              country: 'Fiji',
              cityIMG: '/assets/cities/yasawas.jpg',
              flag: '/assets/flags/fiji.png',
            },
          ]
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

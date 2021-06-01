import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../styles/theme'

import { Header } from '../components/Header'
import { ContinentsProvider } from '../continentsContext';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../components/Slider/styles.scss'

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

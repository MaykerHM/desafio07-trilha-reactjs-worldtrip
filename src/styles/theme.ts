import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '375px',
  md: '768px',
  lg: '1440px',
  xl: '1920px',
})

export const theme = extendTheme({
  breakpoints,
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#47585B',
      '500': '#4B4D63',
      '400': '#616480',
      '350': '#999999',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#DADADA',
      '50': '#F5F8FA',
    },
    yellow: {
      '550': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      },
    },
  },
})

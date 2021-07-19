import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContinentsContext } from '../../continentsContext';
import { Container, Image, Link, Text } from "@chakra-ui/react";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slider() {
  const continents = useContext(ContinentsContext)

  return (
    <Flex
      justify="center"
      align="center"
      mb="2.5rem"
    >
      <Swiper
        spaceBetween={ 50 }
        slidesPerView={ 1 }
        navigation
        pagination={ { clickable: true } }
        onSlideChange={ () => console.log('slide change') }
        onSwiper={ (swiper) => console.log(swiper) }
      >
        { continents.map(continent => {
          return (
            <SwiperSlide >
              <Container
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="450px"
                overflow="hidden"
              >
                <Link
                  color="gray.100"
                  href={ `/continent/${continent.name}` }
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  alignItems="center"
                  textDecor="none"
                  transition="0.2s"
                >
                  <Text fontSize="3rem" >{ continent.name }</Text>
                  <Text fontSize="1.5rem" >{ continent.description }</Text>
                </Link>
                <Image
                  pos="absolute"
                  zIndex="-1"
                  height={ ["250px", "250px", "450px", "450px", "450px"] }
                  objectFit="cover"
                  src={ continent.continentIMG }
                />
              </Container>
            </SwiperSlide>
          )
        }) }
      </Swiper>
    </Flex>)
};
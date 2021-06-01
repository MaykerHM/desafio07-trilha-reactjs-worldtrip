import { Flex, Link } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './Slide';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slider() {
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
        <SwiperSlide >
          <Slide continent="América do Norte" description="O continente do novo mundo" imageSRC="assets/north_america.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide continent="América do Sul" description="O continente do novo mundo" imageSRC="assets/south_america.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide continent="Asia" description="O continente do novo mundo" imageSRC="assets/asia.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide continent="Africa" description="O continente do novo mundo" imageSRC="assets/africa.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide continent="Europa" description="O continente mais antigo" imageSRC="assets/europe.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide continent="Oceania" description="O continente do novo mundo" imageSRC="assets/oceania.jpg" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
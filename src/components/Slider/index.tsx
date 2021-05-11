import { Flex, Image } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Flex
      justify="center"
      align="center"
    >
      <Swiper
        spaceBetween={ 50 }
        slidesPerView={ 1 }
        navigation
        pagination={ { clickable: true } }
        onSlideChange={ () => console.log('slide change') }
        onSwiper={ (swiper) => console.log(swiper) }
      >
        <SwiperSlide>
          <Image src="assets/europe.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="assets/north_america.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="assets/south_america.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="assets/europe.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="assets/europe.svg" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
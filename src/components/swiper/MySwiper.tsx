import { FC } from 'react'
import React, { useRef, useState } from 'react';
import styles from './MySwiper.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

interface MySwiperProps {
  images: string[]
}


const MySwiper: FC<MySwiperProps> = ({ images }) => {
  // const dispatch = useAppDispatch()
  return (
    <div  className={styles.swiperContainer}>
    <Swiper
      pagination={{
        type: 'bullets',
      }}
      navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
      {images?.map((image, index) => (
        // console.log(images)
        <SwiperSlide key={index}>
          <img src={image} className={styles.swiperImage} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default MySwiper

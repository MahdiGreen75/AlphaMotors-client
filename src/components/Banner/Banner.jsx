import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='h-52 sm:h-[500px] my-1'>
            <div id="app">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='relative'>
                        <img src="https://i.ibb.co/vBhzdFg/car-2.jpg" />
                        <div className='text-white absolute'>
                            <p>Hi</p>
                            <p>how</p>
                            <p>are you?</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/rcSN285/car-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/vXcSDjd/car-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/TvNDxgS/car-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/FX3GvXx/car-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/gV9ZhgY/car-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/DpZyp1z/car-8.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Banner;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './stylesBanner.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const [slides, setSlides] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://alpha-motors-server.vercel.app/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [id])

    useEffect(() => {
        fetch(`https://alpha-motors-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setSlides(data[0][id].slider_img);
            })
    }, [id])

    return (
        <div>
            <div>
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
                            className="mySwiper swiper-banner"
                        >
                            <SwiperSlide className='relative'>
                                <img src={slides[0]} />
                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={slides[1]} />
                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src={slides[2]} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    products.map(product => <Product key={product._id} product={product} ></Product>)
                }
            </div>
        </div>
    );
};

export default ProductDetails;
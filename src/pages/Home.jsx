import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import GoodsCard from "../components/goodsCard";

const Home = () => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                pagination={true}
                onSwiper={(swiper) => swiper}
                onSlideChange={() => "slide change"}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Популярное</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Спортивная одежда</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Активный отдых</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Спортивная одежда</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Активный отдых</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
            </div>



        </>
    );
};

export default Home;

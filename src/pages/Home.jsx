import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import GoodsCard from "../components/GoodsCard";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = () => {

    const data = useSelector(state => state.goods.data)
    // const liked = useSelector(state => state.liked.data)

    // console.log(liked);
    const arr = Array(data).at(-1)

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

            <div className="grid xs:grid-cols-2 gap-[20px] vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">

                {
                    arr.slice(0, 5).map((item, ind) =><GoodsCard key={ind} item={item} />)
                }

            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Спортивная одежда</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 gap-[20px]  vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                {
                    arr.slice(6, 11).map((item, ind) => <NavLink to={`/product/${item.id}`} ><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Активный отдых</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 gap-[20px]  vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                {
                    arr.slice(12, 17).map((item, ind) => <NavLink to={`/product/${item.id}`} ><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Спортивная одежда</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 gap-[20px]  vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                {
                    arr.slice(18, 23).map((item, ind) => <NavLink to={`/product/${item.id}`}><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Активный отдых</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 gap-[20px]  vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                {
                    arr.slice(24, 29).map((item, ind) => <NavLink to={`/product/${item.id}`}><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

        </>
    );
};

export default Home;

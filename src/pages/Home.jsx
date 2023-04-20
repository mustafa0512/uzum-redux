import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import GoodsCard from "../components/GoodsCard";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SwiperComp from "../components/SwiperComp";


const Home = () => {

    const data = useSelector(state => state.goods.data)

    const [count, setCount] = useState(5)
    const arr = Array(data).at(-1)
    const arrLen = arr.length

    if (count >= arrLen + 1) {
        setCount(5)
        console.log('111');
    }

    return (
        <>
            <SwiperComp />

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Популярное</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 gap-[20px] vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  ">

                {
                    arr.slice(0, count).map((item, ind) => <NavLink to={`/product/${item.id}`} ><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

            <div className=" text-center mt-[20px] mb-[20px]">
                <button onClick={() => setCount(count + 5)} className="px-4 py-2 bg-[#EAEAF9] text-[#3333CC] rounded-[6px] font-medium">{arrLen == count ? 'Свернуть' : `Показать еще ${(arrLen - count) >= 10 ? '5' : (arrLen - count)}`} </button>
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Спортивная одежда</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="flex gap-[20px] overflow-x-scroll">
                {
                    arr.slice(6, 11).map((item, ind) => <NavLink to={`/product/${item.id}`} ><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Активный отдых</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="flex gap-[20px] overflow-x-scroll">
                {
                    arr.slice(12, 17).map((item, ind) => <NavLink to={`/product/${item.id}`} ><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Спортивная одежда</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="flex gap-[20px] overflow-x-scroll">
                {
                    arr.slice(18, 23).map((item, ind) => <NavLink to={`/product/${item.id}`}><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Активный отдых</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="flex gap-[20px] overflow-x-scroll">
                {
                    arr.slice(24, 29).map((item, ind) => <NavLink to={`/product/${item.id}`}><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>

        </>
    );
};

export default Home;

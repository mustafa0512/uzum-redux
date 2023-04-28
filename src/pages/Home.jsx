import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import GoodsCard from "../components/GoodsCard";
import { useDispatch, useSelector } from "react-redux";
import SwiperComp from "../components/SwiperComp";
import Categories from "../components/Catgories";
import { getGoodsThunk } from "../features/goods/getGoodsThunk";



const Home = () => {

    const data = useSelector(state => state.goods.data)

    const [count, setCount] = useState(31)
    const arr = Array(data).at(-1)
    const arrLen = arr.length
    let itemCat = data.map((item) => item.type);
    itemCat = [...new Set(itemCat)];
    const dispatch = useDispatch()
    
    useEffect(() => {
		if (!data.length) {
			dispatch(getGoodsThunk())
		}   
	}, []);


    return (
        <>
            <SwiperComp />

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Популярное</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 gap-[20px] vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  ">
                {
                    data.slice(26, count).map((item, inx) => <GoodsCard key={inx} item={item} />)
                }
            </div>

            <div className=" text-center mt-[20px] mb-[20px]">
                <button onClick={() => setCount(count + 5)} className="px-4 py-2 bg-[#EAEAF9] text-[#3333CC] rounded-[6px] font-medium">{(arrLen - count) <= 0 ? 'Свернуть' : `Показать еще ${(arrLen - count) <= 5 ? (arrLen - count) : '5'}`} </button>
            </div>
            {
                itemCat.map((item, inx) => <Categories key={inx} item={item} />)
            }
        </>
    );
};

export default Home;

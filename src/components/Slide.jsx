import { NavLink } from "react-router-dom";
import { useSwiper } from "swiper/react";

const Slide = ({ item }) => {
    const swiper = useSwiper();

    const percent = Math.round(item?.price - ((item?.price * item?.salePercentage) / 100))
    return (
        <>
            <div className="flex items-center relative h-full justify-betwen text-white px-[60px]">
                <div className="w-[70%] text-[#000] text-start flex flex-col gap-4">
                    <NavLink to={`/product/${item.id}`} >
                        <h1 className="text-[38px] font-semibold">{item.title}</h1>
                    </NavLink>
                    <div className="w-full">
                        <p className="text-[28px] font-semibold">{percent}</p>
                    </div>
                    <p className="text-[14px] font-semibold w-[70%]">{item.description}</p>
                </div>
                <div className="w-[300px]"><img src={item.media[0]} alt="" /></div>
                <div className="next" onClick={() => swiper.slideNext()}></div>
                <div className="prev" onClick={() => swiper.slidePrev()}></div>
            </div>
        </>
    );
}

export default Slide;
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import Slide from "./Slide";





const SwiperComp = () => {
    const data = useSelector(state => state.goods.data)

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => swiper}
                onSlideChange={() => "slide change"}
            >
                {data.slice(23, 33).map((item, inx) => (
                    <SwiperSlide key={inx} className="">
                        <Slide key={inx} item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default SwiperComp;
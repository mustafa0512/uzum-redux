import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";



const SwiperComp = () => {
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
                <SwiperSlide>
                    <div className="text-start p-[10px] ss:p-[100px]">
                        <span className="font-semibold text-[22px] ss:text-[48px] md:text-[58px]">Подсолнечное масло</span>
                        <h2 className="font-bold ss:text-[30px] ss:mb-[20px] mt-[10px] ss:mt-[20px]">30,000 сум</h2>
                        <p className="hidden ss:block w-[90%] md:w-[60%]">Станьте востребованным разработчиком. Вы изучите основы программирования и основные концепции компьютерных наук, цифровые технологии, операционные системы, программное обеспечение, базы данных, системы аналитики, языки программирования и многое другое. Познакомитесь с тестированием и системным анализом. На программе сможете сделать осознанный выбор специализации и технологий, прокачаться в выбранном направлении.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-start p-[10px] ss:p-[100px]">
                        <span className="font-semibold text-[22px] ss:text-[48px] md:text-[58px]">Подсолнечное масло</span>
                        <h2 className="font-bold ss:text-[30px] ss:mb-[20px] mt-[10px] ss:mt-[20px]">30,000 сум</h2>
                        <p className="hidden ss:block w-[90%] md:w-[60%]">Станьте востребованным разработчиком. Вы изучите основы программирования и основные концепции компьютерных наук, цифровые технологии, операционные системы, программное обеспечение, базы данных, системы аналитики, языки программирования и многое другое. Познакомитесь с тестированием и системным анализом. На программе сможете сделать осознанный выбор специализации и технологий, прокачаться в выбранном направлении.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperComp;
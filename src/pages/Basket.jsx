import BasketCard from "../components/BasketCard";

const Basket = () => {
    return (

        // <div className="md:flex">
        //     <div className="border-[1px] border-[#d9d9d9] rounded-[10px] p-5 mr-[20px] mb-[30px]">
        //         <BasketCard />
        //         <BasketCard />
        //     </div>
        //     <div className="md:w-[430px] h-fit  border-[1px] border-[#d9d9d9] rounded-[10px] p-5 md:block">
        //         <div className="flex justify-between">
        //             <span className="text-[10px] ss:text-[26px] font-semibold ss:mt-[15px]">1 650 000 сум</span>

        //             <div className="ss:mt-[20px] mb-[10px] md:mb-[40px]">
        //                 <p className="text-[8px] ss:text-[16px] font-bold ss:font-normal ">Итого товаров: 14</p>
        //                 <p className="text-[8px] ss:text-[16px] font-bold ss:font-normal ">Итого скидки: 244 000 сум</p>
        //             </div>
        //         </div>


        //         <button className="px-12  md:h-[40px] w-full rounded-[7px] text-[12px] md:text-[16px] text-[#fff] bg-[#7000FF] text-center py-1 md:py-2">Оформить</button>
        //     </div>
        // </div>

        <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
                <img className="m-auto mb-[20px]" src="/img/shopocat.png" alt="" />
                <span className="font-bold text-[20px]  ss:text-[24px] md:text-[30px]">В корзине пока нет товаров</span>
                <p className="  text-[12px]  ss:text-[14px] md:text-[16px] mt-[20px] w-[95%] ml-[10px]">Начните с подборок на главной странице или найдите нужный товар через поиск</p>
            </div>
        </div>
    );
}

export default Basket;
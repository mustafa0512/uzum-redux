const Basket = () => {
    return (
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
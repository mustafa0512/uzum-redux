const Totalcart = ({ goodQt, cart }) => {
    const calcTotal = cart.map(item => item.price).reduce((a, b) => a + b, 0)
    const calcPercent = cart.map(item => Math.round(item.price - ((item.price * item.salePercentage) / 100))).reduce((a, b) => a + b, 0)
    return (
        <div className="md:w-[430px] h-fit  border-[1px] border-[#d9d9d9] rounded-[10px] p-5 md:block">
            <div className="flex justify-between">
                <span className="text-[10px] ss:text-[26px] font-semibold ss:mt-[15px]">{calcTotal - calcPercent} сум</span>

                <div className="ss:mt-[20px] mb-[10px] md:mb-[40px]">
                    <p className="text-[8px] ss:text-[16px] font-bold ss:font-normal ">Итого товаров: {goodQt}</p>
                    <p className="text-[8px] ss:text-[16px] font-bold ss:font-normal ">Итого скидки: {calcPercent} сум</p>
                </div>
            </div>


            <button className="px-12  md:h-[40px] w-full rounded-[7px] text-[12px] md:text-[16px] text-[#fff] bg-[#7000FF] text-center py-1 md:py-2">Оформить</button>
        </div>
    );
}

export default Totalcart;
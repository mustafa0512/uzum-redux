import { useSelector } from "react-redux";

const Product = () => {
    
    const data = useSelector(state => state.goods.data)

    console.log(data[0]);

    const id = window.location.href.split('/').at(-1)
    console.log(id);  

    return (
        <>
            <div className="sm:flex mb-[50px]">
                <div className="flex justify-center">
                    <div className="barImgs mr-[10px] h-[400px] md:h-[500px] overflow-hidden overflow-scroll  min-w-[80px] hidden xs:block">
                        <img className="w-[80px] h-[100px] bg-[#fff] mb-[10px] rounded-[8px]" src="/img/phoneImg.png"></img>
                        <img className="w-[80px] h-[100px] bg-[#fff] mb-[10px] rounded-[8px]" src="/img/phoneImg.png"></img>
                        <img className="w-[80px] h-[100px] bg-[#fff] mb-[10px] rounded-[8px]" src="/img/phoneImg.png"></img>
                        <img className="w-[80px] h-[100px] bg-[#fff] mb-[10px] rounded-[8px]" src="/img/phoneImg.png"></img>
                        <img className="w-[80px] h-[100px] bg-[#fff] mb-[10px] rounded-[8px]" src="/img/phoneImg.png"></img>
                    </div>
                    <img className=" h-[400px] min-w-[310px] md:h-[500px] md:min-w-[380px]  rounded-[20px]" src="/img/phoneImg.png"></img>
                </div>

                <div className="sm:ml-[50px] mt-[30px] sm:mt-[0]">
                    <span className="text-[24px] md:text-[32px] font-semibold">Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг</span>
                    <div className="flex w-[350px] items-center mt-[30px] mb-[30px]">
                        <p className="text-[22px] sm:text-[28px] font-semibold ">30 000 сум</p>
                        <s className="text-[20px] sm:text-[24px] text-[#acacac] ml-[20px]">45 000 сум</s>
                    </div>
                    <div className="flex items-center justify-between w-[100px] rounded-[6px] border-[1px] border-[#acacac] text-[20px] mt-[30px] mb-[20px] px-2">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                    <div className="w-full h-[1px] bg-[#acacac] mb-[30px]"></div>
                    <p className="w-[95%] text-[13px] md:text-[16px]">Станьте востребованным разработчиком. Вы изучите основы программирования и основные концепции компьютерных наук, цифровые технологии, операционные системы, программное обеспечение, базы данных, системы аналитики, языки программирования и многое другое. Познакомитесь с тестированием и системным анализом. На программе сможете сделать осознанный выбор специализации и технологий, прокачаться в выбранном направлении.</p>
                    <div className="flex items-center mt-[30px]">
                        <button className=" rounded-[7px] text-[12px] md:text-[16px] text-[#fff] bg-[#7000FF] py-2  px-3 xs:px-4">Добавить в корзину</button>
                        <button className=" rounded-[7px] text-[12px] md:text-[16px] border-[1px] border-[#7000FF] py-2  px-3 xs:px-4 text-[#7000FF] ml-[30px]">Добавить в избранное</button>
                    </div>
                </div>
            </div>
            <center className="w-[60%] mt-[50px] text-start m-auto">
                <span className="font-medium text-[18px]">Описание товара</span>
                <p className="text-[14px] mt-[30px]">Стиральный порошок Tide Lenor Touch подходит для использования в стиральных машинах любого типа. Сочетание очищающего эффекта порошка и смягчающего эффекта Lenor делает вещи безупречно чистыми, нежными и свежими. Стирайте согласно рекомендациям на ярлыках текстильных изделий. Рекомендованный режим стирки — от 20 минут при температуре воды 30'C и выше. Обратите внимание: порошок не предназначен для стирки изделий из шерсти и шелка. Синтетическое моющее средство порошкообразное для использования в стиральных машинах любого типа. Рекомендованная температура стирки указана на ярлыках текстильных изделий. Не перегружайте стиральную машину. Оставьте зазор в ширину ладони между загруженным бельем и барабаном. Белье будет двигаться свободно, стирка будет более эффективной.</p>
            </center>
        </>
    );
}

export default Product;
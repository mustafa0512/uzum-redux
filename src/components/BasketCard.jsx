import { remove_from_cart } from "../features/cart/cartSlise";
import { useState } from "react";

const BasketCard = ({ item }) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if (count >= 2) {
            setCount(count - 1)
        } else {
            setCount(count = 1)
        }
    }

    return (
        <div className="flex mb-[30px]">
            <img className="w-[150px] h-[180px] ss:w-[230px] ss:h-[270px] rounded-[12px]" src={item.media[0]} alt="" />

            <div className="md:mt-[20px] ml-[8px] md:ml-[50px]">
                <span className="font-semibold text-[10px]  xs:text-[12px] ss:text-[18px] md:text-[24px]">{item.title}</span>
                <p className="text-[12px] ss:text-[20px] font-bold ss:font-semibold mt-[15px]">{item.price} сум</p>
                <div className="flex items-center justify-between w-[70px] ss:w-[100px] rounded-[6px] border-[1px] border-[#acacac] text-[12px] ss:text-[20px] mt-[10px] mb-[10px] ss:mt-[30px] ss:mb-[20px] px-2">
                    <button onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div onClick={() => dispatch(remove_from_cart(item?.id))} className="bg-[#EBEBFAFF] w-[100px] text-center h-[25px] ss:h-[45px] font-medium rounded-[4px] flex items-center justify-center">
                    <p className="text-[#3333CC] text-[10px] ss:text-[14px]">Удалить</p>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;
import { useSelector } from "react-redux";
import GoodsCard from "./GoodsCard";
import { useState } from "react";

const Categories = ({ item }) => {
    const data = useSelector(state => state.goods.data)
    const fildCat = data.filter(elem => elem.type == item)

    const [count, setCount] = useState(5)
    const arrLen = fildCat.length

    if (count >= arrLen + 2) {
        setCount(5)
    }

    return (
        <>
            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">{item.toUpperCase()}</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="forScroll sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 flex overflow-x-scroll">
                {
                    fildCat.slice(0, count).map((item, ind) => <GoodsCard key={ind} item={item} />)
                }
            </div>

            <div className=" text-center mt-[20px] mb-[20px]">
                <button onClick={() => setCount(count + 5)} className="px-4 py-2 bg-[#EAEAF9] text-[#3333CC] rounded-[6px] font-medium">{(arrLen - count) <= 0 ? 'Свернуть' : `Показать еще ${(arrLen - count) <= 5 ? (arrLen - count) : '5'}`} </button>
            </div>
        </>
    );
}

export default Categories;
import { useSelector } from "react-redux";
import Product from "../components/Product";
import GoodsCard from "../components/GoodsCard";
import { NavLink } from "react-router-dom";



const AboutGoods = () => {
    const data = useSelector(state => state.goods.data)
    


    const arr = Array(data).at(-1)
    return (
        <>
            <Product />

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Похожие товары</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 gap-[20px]  vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-[30px]">
                {
                    arr.slice(0, 5).map((item, ind) => <NavLink to={`/product/${item.id}`} ><GoodsCard key={ind} item={item} /></NavLink>)
                }
            </div>
        </>
    );
}

export default AboutGoods;
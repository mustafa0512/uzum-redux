import { useSelector } from "react-redux";
import GoodsCard from "./GoodsCard";

const CatalogCat = ({ item }) => {
    const data = useSelector(state => state.goods.data)
    const fildCat = data.filter(elem => elem.type == item)

    return (

        <>
            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">{item.toUpperCase()}</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {
                    fildCat.slice(0, 10).map((item, ind) => <GoodsCard key={ind} item={item} />)
                }
            </div>

            
        </>

    );
}

export default CatalogCat;
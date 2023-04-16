import Product from "../components/Product";
import GoodsCard from "../components/goodsCard";



const AboutGoods = () => {
    return (
        <>
            <Product/>

            <div className="flex items-center h-[20px] mb-[30px] mt-[30px]">
                <p className="font-bold text-[24px]">Похожие товары</p>
                <img className="w-[10px] mt-[5px] ml-[20px]" src="/img/catArrow.svg" alt="" />
            </div>

            <div className="grid xs:grid-cols-2 gap-[20px]  vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-[30px]">
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
                <GoodsCard />
            </div>
        </>
    );
}

export default AboutGoods;
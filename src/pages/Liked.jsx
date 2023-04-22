import { useSelector } from "react-redux";
import GoodsCard from "../components/GoodsCard";


const Liked = () => {
    const liked = useSelector(state => state.liked.data)

    if (liked.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <img className="m-auto mb-[20px]" src="/img/hearts.png" alt="" />
                    <span className="font-bold text-[20px]  ss:text-[24px] md:text-[30px]">Добавьте то, что понравилось</span>
                    <p className="  text-[12px]  ss:text-[14px] md:text-[16px] mt-[20px] w-[95%] ml-[10px]">Перейдите на главную страницу и нажмите на ♡ в товаре На главную</p>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className="grid xs:grid-cols-2 gap-[20px] vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  ">
                    {
                        liked.map((item, inx) => <GoodsCard key={inx} item={item} />)
                    }
                </div>
            </>
        )
    }


}

export default Liked;
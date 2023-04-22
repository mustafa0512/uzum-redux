import { useDispatch, useSelector } from "react-redux";
import { addLiked, removeLiked } from "../features/liked/likedSlise";
import MiniImg from "./MiniImg";

const Product = () => {

    const data = useSelector(state => state.goods.data)
    const liked_id = useSelector(state => state.liked.data_id)
    const dispatch = useDispatch()

    const id = window.location.href.split('/').at(-1)
    const fillId = data.filter(item => item.id == id)

    const likeItem = () => {
        if (liked_id.includes(fillId[0]?.id)) {
            dispatch(removeLiked(fillId[0]?.id))
        } else {
            dispatch(addLiked(fillId[0]))
        }
    }

    return (
        <>
            <div className="sm:flex mb-[50px]">
                <div className="flex justify-center">
                    <div className="barImgs mr-[10px] h-[400px] md:h-[500px] overflow-hidden overflow-scroll  min-w-[80px] hidden xs:block">

                        {
                            fillId.map((item, inx) => <MiniImg key={inx} item={item} />)
                        }

                    </div>
                    <img className="h-[400px] min-w-[310px] md:h-[500px] md:min-w-[380px]  rounded-[20px]" src={fillId[0]?.media[0]}></img>
                </div>

                <div className="sm:ml-[50px] mt-[30px] sm:mt-[0]">
                    <span className="text-[24px] md:text-[32px] font-semibold">{fillId[0]?.title}</span>
                    <div className="flex w-[350px] items-center mt-[30px] mb-[30px]">
                        <p className="text-[22px] sm:text-[28px] font-semibold ">{fillId[0]?.price} сум</p>
                        <s className="text-[20px] sm:text-[24px] text-[#acacac] ml-[20px]">45 000 сум</s>
                    </div>
                    <div className="flex items-center justify-between w-[100px] rounded-[6px] border-[1px] border-[#acacac] text-[20px] mt-[30px] mb-[20px] px-2">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                    <div className="w-full h-[1px] bg-[#acacac] mb-[30px]"></div>
                    <p className="w-[95%] text-[13px] md:text-[16px]">{fillId[0]?.description}</p>
                    <div className="flex items-center mt-[30px]">
                        <button className=" rounded-[7px] text-[12px] md:text-[16px] text-[#fff] bg-[#7000FF] py-2  px-3 xs:px-4">Добавить в корзину</button>
                        <button onClick={() => likeItem()} className=" rounded-[7px] text-[12px] md:text-[16px] border-[1px] border-[#7000FF] py-2  px-3 xs:px-4 text-[#7000FF] ml-[30px]">{liked_id.includes(fillId[0]?.id) ? 'убрать из избранных' : 'Добавить в избранное'}</button>
                    </div>
                </div>
            </div>
            <center className="w-[60%] mt-[50px] text-start m-auto">
                <span className="font-medium text-[18px]">Описание товара</span>
                <p className="text-[14px] mt-[30px]">{fillId[0]?.description}</p>
            </center>
        </>
    );
}

export default Product;
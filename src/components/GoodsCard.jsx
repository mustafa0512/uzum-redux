import { useSelector, useDispatch } from "react-redux";
import { addLiked, removeLiked } from "../features/liked/likedSlise";
import { NavLink } from "react-router-dom";

const GoodsCard = ({ item }) => {

    const liked_id = useSelector(state => state.liked.data_id)
    const dispatch = useDispatch()

    // console.log(item);
    const percent = Math.round(item?.price - ((item?.price * item?.salePercentage) / 100))
    const perMonth = Math.round(item?.price / 12)
    const quantity = Math.round(Math.random() * 10)

    const likeItem = () => {
        if(liked_id.includes(item?.id)) {
            dispatch(removeLiked(item?.id))
        } else {
            dispatch(addLiked(item))
        }
    }

    return (
        <div lassName="forShad h-[480px] ss:min-w-[250px] hover:shadow-lg mb-[50px] rounded-[10px] select-none ">

            <div style={{ backgroundImage: `url(${item?.media[0]})` }} className={`cardImg`}>

                <NavLink to={`/`} >
                    <img onClick={likeItem} className="w-[26px] z-10" src={`${liked_id.includes(item?.id) ? '/img/addLikedImg.svg' : '/img/likeImg.svg'}`} alt="" />
                </NavLink>

            </div>

            <div className="px-3 ">
                <p className="text-[16px] font-medium mt-[20px] h-[68px] overflow-hidden">{item?.title}</p>

                <div className="flex items-center mt-[15px]">
                    <img src="/img/starImg.svg" alt="" />
                    <p className="text-[#ACACAC]">{item?.rating} ({quantity} оценки)</p>
                </div>

                <div className="bg-[#FFFF00] rounded-[4px] w-[160px] text-center mt-[20px]">
                    <p className="font-medium ml-[10px] mr-[10px]">{perMonth} сум/мес</p>
                </div>

                <div className="flex items-center justify-between mt-[10px]">
                    <div>
                        <s className={`${percent === item?.price ? 'hidden' : 'block'} text-[#ACACAC] text-[10px] ss:text-[14px] font-medium`}>{percent} сум</s>
                        <p className="text-[#000] text-[14px] ss:text-[18px] font-medium">{item?.price}сум</p>
                    </div>
                    <NavLink to={`/`} >
                        <div className="w-[35px] h-[35px] rounded-[50%] border-[2px] border-[#ACACAC] flex items-center justify-center ">
                            <img src="/img/forBuyImg.svg" alt="" />
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default GoodsCard;
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import Totalcart from "../components/TotalCart";
import { getCartThunk } from "../features/cart/postCartThunk";
import { useEffect } from "react";

const Basket = () => {
    const cart = useSelector(state => state.cart.data)
    const cart_id = useSelector(state => state.cart.data_id)
    const goodQt = cart.length
    const dispatch = useDispatch()

    useEffect(() => {
        if (!cart_id.length) {
            dispatch(getCartThunk())
        }
    }, []);

    const cartItem = () => {
        if (cart_id.includes(item?.id)) {
            dispatch(remove_from_cart(item?.id))
        } else {
            dispatch(add_to_cart(item))
        }
    }

    if (cart.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <img className="m-auto mb-[20px]" src="/img/shopocat.png" alt="" />
                    <span className="font-bold text-[20px]  ss:text-[24px] md:text-[30px]">В корзине пока нет товаров</span>
                    <p className="  text-[12px]  ss:text-[14px] md:text-[16px] mt-[20px] w-[95%] ml-[10px]">Начните с подборок на главной странице или найдите нужный товар через поиск</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="md:flex">
                <div className="border-[1px] border-[#d9d9d9] rounded-[10px] p-5 mr-[20px] mb-[30px]">
                    {
                        cart.map((item, inx) => <BasketCard item={item} key={inx} />)
                    }
                </div>
                <Totalcart goodQt={goodQt} cart={cart} />
            </div>
        )
    }

}

export default Basket;
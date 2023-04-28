import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoodsThunk } from "../features/goods/getGoodsThunk";
import Categories from "../components/Catgories";

const Catalog = () => {

    const data = useSelector(state => state.goods.data)
    const dispatch = useDispatch()

    const [catigory, setCatigory] = useState('')

    let itemCat = data.map((item) => item.type);
    itemCat = [...new Set(itemCat)];
    const filCat = itemCat.filter(item => item === catigory )

    useEffect(() => {
        if (!data.length) {
            dispatch(getGoodsThunk())
        }
    }, []);

    console.log(filCat);


    function show(item,item_2) {
        // if (item === item_2) {
        //     console.log('11');
        // } else {
        //     console.log(item_2);
        // }
        console.log(item);
    }
    return (
        <div className="mt-[30px] flex  ">
            <div className="w-[30%]">
                <div>
                    <h1 className="font-bold text-[28px]">Категории</h1>
                    {
                        itemCat.map((item, inx) => <p onClick={() => setCatigory(item)}  key={inx} className="text-[#212121] mt-[10px] text-[18px]">{item}</p>)
                    }
                </div>
                <div className="mt-[30px]">
                    <form className="flex">
                        <label className="flex w-[150px] px-[10px] py-2  border-[1px] border-[] rounded-[8px] " htmlFor="">
                            <p>От</p>
                            <input type="number" className="w-[100px] outline-none ml-[10px]" name="from" id="" />
                        </label>
                        <label className="flex w-[150px] px-[10px] py-2   border-[1px] border-[] rounded-[8px] ml-[10px] ">
                            <p>До</p>
                            <input className="w-[100px] ml-[10px] outline-none" type="number" name="to" id="" />
                        </label>
                    </form>
                </div>
            </div>
            <div>
                {
                    filCat.map((item, inx) => <Categories key={inx} item={item} />)
                }
            </div>
        </div>
    );
}

export default Catalog;